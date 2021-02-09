import { useCallback, useMemo, useRef, useState } from "react";
import UserList from "./component/UserList";
import CreateUser from './component/CreateUser'




export default function UserApp(){

    const [input, setInput] = useState({
        username : '',
        email : ''
    })
    
    const {username, email} = input

    
    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active:true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active:false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active:false
        }
      ]);

      const onChange = (e) => {
          const {name, value} = e.target
          setInput({
              ...input,
              [name]: value
          })

      }
      const nextId = useRef(4)

      const onClick = () => {


        const user = {
            id : nextId.current,
            username,
            email
        }

        setUsers([...users, user])

        setInput({
            useranme : '',
            email : ''
        })

        nextId.current += 1

      }

      const onDelete = (id) => {
            setUsers(users.filter(user => user.id !== id))
      }

      const onToggle = (id) => {
          setUsers(
              users.map(user => 
                user.id === id ? {...user, active: !user.active} : user)
          )
      }


    

    return(
        <div className="content">
            <h1>UserApp</h1>
            <CreateUser onChange={onChange} username={username} email={email} onClick={onClick} />
            <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
        </div>
    )
}