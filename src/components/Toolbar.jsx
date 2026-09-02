import { useState, useEffect, useMemo, useRef, useLayoutEffect } from 'react';
import Menu from './Menu.jsx';
import Group from './Group.jsx';
import BarComponent from './BarComponent.jsx';

import { useWritableProp } from '@svar-ui/lib-react';
import { normalizeToolbarItems } from '../helpers';
import './Toolbar.css';

function Toolbar(props) {
  const {
    items: itemsProp,
    menuCss = '',
    css = '',
    values: valuesProp,
    overflow = 'menu',
    layout = 'row',
    onClick,
    onChange,
  } = props;

  const [items, setItems] = useWritableProp(itemsProp || []);
  const [values, setValues] = useWritableProp(valuesProp || null);

  const barItems = useMemo(() => normalizeToolbarItems(items), [items]);
  const vertical = layout === 'column';

  const divRef = useRef(null);

  const [menuItems, setMenuItems] = useState([]);

  // refs to keep latest values for callbacks created once
  const barItemsRef = useRef(barItems);
  useEffect(() => {
    barItemsRef.current = barItems;
  }, [barItems]);

  const overflowRef = useRef(overflow);
  useEffect(() => {
    overflowRef.current = overflow;
  }, [overflow]);

  const verticalRef = useRef(vertical);
  useEffect(() => {
    verticalRef.current = vertical;
  }, [vertical]);

  const menuItemsRef = useRef(menuItems);
  useEffect(() => {
    menuItemsRef.current = menuItems;
  }, [menuItems]);

  const scheduleOverflowCheckRef = useRef(false);

  function handleChange(ev) {
    if (values) {
      values[ev.item.key] = ev.value;
      // trigger update similar to `values = values;`
      setValues({ ...values });
    }
    onChange && onChange(ev);
  }

  function getTotalWidth() {
    const div = divRef.current;
    if (!div) return 0;
    const nodes = div.children;
    const it = barItemsRef.current || [];
    let sum = 0;
    for (let i = 0; i < it.length; i++) {
      if (it[i].comp !== 'spacer') {
        sum += nodes[i]?.clientWidth || 0;
        if (it[i].comp === 'separator') sum += 8;
      }
    }
    return sum;
  }

  function collapseGroups() {
    const div = divRef.current;
    const it = barItemsRef.current || [];
    if (!div) return;

    for (let i = it.length - 1; i >= 0; i--) {
      // close rightmost open group
      if (it[i].items && !it[i].collapsed) {
        it[i].collapsed = true;
        it[i].$width = div.children[i].offsetWidth;
        // schedule after DOM update
        scheduleOverflowCheckRef.current = true;

        // items are not deep reactive, so we need to trigger the update
        setItems([...items]);
        return;
      }
    }
  }

  function expandGroups(freeSpace) {
    const div = divRef.current;
    const it = barItemsRef.current || [];
    if (!div) return;

    for (let i = 0; i < it.length; i++) {
      // open leftmost closed group that was collapsed by overflow
      if (it[i].collapsed && it[i].$width) {
        // check if group can fit in free space
        if (it[i].$width - div.children[i].offsetWidth < freeSpace + 10) {
          it[i].collapsed = false;
          // items are not deep reactive, so we need to trigger the update
          setItems([...items]);
          // schedule after DOM update
          scheduleOverflowCheckRef.current = true;
        }
        return;
      }
    }
  }

  function processOverflow() {
    const div = divRef.current;
    if (!div) return;
    const it = barItemsRef.current || [];
    const ov = overflowRef.current;

    if (ov === 'wrap' || verticalRef.current) return;

    const nodes = div.children;
    // restore all items so widths can be measured
    for (let i = 0; i < it.length; i++) {
      if (nodes[i]) nodes[i].style.display = '';
    }

    const visibleWidth = div.clientWidth;
    const fullWidth = div.scrollWidth;
    const needMenu = fullWidth > visibleWidth;

    if (needMenu) {
      if (ov === 'collapse') return collapseGroups();

      // pinned items always stay visible
      let pinnedWidth = 0;
      for (let i = 0; i < it.length; i++) {
        if (it[i].pinned) pinnedWidth += nodes[i].clientWidth;
      }

      let sum = 0;
      for (let i = 0; i < it.length; i++) {
        if (it[i].pinned) continue;
        sum += nodes[i].clientWidth;
        if (it[i].comp === 'separator') sum += 8;
        if (sum > visibleWidth - 40 - pinnedWidth) {
          // we need to hide nodes[i] and all next non-pinned nodes
          const newMenuItems = [];
          for (let j = i; j < it.length; j++) {
            if (it[j].pinned) continue;
            newMenuItems.push(it[j]);
            nodes[j].style.display = 'none';
          }
          // hide the ending separator
          if (i > 0 && it[i - 1].comp === 'separator' && !it[i - 1].pinned) {
            nodes[i - 1].style.display = 'none';
          }
          setMenuItems(newMenuItems);
          break;
        }
      }
    } else {
      const freeWidth = visibleWidth - getTotalWidth();
      if (freeWidth <= 0) return;
      if (ov === 'collapse') return expandGroups(freeWidth);

      if ((menuItemsRef.current || []).length) setMenuItems([]);
    }
  }

  // run processOverflow after DOM updates triggered by collapse/expand
  useEffect(() => {
    if (scheduleOverflowCheckRef.current) {
      scheduleOverflowCheckRef.current = false;
      processOverflow();
    }
  }, [items]);

  useLayoutEffect(() => {
    const ro = new ResizeObserver(() => {
      processOverflow();
    });
    if (divRef.current) ro.observe(divRef.current);
    return () => {
      if (ro) ro.disconnect();
    };
  }, []);

  const className = [
    'wx-VdPSJj8y',
    'wx-toolbar',
    css || '',
    overflow === 'wrap' ? 'wx-wrap' : '',
    vertical ? 'wx-column' : '',
    menuItems.length ? 'wx-has-menu' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className} ref={divRef}>
      {barItems.map((item) =>
        item.items ? (
          <Group
            key={item.id}
            item={item}
            values={values}
            onClick={onClick}
            onChange={handleChange}
          />
        ) : (
          <BarComponent
            key={item.id}
            item={item}
            values={values}
            onClick={onClick}
            onChange={handleChange}
          />
        ),
      )}
      {!!menuItems.length && (
        <Menu
          items={menuItems}
          css={menuCss}
          values={values}
          onClick={onClick}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default Toolbar;
