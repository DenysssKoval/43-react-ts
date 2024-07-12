import "./myInput.css";

interface IMyInputProps {
  label: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'number'; // Указаны типы, которые могут быть у input
  placeholder: string;
}

export default function MyInput({ label, name, type, placeholder }: IMyInputProps) {
  return (
    <div className="myInput">
      <label className='label'>{label}</label>
      <input type={type} name={name} placeholder={placeholder} className='input' />
    </div>
  );
}