import React from 'react'
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts'

export const BlogList = () => {

    var posts = blogPosts;

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col py-5 d-flex flex-wrap">
                        {
                                posts.map((value, index) => (
                                    <Link key={value.id} to={'/blogpost/' + value.id} className="blogCard m-2 w-25" style={{textDecoration: 'none', color: 'black'}}>
                                        <div className="border rounded shadow p-5">
                                            <h4>{value.title}</h4>
                                            <p><i>{value.date}</i></p>
                                            <p> {value.content} </p>
                                            <img src={value['content-image']} alt="" className="img-fluid"/>
                                        </div>
                                    </Link>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}
