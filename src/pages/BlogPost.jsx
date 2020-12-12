import React from 'react'
import { useParams } from 'react-router-dom'
import { DidYouKnow } from '../components/DidYouKnow'
import { FindUs } from '../components/FindUs'
import { blogPosts } from '../data/blogPosts'

export const BlogPost = ({ match }) => {

    let { id } = useParams();
    var posts = blogPosts;
    var item = posts.find(item => item.id === Number(id));
    //console.log(item);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <section className="post-section">
                                <h1>{item.title}</h1>
                            </section>
                            <i>{item.date}</i>
                            <p>{item.content}</p>
                            <img src={item['content-image']} alt="" className="img-fluid"/>
                        </div>

                        <div className="border rounded shadow p-5 mt-4">
                            <section className="comment-section">
                                <h1 className="text-center">Dodaj komentarz</h1>
                                <p className="text-center">
                                    Twój adres email nie zostanie opublikowany. Pola, których wypełnienie jest wymagane, są oznaczone symbolem *
                                </p>

                                <div className="text-center">
                                    <p>
                                        KOMENTARZ
                                    </p>

                                    <textarea name="comment" id="comment" className="form-control" cols="30" rows="10"></textarea>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-6 text-center">
                                        <label htmlFor="">NAZWA*</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col-md-6 text-center">
                                        <label htmlFor="">EMAIL*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex mt-3">
                                        <input type="checkbox" name="" id="" className="mt-1 pr-2" />
                                        <label htmlFor="">Zapamiętaj moje dane w tej przeglądarce podczas pisania kolejnych komentarzy.</label>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-warning">
                                        Opublikuj komentarz
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 py-5 pr-3">
                        <FindUs />
                        <br />
                        <DidYouKnow />
                    </div>
                </div>
            </div>
        </div>
    )
}
