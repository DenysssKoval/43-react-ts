import { useFormik } from "formik";
import React, { useState } from "react";
// import styles from '../loginForm/loginForm.module.css'
import styles from "./formGender.module.css";
import * as Yup from "yup";
// ## задание

// Создайте компонент FormGender.tsx
// В нем сделайте форму с одним input для ввода имени
// На onSubmit передавайте имя в api через url `https://api.genderize.io/?name=dmitrii`
// После 'name=' передавайте строку из формы
// Выведите данные на странице

// 1. В FormGender.tsx добавьте валидацию для строки
// 2. Сообщение об ошибке должно быть абсолютно спозиционированно относительно input и выведено в небольшом контейнере сбоку снизу.

interface IGender {
  name: string;
}
interface IGenderData {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

export default function FormGender() {
	const schema = Yup.object().shape({
		name: Yup
		.string()
		.typeError('enter your name')
		.required('напиши имя')
	});
  const [genderData, setGenderData] = useState<IGenderData>({
    name: "",
    gender: "",
    probability: 0,
    count: 0,
  });

  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setGenderData(data)
  };
  const formik = useFormik({
    initialValues: {
      name: "",
    } as IGender,
	 validationSchema: schema,
	 validateOnChange: false,
    onSubmit: (values: IGender, { resetForm }) => {
      fetchGender(values.name);
      console.log(values);

      resetForm();
    },
  });

  return (
    <div>
      <h4>🧙‍♂️ Know name's gender👌</h4>

      <form onSubmit={formik.handleSubmit} className={styles.genderForm}>
        <input
          value={formik.values.name}
          name="name"
          onChange={formik.handleChange}
          type="text"
          placeholder="enter name"
        />
        <button type="submit">send request</button>

        {genderData.name && (
          <p>
            {genderData.name} is {genderData.gender === "male" ? "🤵" : "👰‍♀️"}{" "}
            {genderData.probability * 100}
          </p>
        )}
      </form>
		<span className={styles.errors}>{formik.errors.name}</span>
    </div>
  );
}
