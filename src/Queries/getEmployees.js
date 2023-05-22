import { gql } from '@apollo/client'
const GET_EMPLOYEES = gql`

    query{
        employees{
            name,
            dept 
        }
    }
`
console.log('GET_EMPLOYEES : ', GET_EMPLOYEES) 
export default GET_EMPLOYEES



