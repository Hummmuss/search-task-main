import "./style.css";

interface Address {
    city: string;
}

interface UserCardProps {
    image: string;
    firstName: string;
    lastName: string;
    address: Address;
}

export function UserCard(props: UserCardProps) {
    return (
        <div className="userCard">
            <img loading={"lazy"} className="userPic" src={props.image}  alt={`${props.firstName} image`}/>
            <div className="userInfo">
                <div>{`${props.firstName} ${props.lastName}`}</div>
                <div>{props.address.city}</div>
            </div>
        </div>
    );
}
