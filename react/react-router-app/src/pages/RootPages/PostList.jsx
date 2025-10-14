import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";

function PostList(props) {
    const [posts, setPosts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    function orderByIdAsc() {
        setSearchParams({
            order: "asc", sortBy: "id"
        })
    }

    function orderByIdDesc() {
        setSearchParams({
            order: "desc", sortBy: "id"
        })
    }

    useEffect(() => {
        const params = searchParams;
        const order = params.get("order") ?? "asc"
        const sortBy = params.get("sortBy") ?? "id"


        async function getPosts() {
            const response = await axios.get(`https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`)
            setPosts(response.data.posts)
        }

        getPosts()
    }, [searchParams]);

    return (<div>
        <div className="flex gap-2">
            <div className="border-2 p-2 cursor-pointer"
                 onClick={() => orderByIdAsc()}>id 오름차순
            </div>
            <div className="border-2 p-2 cursor-pointer"
                 onClick={() => orderByIdDesc()}>id 내림차순
            </div>
        </div>
        {posts.map((post) => {
            return (<Link key={post.id}
                          to={`/posts/${post.id}`}>
                No.{post.id} - {post.title}
                <br/>
            </Link>)
        })}
    </div>);
}

export default PostList;