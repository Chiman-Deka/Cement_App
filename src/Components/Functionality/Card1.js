import React from 'react';
import '../Style/Card1.css';

const Card1 = () => {
    return (
        <div className="col">
                            <div className="debit-card">
                                <h6 className="cardtittle">Nagaon</h6>
                                <h3 className="cardnumber">₹520</h3>
                                <button onclick="myFunction()">aa</button>
                                <div className="chi">
                                    <input maxlength="3" size="3" className="ip" />
                                    <div className="price"><button className="button-70" role="button">Edit</button></div>
                                </div>
                            </div>
                        </div>
    );
}

export default Card1;

