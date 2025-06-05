import '../App.css';
import React, { useState } from 'react';


export default function Textutility(props) {

     const [text, setText] = useState("");

     const changehandler = (e)=>{
          setText(e.target.value);
     }

     const copytoclipboard = ()=>{
          alert("Text copied !");
          navigator.clipboard.writeText(text);
     }

     
     const savetoLocalStorage = ()=>{
          let key = prompt("Enter a key");
          let setLocalText = text;
          localStorage.setItem(`${key}`, setLocalText);
          utilLocal(setLocalText);
          
          
     }

     window.onload = function(){
          for(let i=localStorage.length-1;i>=0;i--){
               let getLocalText = localStorage.getItem(localStorage.key(i));
               utilLocal(getLocalText);
          }
     }

     const itemClick = (stateText)=>{
          setText(stateText);
     }

     const utilLocal = (stateText)=>{
          let itemText = stateText.split('').slice(0, 30).map(item => {return item}).join('');
          
          let appendDiv = document.createElement('div');
          appendDiv.classList.add('border', 'border-primary', 'px-3', 'my-2');
          appendDiv.innerText = `${itemText}...`;
          appendDiv.addEventListener('click', function fireonclick(){
               itemClick(stateText);
          });

          document.getElementById('local').append(appendDiv);
     }

     

     return (
          <>
               <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <h2>Enter text here</h2>
                    <div className="mb-3">
                         <textarea className={`form-control text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{backgroundColor: props.mode === 'dark' ? 'rgb(108 108 108)' : 'white'}} value={text} onChange={changehandler} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-auto">
                         <button type="submit" onClick={copytoclipboard} className="btn btn-primary my-3 mx-2">Copy to clipboard</button>
                         <button type="submit" onClick={savetoLocalStorage} className="btn btn-primary my-3 mx-2">Save to localStorage</button>
                    </div>

                    <div className="container my-3">
                         <div className=''>
                              <h2>Preview</h2>
                              <p>{text}</p>
                         </div>

                         <div className=''>
                              <h2>Localstorage</h2>
                              <div id='local'></div>
                         </div>
                    </div>
               </div>
               
          </>
     )
}