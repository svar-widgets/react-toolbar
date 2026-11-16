import { useState } from 'react';
import BarComponent from './BarComponent.jsx';
import Group from './Group.jsx';
import { Dropdown, Button } from '@svar-ui/react-core';
import './Menu.css';

function Menu({ items = [], css, values, width, onClick, onChange }) {
  const [popup, setPopup] = useState(false);

  function onCancel() {
    setPopup(false);
  }
  function showMenu() {
    setPopup(true);
  }
  function menuClick(ev) {
    onCancel();
    onClick?.(ev);
  }

  return (
    <div className={`wx-Yo6BuX0p wx-menu ${css || ''}`} data-id="$menu">
      <Button icon="wxi-dots-h" onClick={showMenu} />
      {popup ? (
        <Dropdown width={`${width}px`} onCancel={onCancel}>
          <div className="wx-Yo6BuX0p wx-drop-menu">
            {items.map((item, index) =>
              item.items ? (
                <Group
                  key={item.id || index}
                  item={item}
                  values={values}
                  menu={true}
                  onClick={menuClick}
                  onChange={onChange}
                />
              ) : (
                <BarComponent
                  key={item.id || index}
                  item={item}
                  values={values}
                  menu={true}
                  onClick={menuClick}
                  onChange={onChange}
                />
              ),
            )}
          </div>
        </Dropdown>
      ) : null}
    </div>
  );
}

export default Menu;
