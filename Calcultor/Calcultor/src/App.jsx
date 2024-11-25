
import  style from './App.module.css'
import Buttons from './Component/Buttons'
import Display from './Component/Display'
import {useState} from 'react'


const App = () => {

const [Calvenvalue, setCalvenvalue] = useState('')

const HandleonClick=(buttonText)=>{
 if(buttonText === 'C'){
setCalvenvalue('')
 }else if( buttonText === '='){
const result= eval(Calvenvalue)
setCalvenvalue(result)
 }else{
const newDisplay = Calvenvalue + buttonText
setCalvenvalue (newDisplay)
 }
}

  return (
    <center>
    <div className={style.container} >
<Display  displayValue={Calvenvalue}/>
<Buttons   HandleonClick ={HandleonClick} />
</div>
    </center>
  )
}

export default App