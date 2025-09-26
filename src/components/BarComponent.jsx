import { useMemo, useCallback } from 'react';
import { getItemHandler } from '../helpers';
import Separator from '../buttons/Separator.jsx';
import Spacer from '../buttons/Spacer.jsx';
import './BarComponent.css';

// eslint-disable-next-line no-unused-vars
const omitKey = ({ key, text, ...rest }) => rest;

function BarComponent(props) {
  const { item = {}, menu = false, values, onClick, onChange } = props;

  const itemComponent = useMemo(
    () => getItemHandler(item.comp || 'label'),
    [item],
  );

  const handleClick = useCallback(() => {
    if (item && item.handler) item.handler(item);
    if (onClick) onClick({ item });
  }, [item, onClick]);

  const value = useMemo(() => {
    return item && item.key
      ? values
        ? values[item.key]
        : undefined
      : undefined;
  }, [item, values]);

  const detectChange = useCallback(
    ({ value }) => {
      if (item && item.handler) item.handler(item, value);
      if (onChange) onChange({ value, item });
    },
    [item, onChange],
  );

  const text = useMemo(() => {
    return menu
      ? item
        ? item.menuText || item.text
        : undefined
      : item
        ? item.text
        : undefined;
  }, [menu, item]);

  if (item && item.comp == 'spacer') {
    return <Spacer />;
  } else if (item && item.comp == 'separator') {
    return <Separator menu={menu} />;
  } else {
    const ReactComponent = itemComponent;
    const className = [
      'wx-tb-element',
      item && item.css ? item.css : '',
      item && item.spacer ? 'wx-spacer' : '',
      menu ? 'wx-menu' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        className={'wx-KVAsgMam ' + className}
        data-id={item ? item.id : undefined}
      >
        <ReactComponent
          value={value}
          onChange={detectChange}
          onClick={handleClick}
          text={text}
          menu={menu}
          {...omitKey(item)}
        />
      </div>
    );
  }
}

export default BarComponent;
