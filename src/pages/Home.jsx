import React from 'react'
import { Carousel } from '../components/Carousel'
import { faq } from '../data/faq'
import { DidYouKnow } from '../components/DidYouKnow'
import { FindUs } from '../components/FindUs'

export const Home = () => {
    var top_faq = faq.pl['top-questions'];

    return (
        <div>
            <Carousel />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <section className="section-header">
                                <h1 className="text-center">
                                    Salud! Catering to jedyna taka firma na rynku, która łączy pasję zdrowego żywienia z hiszpańskim temperamentem, oferując klientom diety bogate w składniki śródziemnomorskie.
                                </h1>
                                <p className="text-center">
                                    W naszym społeczeństwie coraz więcej osób boryka się z zaburzeniami żywieniowymi. Stres i szybki tryb życia uniemożliwiają im odpowiednią troskę o zdrowie, która wiąże się z przygotowywaniem zdrowych posiłków. Oprócz braku czasu, na przeszkodzie stoi nieumiejętność przystosowania się do nowych nawyków żywieniowych, składników i smaków.
                                </p>
                            </section>

                            <section>
                                <h1 className="text-center text-uppercase">NASZE DIETY</h1>
                                <h6 className="text-center text-uppercase">Nasza specjalność, wypróbuj już teraz!</h6>
                                <img src="img/dieta-salud.png" alt="" className="img-fluid" />
                                <div className="row mt-5">
                                    <div className="col-sm-12 col-md-6 d-flex flex-column">
                                        <img src="img/dieta1.png" alt="" className="img-fluid mb-5" />
                                        <img src="img/dieta3.png" alt="" className="img-fluid mb-5" />
                                        <img src="img/dieta6.png" alt="" className="img-fluid mb-5" />
                                    </div>
                                    <div className="col-sm-12 col-md-6 d-flex flex-column">
                                        <img src="img/dieta2.png" alt="" className="img-fluid my-5" />
                                        <img src="img/dieta4.png" alt="" className="img-fluid mb-5" />
                                        <img src="img/dieta5.png" alt="" className="img-fluid mb-5" />
                                    </div>
                                </div>
                            </section>

                            <section className="mobile-app-section text-center">
                                <h1>Wypróbuj naszą aplikację!</h1>
                                <img src="img/aplikacja-salud.png" alt="" className="img-fluid mb-3" />
                                <button className="btn btn-primary">
                                    Pobierz teraz
                                </button>
                            </section>

                            <section className="faq-section">
                                <h1 className="text-center">Najczęściej zadawane pytania</h1>
                                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                    {
                                        top_faq.map((value, index) => {
                                            return <li key={index}>֎ {value} </li>
                                        })
                                    }
                                </ul>
                            </section>

                            {/* <section className="banner">
                                <img src="img/6.jpg" alt="banner" className="img-fluid" />
                            </section> */}

                            {/* <section>
                                <h2>
                                    Abastecerse de ingredientes básicos.
                                </h2>
                                <p>
                                Esto hace que la compra de alimentos sea menos frecuente y también mucho más barata.
                                </p>
                                <p>
                                Esto hace que la compra de alimentos sea menos frecuente y también mucho más barata.
                                </p>
                                <p>
                                Haga que la planificación de las comidas sea emocionante. 
                                </p>
                                <p>
                                Pruebe los lunes sin carne, los jueves de tacos o los viernes de pollo frito para que su familia tenga tradiciones culinarias que esperar.
                                </p>
                                <p>
                                    Esto también hace que la planificación de las comidas sea más fácil de predecir.
                                </p>
                            </section> */}

                            <section className="social-network">
                                <h2>
                                    Dołącz do naszego Facebooka i Instagrama i bądź na bierząco z promocjami!
                                </h2>
                                <p>
                                    Subskrybenci mają zniżkę na kulinarne eventy!
                                </p>
                                <div className="d-flex flex-row">
                                    <a href="http://www.faceboook.com">
                                        <img src="img/F.png" alt="facebook" width="50px" />
                                    </a>
                                    <a href="http://www.instagram.com">
                                        <img src="img/insta.jpg" alt="facebook" width="50px" />
                                    </a>
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
