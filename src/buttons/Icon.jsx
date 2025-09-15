import { Button } from '@svar-ui/react-core';
import './Icon.css';

export default function Icon(props) {
  const { icon, text, css, type, disabled, menu, onClick } = props;

  if (menu) {
    return (
      <div className="wx-3cuSqONJ wx-item" onClick={onClick}>
        {icon ? (
          <i className={`wx-3cuSqONJ ${icon || ''} ${css || ''}`}></i>
        ) : null}
        {text}
      </div>
    );
  }

  return (
    <Button
      icon={icon}
      type={type}
      css={css}
      title={text}
      disabled={disabled}
      onClick={onClick}
    />
  );
}
