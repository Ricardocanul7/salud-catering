import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow'

export const Team = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <h1 className="text-center">Nuestro equipo</h1>
                            <section className="pb-4">
                                <p>
                                    Nuestro equipo de nutricionistas experimentados
                                    lo ayudará a elegir la dieta adecuada para usted.
                                </p>
                            </section>

                            <section className="section-team-item">
                                <img src="img/10c.png" alt="img" className="img-fluid" />
                                <p><i><strong>Julieta Ana Fernandez</strong></i></p>
                                <p>
                                    <i>
                                        Un especialista que ayudará a nuestros clientes de habla hispana a elegir una dieta.
                                    </i>
                                </p>
                            </section>

                            <section className="section-team-item">
                                <img src="img/11b.png" alt="img" className="img-fluid" />
                                <p><i><strong>Janna Kołakowska</strong></i></p>
                                <p>
                                    <i>
                                        Un especialista en elegir una dieta para personas resistentes a la insulina
                                    </i>
                                </p>
                            </section>

                            <section className="section-team-item">
                                <img src="img/13B.png" alt="img" className="img-fluid" />
                                <p><i><strong>Łukasz Niesiołowski</strong></i></p>
                                <p>
                                    <i>
                                        Dietista especializado en crear una dieta para personas celíacas
                                    </i>
                                </p>
                            </section>

                            <section className="section-team-item">
                                <img src="img/12B.png" alt="img" className="img-fluid" />
                                <p><i><strong>Marta Kochanowska</strong></i></p>
                                <p>
                                    <i>
                                        Especialista en dieta para alergia al gluten
                                    </i>
                                </p>
                            </section>


                            <section className="section-team-item">
                                <img src="img/14B.png" alt="img" className="img-fluid" />
                                <p><i><strong>Tadeusz Mazurek</strong></i></p>
                                <p>
                                    <i>
                                        Dietista especialista en dietas para personas con hashimoto
                                    </i>
                                </p>
                            </section>

                            <section className="section-team-item">
                                <img src="img/15B.png" alt="img" className="img-fluid" />
                                <p><i><strong>Michał Konieczny</strong></i></p>
                                <p>
                                    <i>
                                        Un especialista en dietas adelgazantes
                                    </i>
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
