import { useState } from 'react';
import { Toolbar } from '../../src/index';
import './OverflowMenu.css';

function OverflowMenu() {
  const [width, setWidth] = useState(270);
  const [message, setMessage] = useState('');

  function onClick(item) {
    setMessage("Button '" + item.id + "' clicked");
  }

  function changeWidth() {
    setWidth((prev) => (prev == 500 ? 350 : prev == 350 ? 250 : 500));
  }

  const items = [
    {
      id: 'width',
      comp: 'button',
      text: 'Resize column',
      handler: changeWidth,
      type: 'primary',
    },
    {
      id: 'search',
      comp: 'icon',
      icon: 'wxi-search',
      text: '',
      css: 'right',
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
      text: 'Copy',
    },
    {
      id: 'edit',
      comp: 'icon',
      icon: 'wxi-edit-outline',
      handler: onClick,
      text: 'Edit',
    },
    { id: 'delete', comp: 'button', text: 'Delete', handler: onClick },
  ];

  return (
    <div className="wx-03QmOvLq column" style={{ width }}>
      <Toolbar items={items} />
      <div className="wx-03QmOvLq demo-status">{message}</div>
    </div>
  );
}

export default OverflowMenu;
