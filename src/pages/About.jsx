import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow'

export const About = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <h1 className="text-center">Sobre nosotros</h1>
                            <section className="about-us-section-info">
                                <img src="img/logo.jpg" alt="logo" className="img-fluid mb-3" />
                                <p>
                                    Salud! Catering ofrece una entrega de platos saludables y sabrosos, debidamente preparados para personas con trastornos y enfermedades alimentarias (como resistencia a la insulina, enfermedad celíaca, alergia al gluten, diabetes) y para todos aquellos que quieran comer sano. Salud! Catering es la única empresa del mercado que combina la pasión por la alimentación saludable con el temperamento español, ofreciendo a sus clientes dietas ricas en ingredientes mediterráneos.
                                </p>
                                <p>
                                    Cada vez más personas en nuestra sociedad luchan contra los trastornos alimentarios. El estrés y un estilo de vida rápido les impiden cuidar su salud, que se asocia con la preparación de comidas saludables. Aparte de la falta de tiempo, un obstáculo es la incapacidad para adaptarse a los nuevos hábitos alimentarios, ingredientes y sabores.
                                </p>

                                <p>
                                    Nuestra empresa quiere conocerlos, deleitándolos con una amplia gama de sabores inspirados en la cocina española. España es uno de los países más visitados por los polacos, por lo que se supone que nuestra dieta, cuidando la salud, también trae buenos recuerdos de las vacaciones, además de ampliar los horizontes gustativos de quienes aún no las conocen.
                                </p>
                                <p>
                                    Como agradecimiento por la inspiración culinaria, también estamos abiertos a servir a los clientes de habla hispana que encuentran su segundo hogar en Polonia en números cada vez mayores.
                                </p>

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
