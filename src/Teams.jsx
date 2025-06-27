
import { useEffect, useState } from 'react';
import './Team.css';
import Team from './team';

export default function Teams(){

    const [teamMember, setTeamMember] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setTeamMember(data))
    },[])

    return(
        <div className="box">
            <h2>Team Members: {teamMember.length}</h2>
            {
                teamMember.map(team => <Team team={team}></Team>)
            }
        </div>
    )
}