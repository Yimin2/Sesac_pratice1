import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function PostList(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getPosts() {
            const response = await axios.get("https://dummyjson.com/posts")
            setPosts(response.data.posts)
        }

        getPosts()
    }, []);

    return (<div>
        {posts.map((post) => {
            return (<Link key={post.id} to={`/posts/${post.id}`}>
                    No.{post.id} - {post.title}
                <br/>
                </Link>)
        })}
    </div>);
}

export default PostList;