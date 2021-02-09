import axios from "axios"
import { useEffect, useState } from "react"
import Posts from "./component/Posts"
import Pagination from './component/Pagination'


export default function PaginateApp (){


    const [posts, setPosts]= useState([])
    const [loading, setLoading] = useState(false)
    const [postPerPage, setPostPerPage] = useState(10)
    const [pageNumber, setPageNumber] = useState(1)


    const indexOfLast = pageNumber * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;


    const makeCurrentPosts = (postData) => {
        let result = []
        result = postData.slice(indexOfFirst, indexOfLast)
        return result
    }

    useEffect(async()=> {
        setLoading(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        setLoading(false)
    },[])


    return(
        <div id="paginatApp" className="content">
            <h1>Pagination</h1>
            <Posts posts={makeCurrentPosts(posts)} pageNumber={pageNumber} loading={loading}/>
            <Pagination paginate={setPageNumber} totalPosts={posts.length} postPerPage={postPerPage} />
        </div>
    )
}