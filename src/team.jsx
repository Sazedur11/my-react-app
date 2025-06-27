export default function Team({team}){
    const {name, email, phone, website} = team;
    return(
        <div className="team-box">
            <h3>NAme: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}