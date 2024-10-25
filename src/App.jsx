import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './App.css'

const App=() => {
  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [img, setImg] =useState(false)

  const[open, setOpen] =useState('open')
  const change =()=> {
    setImg(!img)
    setOpen(img ? 'open' :'close')
  }
    
  
  console.log(num);

  
  

  return (
    <>

    <div className="box">
      <button onClick={change}>Открыть фото</button>
      {img && <img src="https://i.pinimg.com/originals/6f/1f/e8/6f1fe8a0762fd32094b658ffd2785d0f.jpg" alt="" />}
      
    </div>

    <div className="box">
      <h4>{text}</h4>
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
    </div>

    <div className="box">
      <h4>{num}</h4>
      <button onClick={()=> setNum(num + 1)}>Добавить число</button>
      <button onClick={()=> setNum(num - 1)}>Уменьшить число</button>
      <button onClick={()=> setNum(num * 2)}>Удвоить число</button>
      <button onClick={()=> setNum(num / 2)}>Разделить число</button>
      <button onClick={()=> setNum(num * 0)}>Обнулить число</button>

    </div>

    </>
  )
}

export default App
