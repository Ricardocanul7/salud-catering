import React from 'react'
import { Carousel } from '../components/Carousel'
import { Card } from '../components/Card'
import { DidYouKnow } from '../components/DidYouKnow'

export const Home = () => {
    return (
        <div>
            <Carousel />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <section className="section-header">
                                <h1 className="text-center">
                                    Salud! Catering es la única empresa del
                                    mercado que combina la pasión por la
                                    alimentación saludable con el temperamento
                                    español, ofreciendo a sus clientes dietas
                                    ricas en ingredientes mediterráneos.
                                </h1>
                                <p className="text-center">
                                    Cada vez más personas en nuestra sociedad
                                    luchan contra los trastornos alimentarios.
                                    El estrés y un estilo de vida rápido les impiden
                                    cuidar su salud, que se asocia con la preparación
                                    de comidas saludables. Aparte de la falta de
                                    tiempo, un obstáculo es la incapacidad para
                                    adaptarse a los nuevos hábitos alimentarios,
                                    ingredientes y sabores.
                                </p>
                            </section>

                            <section>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 d-flex flex-column">
                                        <Card />
                                        <Card src="img/4.jpg" />
                                    </div>
                                    <div className="col-sm-12 col-md-6 d-flex flex-column">
                                        <Card src="img/3.jpg" />
                                        <Card src="img/5.jpg" />
                                    </div>
                                </div>
                            </section>

                            <section className="banner">
                                <img src="img/6.jpg" alt="banner" className="img-fluid" />
                            </section>

                            <section>
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
                            </section>

                            <section className="social-network">
                                <h2>
                                    ¡Únase a nuestro Facebook e Instagram y manténgase al día con las promociones!
                                </h2>
                                <p>
                                    ¡Los suscriptores tienen un descuento en eventos culinarios!
                                </p>
                                <div className="d-flex flex-row">
                                    <a href="http://www.faceboook.com">
                                        <img src="img/F.png" alt="facebook" width="50px"/>
                                    </a>
                                    <a href="http://www.instagram.com">
                                        <img src="img/insta.jpg" alt="facebook" width="50px"/>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 py-5 pr-3">
                        <DidYouKnow />
                    </div>
                </div>
            </div>
        </div>
    )
}
