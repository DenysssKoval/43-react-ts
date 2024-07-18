import MyButton from '../../app/components/myButton/MyButton';
import MyForm from '../../app/components/myForm/MyForm';
import MyInput from '../../app/components/myInput/MyInput';

const Lesson08 = () => {
  return (
    <div className='lesson-container'>
      <h3>Lesson 08</h3>
      <p>Один и тот же компонент с типизированными props, но с разными данными: </p>
      <MyInput/>
      <MyInput label='pass' name='password' placeholder='type your pass' type='password' />

		<h4>CSS modules</h4>
		<p>Способ написания изолированных CSS стилей в React, чтобы стили не конфликтовали друг с другом</p>
		<div>
			<MyButton/>
		</div>
		<div>
			<MyForm/>
		</div>
    </div>
  );
};

export default Lesson08;