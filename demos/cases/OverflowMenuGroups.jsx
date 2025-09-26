import { useState, useRef, useMemo } from 'react';
import { Toolbar, registerToolbarItem } from '../../src/index';
import { RichSelect } from '@svar-ui/react-core';
import './OverflowMenuGroups.css';

registerToolbarItem('richselect', RichSelect);

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

function OverflowMenuGroups() {
  const [message, setMessage] = useState('');
  const [width, setWidth] = useState(650);

  function changeWidth() {
    setWidth((w) => (w == 650 ? 450 : w == 450 ? 300 : 650));
  }

  function onClick(item) {
    setMessage("Button '" + item.id + "' clicked");
  }

  function onChange(item, value) {
    setMessage(item.key + ' changed: ' + value);
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
    [],
  );

  const valuesRef = useRef({});
  const values = valuesRef.current;

  return (
    <div className="wx-53lDZ7f0 topbar" style={{ width: width + 'px' }}>
      <Toolbar items={items} values={values} />
      <div className="wx-53lDZ7f0 demo-status">{message}</div>
    </div>
  );
}

export default OverflowMenuGroups;
