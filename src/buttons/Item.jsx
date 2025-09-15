import './Item.css';

function Item({ id = '', text = '', css = '', icon = '', onClick }) {
  function handleClick() {
    onClick && onClick({ id });
  }

  return (
    <div className={`wx-U0Bx7pIR wx-label ${css}`} onClick={handleClick}>
      {icon ? <i className={'wx-U0Bx7pIR ' + icon}></i> : null}
      {text}
    </div>
  );
}

export default Item;
