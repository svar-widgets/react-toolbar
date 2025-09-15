import { useState } from 'react';
import { Toolbar, registerToolbarItem } from '../../src/index';
import { RichSelect } from '@svar-ui/react-core';
import './OverflowWrap.css';

registerToolbarItem('richselect', RichSelect);

function OverflowWrap() {
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

  function changeWidth() {
    setWidth((width) => (width == 650 ? 350 : width == 350 ? 250 : 650));
  }

  function onClick(item) {
    setMessage("Button '" + item.id + "' clicked");
  }

  function onChange(item, value) {
    setMessage(item.key + ' changed: ' + value);
  }

  const items = [
    {
      id: 'width',
      comp: 'button',
      text: 'Change width',
      handler: changeWidth,
      type: 'primary',
    },
    { comp: 'spacer' },
    {
      id: 'align-left',
      comp: 'button',
      icon: 'wxo-align-left',
      handler: onClick,
      group: 1,
    },
    {
      id: 'align-center',
      comp: 'button',
      icon: 'wxo-align-center',
      handler: onClick,
      group: 1,
    },
    {
      id: 'align-right',
      comp: 'button',
      icon: 'wxo-align-right',
      handler: onClick,
      group: 1,
    },
    {
      id: 'align-justify',
      comp: 'button',
      icon: 'wxo-align-justify',
      handler: onClick,
      group: 1,
    },
    { comp: 'separator' },
    {
      key: 'font-family',
      comp: 'richselect',
      css: 'wideSelect',
      options: fontFamilyData,
      value: fontFamily,
      handler: onChange,
      group: 2,
    },
    {
      key: 'font-size',
      comp: 'richselect',
      options: fontSizeData,
      value: fontSize,
      handler: onChange,
      group: 2,
    },
  ];

  return (
    <div className="wx-Y133m83v column" style={{ width: `${width}px` }}>
      <Toolbar items={items} menuWidth="150" overflow="wrap" />
      <div className="wx-Y133m83v demo-status">{message}</div>
    </div>
  );
}

export default OverflowWrap;
