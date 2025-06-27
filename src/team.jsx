import { useEffect, useState } from "react"

export default function Team(){

    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setTeamMembers(data))
    },[])

    return(
        <div>
            <h2>Team Members: {teamMembers.length}</h2>
        </div>
    )
}