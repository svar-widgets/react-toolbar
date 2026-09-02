import { Button } from '@svar-ui/react-core';
import './Icon.css';

export default function Icon(props) {
  const { icon, title, text, tooltip, css, type, disabled, menu, onClick } =
    props;

  if (menu) {
    const className = ['wx-3cuSqONJ', 'wx-item', text ? 'wx-text-icon' : '']
      .filter(Boolean)
      .join(' ');
    return (
      <div className={className} onClick={onClick}>
        <i className={`wx-3cuSqONJ ${icon || 'wxi-empty'} ${css || ''}`}></i>
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
