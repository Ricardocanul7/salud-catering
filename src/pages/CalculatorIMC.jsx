import React from 'react'
import { DidYouKnow } from '../components/DidYouKnow'
import { FindUs } from '../components/FindUs'

export const CalculatorIMC = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 py-5">
                        <div className="border rounded shadow p-5">
                            <h1 className="text-center">
                                {/* Calculadora IMC */}
                                Kalkulator BMI
                            </h1>

                            <img src="https://image.winudf.com/v2/image1/Y29tLmFwcG92by5ibWljYWxjdWxhdG9yX3NjcmVlbl9wbF8wXzE1NjU2NDgzNTFfMDIw/screen-0.jpg?fakeurl=1&type=.jpg" 
                                alt=""
                                className="img-fluid"
                            />

                            <pre>
                            https://apkpure.com/pl/bmi-calculator/com.appovo.bmicalculator
                            </pre>
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
