import React from 'react';
// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch('https://my-json-server.typicode.com/LinusYong123/demo/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <BlogList blogs={data} title="All Blogs!"/> }
    </div>
  );
}
 
export default Home;