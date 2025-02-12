function Home(props){

    return <div>
        <h1>Menu:</h1>
        {
            props.items.map((item)=>(
                <div>
                    <h1>Food: { item.name }</h1>
                    <p> Description: {item.description} </p>
                </div>
            ))
        }
    </div>
}

export default Home