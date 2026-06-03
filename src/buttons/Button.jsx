import { Button as CoreButton } from '@svar-ui/react-core';
import './Button.css';

function Button(props) {
  const { icon, title, text = '', tooltip, css, type, disabled, menu, onClick } = props;

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
      title={title}
      text={text}
      tooltip={tooltip}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

export default Button;
