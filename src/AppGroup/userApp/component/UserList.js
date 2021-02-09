

export default function UserList ({users, onDelete, onToggle}){
    return (
        <div>
            <ul>
                {users.map(item => (
                    <li key={item.id}>
                        <User user={item} onDelete={onDelete} onToggle={onToggle} />
                    </li>
                ))}
            </ul>
        </div>
    )
}


function User({user, onDelete, onToggle}){
    return (
        <div>
            <strong
                style={{
                    paddingRight:'12px',
                    fontWeight:700,
                    cursor:'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</strong>
            <span>{user.email}</span>
            <button onClick={()=> onDelete(user.id)}>삭제</button>
        </div>
    )
}