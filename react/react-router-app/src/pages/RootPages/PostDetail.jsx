import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function PostDetail() {
    const {postId} = useParams()
    const [post, setPost] = useState([])
    useEffect(() => {

        async function getPostById() {
            const response = await axios.get(`https://dummyjson.com/posts/${postId}`)
            setPost(response.data)
        }
        getPostById()
    }, [postId]);

    return (<div>
        <p>{post.body}</p>
    </div>);
}

export default PostDetail;