import { useFormik } from "formik";
import React, { useState } from "react";
// import styles from '../loginForm/loginForm.module.css'
import styles from "./formGender.module.css";
// ## задание

// Создайте компонент FormGender.tsx
// В нем сделайте форму с одним input для ввода имени
// На onSubmit передавайте имя в api через url `https://api.genderize.io/?name=dmitrii`
// После 'name=' передавайте строку из формы
// Выведите данные на странице

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
    </div>
  );
}
