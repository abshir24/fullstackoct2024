import UserProfileInfo from "./UserProfileInfo"

function UserProfile(props){
    return <div>
        <UserProfileInfo name={ props.name } bio ={props.bio} avatarUrl={props.avatarUrl} />
    </div>
}

export default UserProfile