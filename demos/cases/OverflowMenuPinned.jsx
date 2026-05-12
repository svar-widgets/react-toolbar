import { useState, useMemo } from 'react';
import { Toolbar } from '../../src/index';
import './OverflowMenuPinned.css';

function OverflowMenuPinned() {
  const [width, setWidth] = useState(270);
  const [message, setMessage] = useState('');

  function onClick(item) {
    setMessage("Button '" + item.id + "' clicked");
  }

  function changeWidth() {
    setWidth((prev) => (prev == 500 ? 350 : prev == 350 ? 250 : 500));
  }

  const items = useMemo(
    () => [
      {
        id: 'width',
        comp: 'button',
        text: 'Resize',
        handler: changeWidth,
        type: 'primary',
      },
      {
        id: 'search',
        comp: 'icon',
        icon: 'wxi-search',
        handler: onClick,
      },
      { comp: 'spacer' },
      {
        id: 'info',
        comp: 'icon',
        icon: 'wxi-information-outline',
        handler: onClick,
        text: 'Info',
      },
      { comp: 'separator' },
      {
        id: 'copy',
        comp: 'icon',
        icon: 'wxi-content-copy',
        handler: onClick,
        text: 'Ctrl+C',
        menuText: 'Copy',
      },
      {
        id: 'edit',
        comp: 'icon',
        icon: 'wxi-edit-outline',
        handler: onClick,
        text: 'Ctrl+E',
        menuText: 'Edit',
        pinned: true,
      },
      {
        id: 'delete',
        comp: 'icon',
        icon: 'wxi-delete-outline',
        handler: onClick,
        pinned: true,
      },
    ],
    [],
  );

  return (
    <>
      <h4 className="wx-aab5w5nZ" style={{ paddingLeft: '20px' }}>
        Edit and Delete icons are always visible
      </h4>
      <div className="wx-aab5w5nZ column" style={{ width }}>
        <Toolbar items={items} />
        <div className="wx-aab5w5nZ demo-status">{message}</div>
      </div>
    </>
  );
}

export default OverflowMenuPinned;
