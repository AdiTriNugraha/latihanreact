import React from 'react'
import './CSS/Blog.css';

const Blog  = (props) => {
    return<div className="blog-wrap">
        <img src="https://placeimg.com/123/133/animals/sepia" alt=""/>
        <p>{props.Judul}</p>
        <h1>{props.Tanggal}</h1>
        <p>{props.Summary}</p>
    </div>
}

export default Blog;