import "./myInput.css";

export default function MyInput({label, name, type, placeholder}) {

  return (
    <>
      <label className='label'>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  );
}