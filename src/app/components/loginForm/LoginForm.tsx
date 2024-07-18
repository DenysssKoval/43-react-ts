import React from 'react'
import styles from './loginForm.module.css'
import { useFormik } from 'formik'

interface IFormValues {
	firstName: string,
	lastName: string,
	email: string
}

export default function LoginForm() {
	// вызываеи хук функцию useFormik и передаем объект с настройками
const formik = useFormik({
	initialValues: {
		firstName: '',
		lastName: '',
		email: ''
	} as IFormValues,
	onSubmit: (values: IFormValues, {resetForm}) => {
		console.log(values);
		resetForm();
		
	}
})
 // ! что нужно заполнить в форме
  // 1. для form добавить на onSubmit formik.handleSubmit
  // 2. для input добавить в onChange formik.handleChange
  // 3. для input добавить в name имя соответствующее ключу в объекте initialValues из настроек
  // 4. для input добавить в value значение его поля из formik.values
  return (
	 <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
		<input value={formik.values.firstName} name='firstName' onChange={formik.handleChange} type="text"placeholder='first name' />
		<input value={formik.values.lastName} name='lastName' onChange={formik.handleChange} type="text"placeholder='last name' />
		<input value={formik.values.email} name='email' onChange={formik.handleChange} type="text"placeholder='email' />
		<button type='submit'>отправить</button>
		</form>
  )
}
