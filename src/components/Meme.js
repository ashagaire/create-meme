import { useEffect, useState } from "react"
import memesData from  "./memesData"
export default function Meme(){

    const [meme ,setMeme] = useState({topText : "" , bottomText : "", randomImage: ""  })

    function handleChange(event) {
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, [name] : value
        }))
    }
    
    
    
    const [allMemes, setAllMemes]= useState([])
    function getMemeImage(){
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(preMeme => ({
            ...preMeme,
            randomImage: url,
            topText : "" ,
             bottomText : ""
        }))
        
        
    }
     /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])


    

    
    return(
        <main >
            <div className="form">
                
                <input 
                type="Text" 
                placeholder="top-text" 
                name="topText" 
                value={meme.topText} 
                onChange={handleChange} 
                className="form-input" 
                />
                <input 
                type="Text" 
                placeholder="bottom-text" 
                name="bottomText" 
                value={meme.bottomText} 
                onChange={handleChange} 
                className="form-input"
                />

                <button className="form-button" 
                onClick={getMemeImage}>Get a new meme image  🖼 </button>
                
            </div>
            <div className="meme">
                <img src={meme.randomImage} name="randomImage" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}