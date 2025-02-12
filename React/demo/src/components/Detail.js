import { useParams } from 'react-router-dom'; 

function Detail(props){
    const { id } = useParams()

    let item = props.items.find(( menu_item ) => menu_item.id === Number(id))

    if(item === undefined) return <h1>Item not found</h1>
    
    return <div>
        <h1>Food: { item.name }</h1>
        <p> Description: {item.description } </p>
    </div>
}

export default Detail