export default function Header (){
    return(
        <header className="header">
            
            <img src={require("../images/troll-face.png")} className='header-img'/>
                <h2 className='header-text'>MemeGenerator</h2>
                <p className='header-subtext'>React Course - Project 3</p>
     
        </header>
    )

}