import { useState, useCallback, useMemo } from 'react';
import { Toolbar } from '../../src/index';
import './HeaderMenu.css';

export default function HeaderMenu() {
  const width = 480;
  const [message, setMessage] = useState('');

  const onClick = useCallback((item) => {
    setMessage("Button '" + item.id + "' clicked");
  }, []);

  const items = useMemo(
    () => [
      {
        comp: 'label',
        spacer: true,
        key: 'name',
      },
      { comp: 'separator' },
      {
        icon: 'wxi-dots-v',
        collapsed: true,
        layout: 'column',
        items: [
          {
            id: 'done',
            comp: 'item',
            text: 'Mark as finished task',
            handler: onClick,
          },
          {
            id: 'delete',
            comp: 'item',
            css: 'danger',
            text: 'Delete item',
            handler: onClick,
          },
          { comp: 'separator' },
          {
            id: 'purge',
            comp: 'button',
            type: 'danger block',
            text: 'Purge all data',
            handler: onClick,
          },
        ],
      },
    ],
    [onClick],
  );

  return (
    <div className="wx-X7vr7mnM column" style={{ width: `${width}px` }}>
      <Toolbar items={items} values={{ name: 'Item X12-A' }} />
      <div className="wx-X7vr7mnM demo-status">{message}</div>
    </div>
  );
}
