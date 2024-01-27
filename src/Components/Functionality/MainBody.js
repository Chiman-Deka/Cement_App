import React from 'react';
import '../Style/MainBody.css';
import Card1 from '../Functionality/Card1';
import Card2 from '../Functionality/Card2';

const MainBody = (props) => {
    const Data = props.Data;
    return (
        <div className="main-body">
            <div className="cards">
                <div className="row row-2"><Card2 Data={Data}/><Card2 Data={Data} /><Card2 Data={Data} /><Card2 Data={Data}/></div>
            </div>
        </div>
    );
}

export default MainBody;

