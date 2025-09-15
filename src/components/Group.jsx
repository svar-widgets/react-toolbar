import { useState } from 'react';
import BarComponent from './BarComponent.jsx';
import { Dropdown } from '@svar-ui/react-core';
import './Group.css';

export default function Group({
  item,
  values = null,
  menu = false,
  onChange,
  onClick,
}) {
  const [collapsedState, setCollapsedState] = useState(true);

  const oncancel = () => setCollapsedState(true);
  const show = () => setCollapsedState(false);

  const handleClick = (ev) => {
    oncancel();
    onClick && onClick(ev);
  };

  const rootClassName = [
    'wx-wSVFAGym',
    'wx-tb-group',
    item.css || '',
    item.layout == 'column' ? 'wx-column' : '',
    item.collapsed && !menu ? 'wx-group-collapsed' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClassName}>
      {item.collapsed && !menu ? (
        <>
          <div className="wx-wSVFAGym wx-collapsed" onClick={show}>
            {item.icon ? (
              <i className={`wx-wSVFAGym icon ${item.icon}`}></i>
            ) : null}
            {item.text ? (
              <div className="wx-wSVFAGym wx-label-text">{item.text}</div>
            ) : null}
            {item.text && !item.icon ? (
              <i className="wx-wSVFAGym wx-label-arrow wxi-angle-down"></i>
            ) : null}
          </div>
          {!collapsedState ? (
            <Dropdown width="" oncancel={oncancel}>
              <div className="wx-wSVFAGym wx-drop-group">
                <Group
                  item={{ ...item, text: '', collapsed: false }}
                  values={values}
                  menu={menu}
                  onChange={onChange}
                  onClick={handleClick}
                />
              </div>
            </Dropdown>
          ) : null}
        </>
      ) : (
        <>
          <div className="wx-wSVFAGym wx-tb-body">
            {item.items.map((sub, index) =>
              sub.items ? (
                <Group
                  key={sub.id || index}
                  item={sub}
                  values={values}
                  onClick={handleClick}
                  onChange={onChange}
                />
              ) : (
                <BarComponent
                  key={sub.id || index}
                  item={sub}
                  values={values}
                  onClick={handleClick}
                  onChange={onChange}
                />
              ),
            )}
          </div>
          {item.text ? (
            <div className="wx-wSVFAGym wx-label">{item.text}</div>
          ) : null}
        </>
      )}
    </div>
  );
}
