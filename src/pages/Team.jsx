import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow'
import { FindUs } from '../components/FindUs'

export const Team = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <h1 className="text-center">
                                {/* Nuestro equipo */}
                                Nasz zespół
                            </h1>
                            <section className="pb-4 text-center">
                                <p>
                                    {/* Nuestro equipo de nutricionistas experimentados
                                    lo ayudará a elegir la dieta adecuada para usted. */}
                                    Nasz zespół doświadczonych dietetyków pomoże Ci w dobraniu odpowiedniej dla Ciebie diety.
                                </p>
                            </section>

                            <section className="section-team-item text-center">
                                <img src="img/10c.png" alt="img" className="img-fluid" />
                                <p><i><strong>Julieta Ana Fernandez</strong></i></p>
                                <p>
                                    <i>
                                        {/* Un especialista que ayudará a nuestros clientes de habla hispana a elegir una dieta. */}
                                        Specjalistka, która pomoże z dobraniem diety naszym hiszpańskojęzycznym klientom.
                                    </i>
                                </p>
                            </section>

                            <section className="section-team-item text-center">
                                <img src="img/11b.png" alt="img" className="img-fluid" />
                                <p><i><strong>Janna Kołakowska</strong></i></p>
                                <p>
                                    <i>
                                        {/* Un especialista en elegir una dieta para personas resistentes a la insulina */}
                                        Specjalistka w dobieraniu diety dla insulinoopornych
                                    </i>
                                </p>
                            </section>

                            <section className="section-team-item text-center">
                                <img src="img/13B.png" alt="img" className="img-fluid" />
                                <p><i><strong>Łukasz Niesiołowski</strong></i></p>
                                <p>
                                    <i>
                                        {/* Dietista especializado en crear una dieta para personas celíacas */}
                                        Dietetyk specjalizujący się w tworzeniu diety dla osób z celiakią
                                    </i>
                                </p>
                            </section>

                            <section className="section-team-item text-center">
                                <img src="img/12B.png" alt="img" className="img-fluid" />
                                <p><i><strong>Marta Kochanowska</strong></i></p>
                                <p>
                                    <i>
                                        {/* Especialista en dieta para alergia al gluten */}
                                        Specjalistka od diety dla uczulonych na gluten
                                    </i>
                                </p>
                            </section>


                            <section className="section-team-item text-center">
                                <img src="img/14B.png" alt="img" className="img-fluid" />
                                <p><i><strong>Tadeusz Mazurek</strong></i></p>
                                <p>
                                    <i>
                                        {/* Dietista especialista en dietas para personas con hashimoto */}
                                        Dietetyk specjalizujący się w dietach dla osób z hashimoto
                                    </i>
                                </p>
                            </section>

                            <section className="section-team-item text-center">
                                <img src="img/15B.png" alt="img" className="img-fluid" />
                                <p><i><strong>Michał Konieczny</strong></i></p>
                                <p>
                                    <i>
                                        {/* Un especialista en dietas adelgazantes */}
                                        Specjalista do diet odchudzających
                                    </i>
                                </p>
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
        </div>
    )
}
