import React, { useState } from 'react'
function swapCase(str) {
    return str
      .split('')
      .map(char => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join('');
  }

export default function Textform(props) {

      const handleSwapclick=()=>{
        // console.log("Uppercase was clicked");
        let newText=swapCase(text)
        setText(newText)
    }      

    const handleUpclick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleDownclick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const clear=()=>{
        setText("")
    }    
    const copy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }

    const speak=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg)
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
  }
    const [text,setText]=useState('Enter text here');
  return (
    <>
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
            <textarea className="form-control"  value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-2' onClick={handleUpclick}> UpperCase</button>
            <button className='btn btn-primary mx-1 my-2' onClick={handleDownclick}> LowerCase</button>
            <button className='btn btn-primary mx-1 my-2' onClick={handleSwapclick}> SwapCase</button>
            <button className='btn btn-primary mx-1 my-2' onClick={copy}> CopyText</button>
            <button className='btn btn-primary mx-1 my-2' onClick={speak}> Speak</button>
            <button className='btn btn-primary mx-1 my-2' onClick={handleExtraSpaces}> Remove ExtraSpaces</button>
            <button className='btn btn-primary mx-1 my-2' onClick={clear}> Clear</button>
        </div>
        <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
            <h2 >Preview</h2>
            <p>{text}</p>

        </div>
    </>    
  )
}
