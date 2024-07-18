import React from 'react'
import style from './lesson11.module.css'
// import LoginForm from '../../app/components/loginForm/LoginForm'
import FormGender from '../../app/components/formGender/FormGender'

export default function Lesson11() {
  return (
	 <div className='lesson-container'>
		<h3>Lesson11</h3>
		<p>Библиотека для работы с формами Formik</p>
		<div className={style.loader}></div>
		<div className={style.heading}></div>
		{/* <LoginForm /> */}
		<FormGender />


		</div>
		

		
  )
}
