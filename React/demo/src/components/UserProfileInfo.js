function UserProfileInfo(props){
    return <div>
        <h1>Name: {props.name}</h1>
        <h1>Bio: {props.bio}</h1>
        <img src={props.avatarUrl} alt="img"/>
    </div>
}

export default UserProfileInfo