import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow'
import { FindUs } from '../components/FindUs'

export const Order = () => {

    const submitOrder = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <section>
                                <h1 className="text-center">Złóż zamówienie</h1>
                                <p>
                                    <strong className="text-uppercase">
                                        WYBIERZ RODZAJ DIETY
                                    </strong>
                                </p>
                                <p>
                                    <strong className="text-uppercase">
                                        NA JAKI OKRES CHCESZ USTALIĆ DIETĘ
                                    </strong>
                                </p>

                                <ul>
                                    <li>
                                        1 dzień/ lunchbox
                                    </li>
                                    <li>
                                        7 dni
                                    </li>
                                    <li>
                                        28 dni
                                    </li>
                                </ul>

                                <form onSubmit={submitOrder}>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">IMIĘ I NAZWISKO</label>
                                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">ADRES E-MAIL</label>
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="tel" class="form-label">*TELEFON</label>
                                        <input type="tel" class="form-control" id="tel" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Przejdź do płatności</button>
                                </form>
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
