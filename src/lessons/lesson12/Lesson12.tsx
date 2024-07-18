import React from 'react'
import RobotForm from '../../app/components/RobotForm/RobotForm'
import FormGender from '../../app/components/formGender/FormGender'

const Lesson12 = () => {
  return (
	 <div className='lesson-container'>
		<h3>Lesson 12</h3>
		<p>Валидация данных в форме с библиотекой Yup для Formik</p>
		{/* <RobotForm /> */}
		<FormGender />
	 </div>
	 
  )
}
export default  Lesson12