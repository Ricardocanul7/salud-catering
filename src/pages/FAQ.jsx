import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow';
import { FindUs } from '../components/FindUs';
import { faq } from '../data/faq'

export const FAQ = () => {
    var top_faq = faq.pl['top-questions'];

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <h1 className="text-center">FAQ</h1>
                            <section className="faq-section">
                                <h1 className="text-center mb-4">Najczęściej zadawane pytania</h1>
                                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                    {
                                        top_faq.map((value, index) => {
                                            return <li key={index} className="mb-2">֎ {value} </li>
                                        })
                                    }
                                </ul>
                            </section>

                            <section className="form-faq-section text-center">
                                <h1 className="text-center my-4">Nie znalazłeś/aś odpowiedzi na swoje pytanie? Skontaktuj się z nami!</h1>
                                <img src="img/formularz.jpg" alt="form" className="img-fluid"/>

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
