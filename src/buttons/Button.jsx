import { Button as CoreButton } from '@svar-ui/react-core';
import './Button.css';

function Button(props) {
  const { icon, text = '', css, type, disabled, menu, onClick } = props;

  if (menu) {
    return (
      <div className="wx-HXpG4gnx wx-item" onClick={onClick}>
        <i className={`wx-HXpG4gnx ${icon || 'wxi-empty'} ${css || ''}`} />
        {text}
      </div>
    );
  }

  return (
    <CoreButton
      icon={icon}
      type={type}
      css={css}
      text={text}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

export default Button;
