import React from 'react'
import { useQuery } from '@apollo/client'
import GET_EMPLOYEES from '../../Queries/getEmployees'

export default function Employees() {

    const { loading, error, data } = useQuery(GET_EMPLOYEES)
    console.log(data)
    if(loading){
        return(
            <p> Loading....</p>
        )
    }
    if(error){
        return(
            <p> Error.... </p>
        )
    }
    return(
        <>
            <ul>
                {data.employees.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.dept} 
                    </li>
                ))}
            </ul>
        </>
    )
}
