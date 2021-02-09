import styled from 'styled-components';


const PageUl = styled.ul`
    float:left;
    text-align:center;
    border-radius:3px;
    color:white;
    padding:1px;
    border-top:3px solid #186EAD;
    border-bottom:3px solid #186EAD;
    background-color: rgba(0,0,0,0.4);
    `;

const PageLi = styled.li`
    display:inline-block;
    font-size:17px;
    font-weight:600;
    padding:5px;
    border-radius: 5px;
    width:25px;
    &:hover{
        cursor:pointer;
        color:white;
        background-color: #263A6C;
    }
    &:focus::after{
        color:white;
        background-color: #263A6C;
    }
    `;

const PageSpan = styled.span`
    &:hover::after,
    &:focus::after{
        border-radius:100%;
        color:white;
        background-color:#263A6C;
    }
    `;

function Pagination ({totalPosts, postPerPage, paginate }){

    const pageArray = []
    for(let i =1 ; i <= Math.ceil(totalPosts / postPerPage) ; i++){
        pageArray.push(i)
    }

    return(
            <PageUl>
            {pageArray.map(number => (
                <PageLi key={number} onClick={()=> paginate(number)}>
                    <PageSpan>{number}</PageSpan>
                </PageLi>
            ))}
            </PageUl>
        )
}


export default Pagination;