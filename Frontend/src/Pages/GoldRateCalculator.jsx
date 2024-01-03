import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar'



export default function GoldRateCalculator() {

    const [goldRate, setgoldRate] = useState();
    const [invalidGoldMessage, setInvalidGoldMessage] = useState(false);
    const [wastage, setWastage] = useState();
    const [goldWeight, setgoldWeight] = useState();
    const [goldAmount, setgoldAmount] = useState(0);
    const [wastageamount, setWastageAmount] = useState(0);
    const [gstgold, setGSTGold] = useState(0);
    const [totalGoldAmount, setTotalGoldAmount] = useState(0);
    const [wastageInGram, setWastageInGram] = useState(0);


    function getgoldAmount() {
        if (goldRate && goldWeight) {
            const goldAmount = goldRate * goldWeight;
            const wastageAmount = (wastage / 100) * goldAmount;
            const GSTAmount = 0.03 * (goldAmount + wastageAmount);
            const totalGoldAmount = goldAmount + wastageAmount + GSTAmount;
            const wastageInGram = (wastage / 100) * goldWeight;

            setgoldAmount(goldAmount);
            setGSTGold(GSTAmount);
            setTotalGoldAmount(totalGoldAmount);
            setWastageAmount(wastageAmount);
            setWastageInGram(wastageInGram);
        } else {
            setInvalidGoldMessage(true);
        }
    }
    return (
        <>
            <NavBar />
            <div className='App2'>
                <div className="calc-topBtn col-4">
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                    <div className="collapse multi-collapse show" id="multiCollapseExample1">
                        <h1 className="calc-headerName"><h3>Gold Rate Calculator</h3></h1>
                        <form className='calc-form'>
                            <div>
                                <label className='calc-label'><h3>Gold rate in &#x20b9;</h3></label>
                                <input type="number" min={1} className="form-control" value={goldRate} onChange={e => setgoldRate(+e.target.value)} />
                            </div>
                            <div>
                                <label className='calc-label'><h3>Gold Weight in grams</h3></label>
                                <input type="number" min={1} className="form-control" value={goldWeight} onChange={e => setgoldWeight(+e.target.value)} />
                            </div>
                            <div>
                                <label className='calc-label'><h3>Wastage in %</h3></label>
                                <input type="number" min={1} className="form-control" value={wastage} onChange={e => setWastage(+e.target.value)} />
                            </div>
                            {invalidGoldMessage && <p className="invalidMessage"> ** Invalid input values **</p>}
                        </form>
                        <button className="calc-button" onClick={getgoldAmount}>Calculate</button>

                        <table className="calc-table">
                            <thead>
                                <tbody>
                                    <tr>
                                        <th><h2>Description</h2></th>
                                        <th><h2>Rate</h2></th>
                                    </tr>
                                    <tr>
                                        <td><h3>Actual Gold Rate</h3></td>
                                        <td><h3>&#x20b9;{goldAmount}</h3></td>
                                    </tr>
                                    <tr>
                                        <td><h3>Wastage in amount ({wastage}%)</h3></td>
                                        <td><h3>&#x20b9;{Math.round(wastageamount)}</h3></td>
                                    </tr>
                                    <tr>
                                        <td><h3>GST (3%)</h3></td>
                                        <td><h3>&#x20b9;{Math.round(gstgold)}</h3></td>
                                    </tr>
                                    <tr>
                                        <td><h3>Total</h3></td>
                                        <td><h3>&#x20b9;{Math.round(totalGoldAmount)}</h3></td>
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                        <br></br>
                        <div>
                            <p className='para'><h2>Wastage in grams:</h2><br></br><h3>{wastageInGram}</h3></p>

                        </div>

                    </div>
                </div>
            </div>
        </>

    );

}

