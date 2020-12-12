import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow'

export const PriceList = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <h1 className="text-center">Lista de precios</h1>
                            <section className="table-section">
                                <p>
                                    <strong>
                                        ¡Conjunto especial de Salud!
                                    </strong>
                                </p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>precio por el set</th>
                                            <th>1000 kcal</th>
                                            <th>1200 kcal</th>
                                            <th>1500 kcal</th>
                                            <th>1800 kcal</th>
                                            <th>2000 kcal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Orden semanal</th>
                                            <td>57 PLN</td>
                                            <td>59 PLN</td>
                                            <td>61 PLN</td>
                                            <td>63 PLN</td>
                                            <td>65 PLN</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Orden mensual</th>
                                            <td>54 PLN</td>
                                            <td>56 PLN</td>
                                            <td>58 PLN</td>
                                            <td>60 PLN</td>
                                            <td>62 PLN</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section className="table-section">
                                <p>
                                    <strong>
                                        Dieta clásica, vegetariana, vegetariana con pescado
                                    </strong>
                                </p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>precio por el set</th>
                                            <th>1000 kcal</th>
                                            <th>1200 kcal</th>
                                            <th>1500 kcal</th>
                                            <th>1800 kcal</th>
                                            <th>2000 kcal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Orden semanal</th>
                                            <td>53 PLN</td>
                                            <td>55 PLN</td>
                                            <td>67 PLN</td>
                                            <td>59 PLN</td>
                                            <td>61 PLN</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Orden mensual</th>
                                            <td>50 PLN</td>
                                            <td>52 PLN</td>
                                            <td>54 PLN</td>
                                            <td>56 PLN</td>
                                            <td>58 PLN</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section className="table-section">
                                <p>
                                    <strong>
                                    Una dieta sin gluten, sin lactosa y sin lácteos
                                    </strong>
                                </p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>precio por el set</th>
                                            <th>1000 kcal</th>
                                            <th>1200 kcal</th>
                                            <th>1500 kcal</th>
                                            <th>1800 kcal</th>
                                            <th>2000 kcal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Orden semanal</th>
                                            <td>59 PLN</td>
                                            <td>61 PLN</td>
                                            <td>63 PLN</td>
                                            <td>55 PLN</td>
                                            <td>68 PLN</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Orden mensual</th>
                                            <td>56 PLN</td>
                                            <td>58 PLN</td>
                                            <td>60 PLN</td>
                                            <td>62 PLN</td>
                                            <td>64 PLN</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section className="table-section">
                                <p>
                                    <strong>
                                    Dieta para diabéticos, resistente a la insulina
                                    </strong>
                                </p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>precio por el set</th>
                                            <th>1000 kcal</th>
                                            <th>1200 kcal</th>
                                            <th>1500 kcal</th>
                                            <th>1800 kcal</th>
                                            <th>2000 kcal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Orden semanal</th>
                                            <td>59 PLN</td>
                                            <td>61 PLN</td>
                                            <td>63 PLN</td>
                                            <td>55 PLN</td>
                                            <td>68 PLN</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Orden mensual</th>
                                            <td>56 PLN</td>
                                            <td>58 PLN</td>
                                            <td>60 PLN</td>
                                            <td>62 PLN</td>
                                            <td>64 PLN</td>
                                        </tr>
                                    </tbody>
                                </table>
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
