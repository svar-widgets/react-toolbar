import { Button } from '@svar-ui/react-core';
import { useWritableProp } from '@svar-ui/lib-react';
import './ButtonList.css';

function ButtonList(props) {
  const { css = '', disabled, options = [], onChange, value: valueProp } = props;
  const [value, setValue] = useWritableProp(valueProp);

  const onClickHandler = (id) => {
    setValue(id);
    onChange && onChange({ value: id });
  };

  return (
    <div className={`wx-aabQKtQg wx-button-list ${css}`}>
      {options.map((option) => (
        <Button
          key={option.id}
          type={value === option.id ? 'primary' : ''}
          disabled={disabled}
          text={option.label}
          onClick={() => onClickHandler(option.id)}
        />
      ))}
    </div>
  );
}

export default ButtonList;
