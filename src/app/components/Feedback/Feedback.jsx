import { useState } from 'react';
import MyButton from "../myButton/MyButton";

export default function Feedback() {
  const [like, setLike] = useState(5)
  const [dislike, setDislike] = useState(0)

  const handleLike = () => {
    // setLike(prev => prev + 2)
    setLike(prev => prev + 1)
  }

  const handleDisLike = () => {
    setDislike(prev => prev + 1)
  }

  const handleReset = () => {
    setLike(0)
    setDislike(0)
  }

  return (
    <div>
      <div>
        <span>{like}</span>
        <MyButton onClick={handleLike} name={"👍"} />
        <MyButton onClick={handleDisLike} name={"👎"} />
        <span>{dislike}</span>
      </div>
      <div>
        <MyButton onClick={handleReset} name={"Reset Results"} />
      </div>
    </div>
  );
}