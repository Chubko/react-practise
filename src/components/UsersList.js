export default function UsersList({user:{userName, userAge, userId}}){

    return(
       <div>
           {userName}-{userAge}-{userId}
       </div>
    )
}