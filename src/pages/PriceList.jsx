import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow'
import { FindUs } from '../components/FindUs'
import { price_list_data } from '../data/price-list-data'


export const PriceList = () => {
    var prices = price_list_data.prices;

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            {
                                prices.map((value, index) => (
                                    <div key={index}>
                                        <h1 className="text-center mb-5">{value.title}</h1>
                                        <p style={{color : 'red'}}>
                                            {value.subtitle}
                                        </p>
                                        <section className="table-section overflow-auto">
                                            <table className="table" style={{background : value['table-color']}}>
                                                <thead>
                                                    <tr>
                                                        <th>{value.fields[0]}</th>
                                                        <th>{value.fields[1]}</th>
                                                        <th>{value.fields[2]}</th>
                                                        <th>{value.fields[3]}</th>
                                                        <th>{value.fields[4]}</th>
                                                        <th>{value.fields[5]}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        value.data.map((item, i) => (
                                                            <tr key={i}>
                                                                <th scope="row">{item[0]}</th>
                                                                <td>{item[1]}</td>
                                                                <td>{item[2]}</td>
                                                                <td>{item[3]}</td>
                                                                <td>{item[4]}</td>
                                                                <td>{item[5]}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </section>
                                    </div>
                                ))
                            }
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
