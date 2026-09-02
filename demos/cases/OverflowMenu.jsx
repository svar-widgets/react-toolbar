import { useState, useMemo } from 'react';
import { Toolbar, ButtonList, registerToolbarItem } from '../../src/index';
import { Segmented } from '@svar-ui/react-core';
import './OverflowMenu.css';

registerToolbarItem('segmented', Segmented);
registerToolbarItem('segmented', ButtonList, { menu: true });

function OverflowMenu() {
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
      { comp: 'separator' },
      { comp: 'separator' },
      {
        id: 'copy',
        comp: 'icon',
        icon: 'wxi-content-copy',
        handler: onClick,
        text: 'Copy',
        title: 'Ctrl+C',
      },
      {
        id: 'edit',
        comp: 'icon',
        icon: 'wxi-edit-outline',
        handler: onClick,
        text: 'Edit',
        title: 'Ctrl+E',
      },
      {
        id: 'mode',
        comp: 'segmented',
        value: '1',
        options: [
          { id: '1', label: 'All' },
          { id: '2', label: 'Active' },
        ],
        handler: onClick,
      },
    ],
    [],
  );

  return (
    <div className="wx-03QmOvLq column" style={{ width }}>
      <Toolbar items={items} />
      <div className="wx-03QmOvLq demo-status">{message}</div>
    </div>
  );
}

export default OverflowMenu;
