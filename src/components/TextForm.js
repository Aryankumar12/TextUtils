import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    {text.length>0?props.showAlert("Converted to UpperCase", "success"):props.showAlert("Enter some Text", "danger")}
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    {text.length>0?props.showAlert("Converted to LowerCase", "success"):props.showAlert("Enter some Text", "danger")}
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    {text.length>0?props.showAlert("All cleared", "success"):props.showAlert("Enter some Text", "danger")}
    
  };
  const handleOnChange = (event) => {
    console.log("on change was triggered");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}
            
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div className="container my-5" style={{color: props.mode==='light'?'black':'white'}}>
        <h1 >Your Text Summary</h1>
        <p>
          It has {text.trim().split(/\s+/).length} words and{" "}
          {text.trim().length} characters
        </p>
        <p>Read time {0.008 * text.trim().split(/\s+/).length}</p>
        <br />

        <h2 >Preview</h2>

        <p >{text.length>0?text:"Enter some text to Display it here"}</p>
      </div>
    </>
  );
}
