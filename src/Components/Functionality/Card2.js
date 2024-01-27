import React from 'react';
import '../Style/Card2.css';

const Card2 = (props) => {
    const Data = props.Data;
    return (
        <div>
            <div className="col">
                            <div className="total-invoice">
                                <h3 className="cardtittle">{Data.test}</h3>
                                <h5 className="cardtittle">18DCW2048T1AA</h5>
                                <h5 className="cardtittle">Nagaon</h5>
                                <div className="price">₹520</div>
                                <div className="chi">
                                    <input maxlength="3" size="3" />
                                    <div className="price"><button className="button-70" role="button">Edit</button></div>
                                </div>
                            </div>
                        </div>
        </div>
    );
}

export default Card2;

