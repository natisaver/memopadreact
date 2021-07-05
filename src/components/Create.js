import React, { useState } from "react";
import notes from "../notes";
import ReactDOM from "react-dom";
import { FaFeatherAlt } from "react-icons/fa";


function Create(props){
    // state to store the created notes
    const [Note, setNote] = useState({
        title:"",
        content:""
    });

    // handleChange helps retain info from the input & textarea
    function handleChange(event){
        const {name, value} = event.target; 
        setNote(prevNote=>{
           return {
            //    prev note with spread operator helps to store whatever previous value
                ...prevNote,
            //    event.target.name must be same as key in the useState above for this to work
                [name]: value
            };
        });
    }

    // activate this func on click of submit btn
    function submitNote(e) {
        // refer to App.js to see the props refer to added={handleNotes}
        props.added(Note);
        e.preventDefault();

    }
    // function handleClick(e) {
    //     let element = document.getElementById("extendout");
    //     ReactDOM.findDOMNode(element).classList.toggle('active');
    // }

    return(
        <div className="plusbutt">
            {/* <button id="extendout3" onClick={handleClick} className="plusbuttbutton"></button>  */}
            <form className="createform" autocomplete="off">
                <h1>Add a New Note:</h1>
                <div className="webflow-style-input2">
                    <input type="text" name="title"  className="webflowinput" id="extendout" onChange={handleChange} value={notes.title} placeholder="Title"/>
                </div>
                <div className="webflow-style-input">
                    <textarea rows="3" name="content" className="webflowtextarea" id="extendout2" onChange={handleChange} value={notes.content} placeholder="Type what you feel..."/>  
                    <button onClick={submitNote}><FaFeatherAlt /></button>                 
                    
                </div>
        
            </form>
            
        </div>

    );

}

export default Create;