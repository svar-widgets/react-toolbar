import { useState, useMemo } from 'react';
import { Toolbar, registerToolbarItem, ButtonList } from '../../src/index';
import './VerticalBar.css';

registerToolbarItem('v-segmented', ButtonList);

function VerticalBar() {
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({ mode: '1' });

  function onClick(item) {
    setMessage("Button '" + item.id + "' clicked");
  }
  function onChange(item, value) {
    setMessage("Segmented '" + item.id + "': " + value);
  }
  function onValuesChange(ev) {
    setValues((prev) => ({ ...prev, [ev.item.key]: ev.value }));
  }

  const bar1 = useMemo(
    () => [
      {
        id: 'search',
        comp: 'icon',
        icon: 'wxi-search',
        css: 'right',
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
    ],
    [],
  );

  const bar2 = useMemo(
    () => [
      {
        id: 'mode',
        key: 'mode',
        comp: 'v-segmented',
        options: [
          { id: '1', label: 'Users' },
          { id: '2', label: 'Projects' },
          { id: '3', label: 'Settings' },
        ],
        handler: onChange,
      },
      { comp: 'spacer' },
      {
        id: 'run',
        comp: 'button',
        text: 'Upload',
        icon: 'wxi-upload',
        handler: onClick,
      },
    ],
    [],
  );

  return (
    <>
      <div className="wx-aaarq9Bx demo-status">{message}</div>
      <div
        className="wx-aaarq9Bx"
        style={{ display: 'flex', flexDirection: 'row', height: '300px' }}
      >
        <div className="wx-aaarq9Bx bar-container">
          <Toolbar items={bar1} layout="column" />
        </div>
        <div className="wx-aaarq9Bx bar-container">
          <Toolbar
            values={values}
            items={bar2}
            layout="column"
            onChange={onValuesChange}
          />
        </div>
        <div className="wx-aaarq9Bx empty-space"></div>
      </div>
    </>
  );
}

export default VerticalBar;
