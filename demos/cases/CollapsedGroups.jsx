import { useState, useMemo, useCallback } from 'react';
import { Toolbar, registerToolbarItem } from '../../src/index';
import { RichSelect } from '@svar-ui/react-core';
import './CollapsedGroups.css';

registerToolbarItem('richselect', RichSelect);

function CollapsedGroups() {
  const [message, setMessage] = useState('');
  const [width, setWidth] = useState(600);

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

  const changeWidth = useCallback(() => {
    setWidth((w) => (w == 600 ? 450 : w == 450 ? 350 : 600));
  }, []);

  const items = useMemo(
    () => [
      {
        id: 'width',
        comp: 'button',
        text: 'Resize column',
        handler: changeWidth,
        type: 'primary',
      },
      { id: 'label', text: 'Collapsed groups' },
      { comp: 'separator' },
      {
        text: 'Data',
        collapsed: true,
        items: [
          {
            id: 'load',
            comp: 'button',
            icon: 'wxi-file',
            text: 'Load',
            handler: onClick,
          },
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
      { comp: 'separator' },
      {
        layout: 'column',
        collapsed: true,
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
        collapsed: true,
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
    [changeWidth, onClick, onChange, fontFamilyData, fontSizeData],
  );

  return (
    <>
      <div className="wx-zBja3MOF topbar" style={{ width }}>
        <Toolbar items={items} values={values} />
      </div>
      <div className="wx-zBja3MOF demo-status">{message}</div>
    </>
  );
}

export default CollapsedGroups;
