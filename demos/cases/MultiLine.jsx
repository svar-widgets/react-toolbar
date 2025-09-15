import { useState, useCallback, useMemo } from 'react';
import { Toolbar, registerToolbarItem } from '../../src/index';
import { RichSelect } from '@svar-ui/react-core';
import './MultiLine.css';

registerToolbarItem('richselect', RichSelect);

export default function MultiLine() {
  const [message, setMessage] = useState('');

  const fontFamilyData = useMemo(
    () => [
      { id: 'Arial', label: 'Arial' },
      { id: 'Tahoma', label: 'Tahoma' },
      { id: 'Times New Roman', label: 'Times' },
    ],
    [],
  );

  const fontSizeData = useMemo(
    () => [
      { id: '12px', label: '12' },
      { id: '14px', label: '14' },
      { id: '16px', label: '16' },
      { id: '18px', label: '18' },
    ],
    [],
  );

  const values = useMemo(
    () => ({
      'font-family': 'Arial',
      'font-size': '14px',
    }),
    [],
  );

  const onClick = useCallback((item) => {
    setMessage("Button '" + item.id + "' clicked");
  }, []);

  const onChange = useCallback((item, value) => {
    setMessage(item.key + ' changed: ' + value);
  }, []);

  const items = useMemo(
    () => [
      { id: 'label', text: 'Multi-line toolbar' },
      { comp: 'separator' },
      {
        layout: 'column',
        text: 'Font',
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
      { comp: 'separator' },
      {
        layout: 'column',
        text: 'Align',
        items: [
          {
            items: [
              {
                id: 'align-left',
                comp: 'button',
                icon: 'wxo-align-left',
                handler: onClick,
              },
              {
                id: 'align-right',
                comp: 'button',
                icon: 'wxo-align-right',
                handler: onClick,
              },
            ],
          },
          {
            items: [
              {
                id: 'align-center',
                comp: 'button',
                icon: 'wxo-align-center',
                handler: onClick,
              },
              {
                id: 'align-justify',
                comp: 'button',
                icon: 'wxo-align-justify',
                handler: onClick,
              },
            ],
          },
        ],
      },
    ],
    [fontFamilyData, fontSizeData, onChange, onClick],
  );

  return (
    <>
      <div className="wx-5mAzWDTQ topbar">
        <Toolbar items={items} values={values} groupPopups={true} />
      </div>
      <div className="wx-5mAzWDTQ demo-status">{message}</div>
    </>
  );
}
