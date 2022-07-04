import React,{ useState } from 'react';
import para from './para';
import './para.css';

function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);



  const paraGen = (x) => {
    x.preventDefault();
    let amount = parseInt(count);
    if(count<0)
    {
      amount=1;
    }
    if(count > 7)
    {
      amount = 7;
    }
    setText(para.slice(0,amount));
    

  } 
  return (
    <section className='cen1'>
      <h2>Para Generator</h2>
      <form className='in' onSubmit={paraGen}>
        <label htmlFor='a1'>Paragraph needed:</label>
        <input type="number" name="a1" id="a1" value={count}
        onChange={(e)=>setCount(e.target.value)}/>
        <button type="submit" className="btn">Output</button>
      </form>
      <div className='paras'>
        {
          text.map((item,index)=>{
            return <p key={index}>{item}</p>
          })
        }
      </div>
    </section>
  );
}

export default App;
