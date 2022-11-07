import React, {useState} from 'react'
import PropTypes from "prop-types";


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text changed to UpperCase","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to LowerCase","success");
    }
    const handleClrClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Removed","success");
    }
    // const handleBoldClick = () => {
    //     setTextStyle({
    //         fontWeight: textStyle.fontWeight === "bold" ? "" : "bold",
    //         fontStyle: textStyle.fontStyle
    //     })
    // }
    // const handleItalicClick = () => {
    //     setTextStyle({
    //         fontStyle: textStyle.fontStyle === "italic" ? "" : "italic",
    //         fontWeight: textStyle.fontWeight
    //     });
    // }

    const handleEmailClick = () =>{
        let newText =" ";
        setText(newText);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text speaked","success");
      }

      const handleCopy = (events)=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Text remove extra space","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

       const[text,setText] = useState("")
    // const [textStyle, setTextStyle] = useState({
    //     fontWeight: "",
    //     fontStyle: ""
    // })
  return (
    <>
    <div className ={`container text-${props.mode==='light' ? 'dark' : 'light'} `}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className={`form-control text-${props.mode==='light' ? 'dark' : 'light'} bg-${props.mode==='dark' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} placeholder="enter text here" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear the Text </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleEmailClick}>Email Highlighter</button> 
        <button className="btn btn-primary mx-2 my-2" onClick={speak}>Speak Text</button> 
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button> 
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button> 

         {/* <button className="btn btn-primary mx-2 my-3" onClick={handleBoldClick}>bold text</button>  */}
        
        
    </div>

    <div className={`container my-3 text-${props.mode==='light' ? 'dark' : 'light'}`}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters and {text.split(". ").length-1} Sentence.</p>
        <p>{0.008 *text.split(" ").length} minutes read</p> 
        
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

TextForm.prototypes = {
    heading: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    heading: "Analyze Text "
}

