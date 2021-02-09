

export default function CreateUser({username, email, onChange, onClick}){
    return(
        <div>
            <input
                name="username"
                value={username}
                placeholder="계정명"
                onChange={onChange}
            />
            <input
                name="email"
                value={email}
                placeholder="계정명"
                onChange={onChange}
            />
            <button onClick={()=> onClick()}>등록</button>

        </div>
    )
}