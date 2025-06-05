import React, { useState } from 'react';

export default function MathOpp(props) {
     const [num1, setNum1] = useState(0);
     const [num2, setNum2] = useState(0);
     const [result, setResult] = useState(0);
     const [expression, setExpression] = useState("No expression");

     const changeNum1 = (e)=>{
          setNum1(e.target.value);
     }
     const changeNum2 = (e)=>{
          setNum2(e.target.value);
     }
     
     const addNumbers =()=>{
          let number1 = Number.parseFloat(num1);
          let number2 = Number.parseFloat(num2);

          setResult(number1+number2);
          setExpression("+");
     }
     const substractNumbers =()=>{
          let number1 = Number.parseFloat(num1);
          let number2 = Number.parseFloat(num2);
          
          setResult(number1-number2);
          setExpression("-");
     }
     const multiplyNumbers =()=>{
          let number1 = Number.parseFloat(num1);
          let number2 = Number.parseFloat(num2);
          
          setResult(number1*number2);
          setExpression("*");
     }
     const divideNumbers =()=>{
          let number1 = Number.parseFloat(num1);
          let number2 = Number.parseFloat(num2);

          if (number2 === 0) {
               alert("Division by zero is not allowed. Try changing the number");
          }else{
               setResult(number1/number2);
               setExpression("/");
          }
          
     }
     return (
          <>
               <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <h2>Enter text here</h2>
                    <div className="mb-3">
                         <input type='number' className={`form-control border-primary my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{width: '30rem', backgroundColor: props.mode === 'dark' ? 'rgb(108 108 108)' : 'white'}} rows="1" value={num1} onChange={changeNum1} />
                         <input type='number' className={`form-control border-primary my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{width: '30rem', backgroundColor: props.mode === 'dark' ? 'rgb(108 108 108)' : 'white'}} rows="1" value={num2} onChange={changeNum2} />
                    </div>
                    <div className="col-auto">
                         <button type="submit" className="btn btn-primary my-3 mx-2" onClick={addNumbers}>Add</button>
                         <button type="submit" className="btn btn-primary my-3 mx-2" onClick={substractNumbers}>Substact</button>
                         <button type="submit" className="btn btn-primary my-3 mx-2" onClick={multiplyNumbers}>Multiply</button>
                         <button type="submit" className="btn btn-primary my-3 mx-2" onClick={divideNumbers}>Divide</button>
                    </div>

                    <div className="flex">
                         <div className='w-[40%] mx-2 my-4'>
                              <h2>Preview</h2>
                              <p className='my-1'>Expression is :&nbsp;&nbsp;&nbsp;{num1} {expression} {num2}</p>
                         </div>

                         <div className='w-[40%] mx-2 my-4'>
                              <h2>Result</h2>
                              <div>The result is: {result}</div>
                         </div>
                    </div>
               </div>
          </>
     )
}