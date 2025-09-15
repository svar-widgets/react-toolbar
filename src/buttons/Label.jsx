import './Label.css';

export default function Label(props) {
  const { text, value, children } = props;

  if (children) {
    return <div className="wx-PTEZGYcj wx-label">{children()}</div>;
  } else {
    return <div className="wx-PTEZGYcj wx-label">{value || text}</div>;
  }
}
