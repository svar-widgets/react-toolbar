import { useState } from 'react';
import { Toolbar } from '../../src/index';

function BasicInit() {
  const [message, setMessage] = useState('');

  function onClick(item) {
    setMessage("Button '" + item.id + "' clicked");
  }

  const items = [
    { id: 'label', text: 'Toolbar with icon buttons' },
    {
      id: 'search',
      comp: 'button',
      icon: 'wxi-search',
      css: 'right',
      handler: onClick,
    },
    { comp: 'spacer' },
    {
      id: 'edit',
      comp: 'button',
      icon: 'wxi-edit-outline',
      handler: onClick,
    },
    {
      id: 'copy',
      comp: 'icon',
      icon: 'wxi-content-copy',
      handler: onClick,
    },
    {
      id: 'delete',
      comp: 'button',
      icon: 'wxi-delete-outline',
      handler: onClick,
    },
  ];

  return (
    <>
      <Toolbar items={items} />
      <div className="wx-IyJJVBpP demo-status">{message}</div>
    </>
  );
}

export default BasicInit;
