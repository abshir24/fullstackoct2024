function EventHandler(){
    let buttonClick = () =>{
        console.log("The button was clicked")
    }

    return ( 
        <div>
            <button onClick = {buttonClick}> Click Button</button>
        </div> 
    )
}

export default EventHandler