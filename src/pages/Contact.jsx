import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow'
import { FindUs } from '../components/FindUs'

export const Contact = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <h1 className="text-center">
                                {/* Contacto */}
                                Kontakt
                            </h1>

                            <section className="contact-info-section">
                                <p>
                                    <strong>Tel:</strong> +48 506 438 823
                                </p>
                                <p>
                                {/* Lunes a viernes: 8.00-19.00 */}
                                pon-pt: 8.00-19.00
                                </p>
                                <p>
                                {/* Sábado: 9.00 a 14.00 */}
                                sobota: 9.00-14.00
                                </p>
                                <p>
                                    {/* <strong>Horarios de oficina</strong> */}
                                    <strong>Godziny otwarcia biura</strong>
                                </p>
                                <p>
                                {/* Lunes a viernes: 8.00 a 16.00 */}
                                pon-pt: 8.00-16.00
                                </p>
                                <p>
                                    <strong>
                                        {/* Horarios de oficina */}
                                        Biuro obsługi:
                                    </strong><br/>
                                    biuro@saludcatering.pl
                                </p>
                            </section>

                            <section className="map-section">
                                <h5>
                                    {/* ¡Estamos aquí! */}
                                    Jesteśmy tutaj!
                                </h5>
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.928956998263!2d18.536067515882937!3d54.51711428024106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda7255f70087b%3A0xd8d2de1701f1176c!2sW%C5%82adys%C5%82awa%20IV%2040%2C%2081-353%20Gdynia%2C%20Polonia!5e0!3m2!1ses-419!2smx!4v1607757088001!5m2!1ses-419!2smx"
                                    width="100%"
                                    height="450"
                                    //frameborder="0" 
                                    style={{ border: 0 }}
                                    //allowfullscreen=""
                                    aria-hidden="false"
                                    //tabindex="0"
                                    >
                                </iframe>
                                <p>
                                    Władysława IV 40, Gdynia
                            </p>
                            </section>

                            <section className="form-contact">
                                <img 
                                    src="img/formularz.jpg" 
                                    alt="form"
                                    className="img-fluid"
                                />
                                <pre>
                                    https://www.freeline.pl/blog/wp-content/uploads/2017/10/formsy1_19.jpg
                                </pre>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 py-5 pr-3">
                        <FindUs />
                        <br/>
                        <DidYouKnow />
                    </div>
                </div>
            </div>
        </div >
    )
}
