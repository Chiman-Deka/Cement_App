import React from 'react';
import '../Style/Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <ul>
                    <li className="dashboard">
                        <i className="fa fa-dashcube"></i>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <i className="fa fa-money"></i>
                        <a href="file:///C:/xampp/htdocs/Bootstrap/glassweb1.html">Zone</a>
                    </li>
                    <li>
                        <i className="fa fa-envelope-o"></i>
                        <a href="#">Market</a>
                    </li>
                    <li>
                        <i className="fa fa-credit-card-alt"></i>
                        <a href="#">All</a>
                    </li>
                </ul>

                <div className="grid">
                    <div className="grid-container">
                    <table>
                    <thead>
                    <tr className="header">
                    <th>Dealer Name<div>Dealer Name</div></th>
                    <th>Price<div>Price</div></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Suresh Dasari</td><td>B.Tech</td>
                    </tr>
                    <tr>
                    <td>Rohini Dasari</td><td>Msc</td>
                    </tr>
                    <tr>
                    <td>Madhav Sai</td><td>MBA</td>
                    </tr>
                    <tr>
                    <td>Praveen Kumar</td><td>B.Tech</td>
                    </tr>
                    <tr>
                    <td>Mahendra Dasari</td><td>CA</td>
                    </tr>
                    <tr>
                    <td>Nagaraju Dasari</td><td>MCA</td>
                    </tr>
                    <tr>
                    <td>Sateesh Alavala</td><td>MD</td>
                    </tr>
                    <tr>
                    <td>Sudheer</td><td>B.Tech</td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Sidebar;

