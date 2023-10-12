export default function Event() {
    function handelClick(){
        console.log("I was clicked")
    }
    function handeleOnMouseOver(){
        console.log("MouseOver")
    }
    return(
        <div className="container">
            <img src={require("../images/troll-face.png")} onMouseOver={handeleOnMouseOver}/>
            <button onMouseEnter={handelClick} >Click me</button>
        </div>
    )
}