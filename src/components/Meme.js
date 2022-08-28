import React from "react";
import memesData from "../memesData";

function Meme(){

    function getMemeImage(){
        console.log("Clicked")

    }
    return(
        <main>
            <div className="form">
            <input 
                type="text"
                placeholder="top text" 
                className="form--inputs"
            />
            <input 
                type="text"
                placeholder="bottom text" 
                className="form--inputs"
            />
            <button className="form--button"
            onClick={getMemeImage}
            > 
            Get a new meme image
            </button>
            </div>
        </main>
    )
}

export default Meme;