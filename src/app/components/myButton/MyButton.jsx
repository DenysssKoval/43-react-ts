
import "./myButton.css";

export default function MyButton({ type='button', onClick, name='undefined' }) {
  return (
    <button type={type} onClick={onClick} className="myButton">
      {name}
    </button>
  );
}