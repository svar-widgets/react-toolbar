import { Button } from '@svar-ui/react-core';
import './Icon.css';

export default function Icon(props) {
  const { icon, title, text, tooltip, css, type, disabled, menu, onClick } =
    props;

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
      disabled={disabled}
      title={title}
      tooltip={tooltip}
      onClick={onClick}
    />
  );
}
