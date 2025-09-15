import { useRef, useState } from 'react';
import { Toolbar, registerToolbarItem } from '../../src/index';
import { RichSelect } from '@svar-ui/react-core';
import './Ribbon.css';

export default function Ribbon() {
  const didRegister = useRef(false);
  if (!didRegister.current) {
    registerToolbarItem('richselect', RichSelect);
    didRegister.current = true;
  }

  const [message, setMessage] = useState('');

  let fontFamilyData = [
    { id: 'Arial', label: 'Arial' },
    { id: 'Tahoma', label: 'Tahoma' },
    { id: 'Times New Roman', label: 'Times' },
  ];
  let fontSizeData = [
    { id: '12px', label: '12' },
    { id: '14px', label: '14' },
    { id: '16px', label: '16' },
    { id: '18px', label: '18' },
  ];
  const values = {
    'font-family': 'Arial',
    'font-size': '14px',
  };

  function onClick(item) {
    setMessage("Button '" + item.id + "' clicked");
  }
  function onChange(item, value) {
    setMessage(item.key + ' changed: ' + value);
  }

  let items = [
    {
      items: [
        {
          layout: 'column',
          items: [
            {
              id: 'load',
              css: 'bigButton',
              comp: 'button',
              icon: 'wxi-file',
              text: 'Load',
              handler: onClick,
            },
          ],
        },
        {
          layout: 'column',
          items: [
            {
              id: 'undo',
              comp: 'button',
              icon: 'wxo-undo',
              handler: onClick,
            },
            {
              id: 'redo',
              comp: 'button',
              icon: 'wxo-redo',
              handler: onClick,
            },
          ],
        },
      ],
    },
    { comp: 'separator' },
    {
      layout: 'column',
      items: [
        {
          items: [
            {
              key: 'font-family',
              comp: 'richselect',
              css: 'wideSelect',
              options: fontFamilyData,
              handler: onChange,
            },
            {
              key: 'font-size',
              comp: 'richselect',
              options: fontSizeData,
              handler: onChange,
            },
          ],
        },
        {
          items: [
            {
              id: 'font-bold',
              comp: 'button',
              icon: 'wxo-bold',
              handler: onClick,
            },
            {
              id: 'font-italic',
              comp: 'button',
              icon: 'wxo-italic',
              handler: onClick,
            },
            {
              id: 'font-underline',
              comp: 'button',
              icon: 'wxo-underline',
              handler: onClick,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="wx-0fQr88Be topbar">
        <Toolbar items={items} values={values} />
      </div>
      <div className="wx-0fQr88Be demo-status">{message}</div>
    </>
  );
}
