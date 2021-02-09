


function Posts ({posts, loading, pageNumber}){
    return(
        <>
        {loading && <div>loading.....</div>}
        <ul className="list-body">
            {posts.map((post, idx) => (
                <li className="list-item" key={post.id}>
                    <span>{(pageNumber-1)*10 +(idx+1)}</span>  
                    {post.title}
                </li>
            ))}
        </ul>
        </>
    )
}


export default Posts;