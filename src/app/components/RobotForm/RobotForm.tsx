import React from "react";
import styles from "./RobotForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

export default function RobotForm() {
  const schema = Yup.object().shape({
    model: Yup.number()
      .typeError("Введи свой номер, робот")
      .required()
      .min(100, "твоя модель должна начинаться со 100")
      .max(1000, "ты не такой робот! модель до 1000.."),
    creator: Yup.string().required("скажи, кто твой создатель"),
    email: Yup.string()
      .email("некоректный формат email")
      .required("email вашей компании обязателен"),
  });

  const formik = useFormik({
    initialValues: {
      model: "",
      creator: "",
      email: "",
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormValues, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  // ! что нужно заполнить в форме
  // 1. для form добавить на onSubmit formik.handleSubmit
  // 2. для input добавить в onChange formik.handleChange
  // 3. для input добавить в name имя соответствующее ключу в объекте initialValues из настроек
  // 4. для input добавить в value значение его поля из formik.values
  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <label> Это форма для 🤖 </label>
        <input
          value={formik.values.model}
          name="model"
          onChange={formik.handleChange}
          type="text"
          placeholder="your model"
        />
        <input
          value={formik.values.creator}
          name="creator"
          onChange={formik.handleChange}
          type="text"
          placeholder="creator's name"
        />
        <input
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          type="text"
          placeholder="creator's email"
        />
        <button type="submit">отправить</button>
      </form>
      <span className={styles.errors}>{formik.errors.model}</span>
      <span className={styles.errors}>{formik.errors.creator}</span>
      <span className={styles.errors}>{formik.errors.email}</span>
    </>
  );
}
