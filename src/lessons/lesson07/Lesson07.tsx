import MyButton from '../../app/components/myButton/MyButton';
import Counter from '../../app/components/counter/Counter';

function Lesson07() {
  // типизация примитивный тип данных
  let hero: string = 'batman';

  console.log(hero);

  // типизация объекта
  interface ISuperhero {
    id: number;
    name: string;
    nickname: string;
    // age может быть и строкой и числом
    // такое объединение называется union type
    age?: number | string;
    abilities?: string[];
  }

  // наследование типов в ts
  interface ISpaceHeroes extends ISuperhero {
    // в качестве типов можно указывать конкретные значение
    // у нас космические герои только с двух планет
    homePlanet: 'Crypton' | 'Earth';
  }


  // создание объекта с типом
  let hero1: ISpaceHeroes = {
    id: 1,
    name: 'Clark Kent',
    nickname: 'Superman',
    abilities: ['super vision', 'can fly'],
    homePlanet: 'Crypton'
  };

  // другой экземпляр объекта с нашим типом
  let hero2: ISuperhero = {
    id: 2,
    name: 'Bruce Wane',
    nickname: 'Batman',
    // этот ключ можно было бы и не указать
    // потому что у ISuperhero 'abilities' - не обязательный ключ
    abilities: []
  };

  // массив из объектов с нашим типом
  const heroes: ISuperhero[] = [hero1, hero2];

  // интерфейсы объединяются
  // если напишите интерфейс с уже существующим именем произойдет объединение
  // будьте с эти осторожны

  interface ISpaceHeroes {
    isAlive?: boolean;
  }

  // объявление типов через 'type'
  // аналог interface

  type Animal = {
    name: string;
    weight: number;
  };

  // наследование с type
  type ExoticAnimal = Animal & {
    isExotic: true;
    country: string;
  };

  let panda: ExoticAnimal = {
    isExotic: true,
    name: 'Po',
    weight: 100,
    country: 'China'
  };

  console.log(panda);
  console.log(heroes);

  // generics
  // способ ограничения данных на вход в функцию
  // функция будет ждать в угловых скобках что вы явно укажите с каким типом она будет работать

  function makeArray<T>(first: T, second: T): T[] {
    return [first, second];
  }

  // в момент вызова функции вы передаете generic тип в угловых скобках
  // уточняете данные на вход
  const people = makeArray<number>(100, 7.7);

  console.log(people);


  const handleHello = () => {
    console.log('hello!');
  }



  return (
    <div className='lesson-container'>
      <h4>Lesson 07</h4>
      <p>Урок 'TypeScript часть 2' в комментариях к коду урока 🦁</p>
      <div>
        {heroes.map(el => (
          <div key={el.id}>
            <h4>🦸‍♂️: {el.nickname}</h4>
            <p>Real name: {el.name}</p>
          </div>
        ))}
      </div>
      <div>
        {/* кнопка с данными по умолчанию */}
        <MyButton />
         {/* передали новые данные по имени и функции на onClick */}
        <MyButton name='click' onClick={() => console.log('click!')}/>
        <MyButton name='hello' onClick={handleHello}/>
      </div>
      {/* вызов компонента Counter */}
      <Counter/>
    </div>
  );
}

export default Lesson07;