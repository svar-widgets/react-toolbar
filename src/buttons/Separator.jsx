import './Separator.css';

export default function Separator({ menu = false }) {
  return (
    <div className={`wx-z1qpqrvg wx-separator${menu ? '-menu' : ''}`}>
      &nbsp;
    </div>
  );
}
