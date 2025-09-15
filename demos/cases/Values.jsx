import { useState, useCallback } from 'react';
import { Toolbar } from '../../src/index';
import { Slider, Button, RichSelect } from '@svar-ui/react-core';

const options = [
  { id: 1, label: 'One' },
  { id: 2, label: 'Two' },
  { id: 3, label: 'Three' },
  { id: 4, label: 'Four' },
  { id: 5, label: 'Five' },
];

export default function Values() {
  const [message, setMessage] = useState('');
  const handler = useCallback((ev) => {
    const { value, item } = ev;
    setMessage(`${item.key} changed: ${value}`);
  }, []);

  const [values, setValues] = useState({ x1: 1, x2: 3 });
  const handleChangeValues = useCallback(
    (ev) => {
      const { value, item } = ev;
      setValues((prev) => ({ ...prev, [item.key]: value }));
      handler(ev);
    },
    [handler],
  );

  return (
    <>
      <div className="wx-CxlUXkzf demo-status">{message}</div>

      <div className="wx-CxlUXkzf demo-box">
        <h3>Binding different values</h3>
        <Toolbar
          items={[
            { comp: RichSelect, options, key: 'x1' },
            { comp: RichSelect, options, key: 'x2' },
          ]}
          css="demo-toolbar"
          values={values}
          onChange={handleChangeValues}
        />
        <span className="wx-CxlUXkzf demo-code">{JSON.stringify(values)}</span>
        <br />
        <Button
          text="Reset x1"
          onClick={() => setValues((v) => ({ ...v, x1: 1 }))}
        />
        <Button
          text="Reset x2"
          onClick={() => setValues((v) => ({ ...v, x2: 1 }))}
        />
      </div>

      <div className="wx-CxlUXkzf demo-box">
        <h3>Binding the same value</h3>
        <Toolbar
          items={[
            { comp: Slider, min: 0, max: 100, key: 'x1' },
            { comp: 'spacer' },
            { comp: Slider, min: 0, max: 100, key: 'x1' },
          ]}
          css="demo-toolbar"
          values={{ x1: 15 }}
        />
      </div>
    </>
  );
}
