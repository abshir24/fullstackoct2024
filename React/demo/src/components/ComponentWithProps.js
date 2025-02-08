import { useNavigate } from 'react-router-dom';

function ComponentWithProps(props){
    const navigate = useNavigate()

    let redirect = ()=>{
        navigate('/home')
    }
    
    return <button onClick={redirect}>Redirect to Home</button>
}

export default ComponentWithProps