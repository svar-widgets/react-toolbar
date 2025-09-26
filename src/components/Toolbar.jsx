import { useState, useEffect, useMemo, useRef } from 'react';
import Menu from './Menu.jsx';
import Group from './Group.jsx';
import BarComponent from './BarComponent.jsx';

import { uid } from '@svar-ui/lib-dom';
import { useWritableProp } from '@svar-ui/lib-react';
import './Toolbar.css';

function normalize(list) {
  list.forEach((item) => {
    if (!item.id) item.id = uid();
  });
  return list;
}

function Toolbar(props) {
  const {
    items: itemsProp,
    menuCss = '',
    css = '',
    values: valuesProp,
    overflow = 'menu',
    onClick,
    onChange,
  } = props;

  const [items, setItems] = useWritableProp(itemsProp || []);
  const [values, setValues] = useWritableProp(valuesProp || null);

  const visibleItems = useMemo(() => normalize(items), [items]);

  const divRef = useRef(null);
  const lastToolbarStateRef = useRef(-1);

  const [menuItems, setMenuItems] = useState([]);

  // refs to keep latest values for callbacks created once
  const itemsRef = useRef(visibleItems);
  useEffect(() => {
    itemsRef.current = visibleItems;
  }, [items]);

  const overflowRef = useRef(overflow);
  useEffect(() => {
    overflowRef.current = overflow;
  }, [overflow]);

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
    const it = itemsRef.current || [];
    let sum = 0;
    for (let i = 0; i < it.length; i++) {
      if (it[i].comp !== 'spacer') {
        sum += nodes[i].clientWidth;
        if (it[i].comp === 'separator') sum += 8;
      }
    }
    return sum;
  }

  function collapseGroups() {
    const div = divRef.current;
    const it = itemsRef.current || [];
    if (!div) return;

    for (let i = it.length - 1; i >= 0; i--) {
      if (it[i].items && !it[i].collapsed) {
        it[i].collapsed = true;
        it[i].$width = div.children[i].offsetWidth;
        // schedule after DOM update
        scheduleOverflowCheckRef.current = true;

        // trigger update similar to `items = [...items];`
        setItems([...it]);
        return;
      }
    }
  }

  function expandGroups(freeSpace) {
    const div = divRef.current;
    const it = itemsRef.current || [];
    if (!div) return;

    for (let i = 0; i < it.length; i++) {
      if (it[i].collapsed && it[i].$width) {
        if (it[i].$width - div.children[i].offsetWidth < freeSpace + 10) {
          it[i].collapsed = false;
          // schedule after DOM update
          scheduleOverflowCheckRef.current = true;
        }

        setItems([...it]);
        return;
      }
    }
  }

  function processOverflow() {
    const div = divRef.current;
    if (!div) return;
    const it = itemsRef.current || [];
    const ov = overflowRef.current;

    if (ov === 'wrap') return;

    const visibleWidth = div.clientWidth;
    const fullWidth = div.scrollWidth;
    const needMenu = fullWidth > visibleWidth;

    if (needMenu) {
      if (ov === 'collapse') return collapseGroups(visibleWidth);
      const nodes = div.children;
      let sum = 0;

      for (let i = 0; i < it.length; i++) {
        sum += nodes[i].clientWidth;
        if (it[i].comp === 'separator') sum += 8;
        if (sum > visibleWidth - 40) {
          if (lastToolbarStateRef.current === i) return;
          lastToolbarStateRef.current = i;

          const newMenuItems = [];
          for (let j = i; j < it.length; j++) {
            newMenuItems.push(it[j]);
            nodes[j].style.visibility = 'hidden';
          }
          if (i > 0 && it[i - 1].comp === 'separator') {
            nodes[i - 1].style.visibility = 'hidden';
          }
          setMenuItems(newMenuItems);
          break;
        }
        nodes[i].style.visibility = '';
      }
    } else {
      const freeWidth = visibleWidth - getTotalWidth();
      if (freeWidth <= 0) return;
      if (ov === 'collapse') return expandGroups(freeWidth);

      if ((menuItemsRef.current || []).length) {
        lastToolbarStateRef.current = null;
        const nodes = div.children;
        for (let i = 0; i < it.length; i++) {
          nodes[i].style.visibility = '';
        }
        setMenuItems([]);
      }
    }
  }

  // run processOverflow after DOM updates triggered by collapse/expand
  useEffect(() => {
    if (scheduleOverflowCheckRef.current) {
      scheduleOverflowCheckRef.current = false;
      processOverflow();
    }
  }, [items]);

  useEffect(() => {
    const ro = new ResizeObserver(() => processOverflow());
    if (divRef.current) ro.observe(divRef.current);

    return () => {
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className={`wx-VdPSJj8y wx-toolbar ${css || ''} ${overflow === 'wrap' ? 'wx-wrap' : ''}`}
      ref={divRef}
    >
      {visibleItems.map((item) =>
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
