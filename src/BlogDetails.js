import React from 'react';
import { useHistory, useParams } from "react-router-dom"
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://my-json-server.typicode.com/LinusYong123/demo/blogs/' + id)
  const history = useHistory()

  const handleClick= () => {
    fetch('https://my-json-server.typicode.com/LinusYong123/demo/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {})
  }

  return(
    <div className="blog-details">
    { isPending && <div>Loading...</div> }
    { error && <div>{ error }</div> }
    { blog && (
      <article>
      <h2>{ blog.title }</h2>
      <p>Written by { blog.author }</p>
      <div>{ blog.body }</div>
      <button onClick={handleClick}>delete</button>
      </article>
    )}
</div>
  );
}

export default BlogDetails;