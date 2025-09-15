import { useState, useMemo, useCallback, useRef } from 'react';
import { Toolbar, registerToolbarItem } from '../../src/index';
import { RichSelect } from '@svar-ui/react-core';
import './OverflowCollapsed.css';

function OverflowCollapsed() {
  const [message, setMessage] = useState('');
  const [width, setWidth] = useState(650);

  const fontFamily = 'Arial';
  const fontFamilyData = [
    { id: 'Arial', label: 'Arial' },
    { id: 'Tahoma', label: 'Tahoma' },
    { id: 'Times New Roman', label: 'Times' },
  ];
  const fontSize = '14px';
  const fontSizeData = [
    { id: '12px', label: '12' },
    { id: '14px', label: '14' },
    { id: '16px', label: '16' },
    { id: '18px', label: '18' },
  ];
  const widths = [650, 450, 300, 700, 310, 460];

  const changeWidth = useCallback(() => {
    setWidth((prev) => {
      const ind = widths.indexOf(prev);
      return widths[ind + 1] || widths[0];
    });
  }, []);

  const onClick = useCallback((item) => {
    setMessage("Button '" + item.id + "' clicked");
  }, []);

  const onChange = useCallback((item, value) => {
    setMessage(item.key + ' changed: ' + value);
  }, []);

  const registeredRef = useRef(false);
  if (!registeredRef.current) {
    registerToolbarItem('richselect', RichSelect);
    registeredRef.current = true;
  }

  const items = useMemo(
    () => [
      {
        id: 'width',
        comp: 'button',
        text: 'Change width',
        handler: changeWidth,
        type: 'primary',
      },
      { comp: 'spacer' },
      { id: 'sep0', comp: 'separator' },
      {
        text: 'Align',
        items: [
          {
            id: 'align-left',
            comp: 'button',
            icon: 'wxo-align-left',
            handler: onClick,
          },
          {
            id: 'align-center',
            comp: 'button',
            icon: 'wxo-align-center',
            handler: onClick,
          },
          {
            id: 'align-right',
            comp: 'button',
            icon: 'wxo-align-right',
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
      { id: 'sep1', comp: 'separator' },
      {
        text: 'Font',
        items: [
          {
            key: 'font-family',
            comp: 'richselect',
            css: 'wideSelect',
            options: fontFamilyData,
            value: fontFamily,
            handler: onChange,
          },
          {
            key: 'font-size',
            comp: 'richselect',
            options: fontSizeData,
            value: fontSize,
            handler: onChange,
          },
        ],
      },
    ],
    [changeWidth, onClick, onChange],
  );

  const values = useMemo(() => ({}), []);

  return (
    <div className="wx-5YsBI9ok topbar" style={{ width: width + 'px' }}>
      <Toolbar items={items} values={values} overflow="collapse" />
      <div className="wx-5YsBI9ok demo-status">{message}</div>
    </div>
  );
}

export default OverflowCollapsed;
