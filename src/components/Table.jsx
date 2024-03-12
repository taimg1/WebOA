import './Table.css';
// import React, { useState,useRef } from 'react';
// const [isShown, setIsShown] = useState(true);
//
// const HandleClick = () => {
//     setIsShown(!isShown);
//
// };

const Table = () => {
    return(
        <div className="container">
            <section className="container__icon--xmark">
                <i className="fa-solid fa-xmark"></i>
            </section>
            <section className="container__header">
                <h1>Skiptrace Details</h1>
            </section>
            <section className="container__icons">
                <i className="fa-solid fa-check-to-slot"></i><span>Show / Hide Rows</span>
                <i className="fa-solid fa-file-export"></i><span>Export</span>
            </section>
            <section className="container__table">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Conf.Home<br></br> Owner</th>
                        <th>Mobile Phone</th>
                        <th>Home Phone</th>
                        <th>Email Address</th>
                        <th>Language</th>
                        <th>Race</th>
                    </tr>
                    </thead>
                    <tbody className="table__content">
                    <tr className="table__tr--content">
                        <td>Barry Parker</td>
                        <td>Yes</td>
                        <td>(224) 614-9985</td>
                        <td className="gray">(588) 900-2137 <i className="fa-solid fa-plus" /></td>
                        <td className="gray">bparker@example.com <i className="fa-solid fa-plus" /></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr className="table__tr--content">
                        <td>Dominic Wright</td>
                        <td>No</td>
                        <td className="red">(367) 602-7186</td>
                        <td className="gray">(979) 307-9402 <i className="fa-solid fa-plus"/></td>
                        <td className="gray">pireco@Iuporob.io <i className="fa-solid fa-plus"/></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr className="table__tr--content">
                        <td>Barry Parker</td>
                        <td>Yes</td>
                        <td>(224) 614-9985</td>
                        <td className="gray">(588) 900-2137 <i className="fa-solid fa-plus"/></td>
                        <td className="gray">bparker@example.com <i className="fa-solid fa-plus"/></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr className="table__tr--content">
                        <td>Dominic Wright</td>
                        <td>No</td>
                        <td>(367) 602-7186</td>
                        <td className="gray">(367) 602-7186 <i className="fa-solid fa-plus"/></td>
                        <td className="gray">pireco@Iuporob.io <i className="fa-solid fa-plus"/></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr className="table__tr--content">
                        <td>Barry Parker</td>
                        <td>Yes</td>
                        <td>(224) 614-9985</td>
                        <td className="gray">(588) 900-2137 <i className="fa-solid fa-plus"/></td>
                        <td className="gray">bparker@example.com <i className="fa-solid fa-plus"/></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr className="table__tr--content">
                        <td>Dominic Wright</td>
                        <td>No</td>
                        <td className="red">(367) 602-7186</td>
                        <td className="gray">(979) 307-9402 <i className="fa-solid fa-plus"/></td>
                        <td className="gray">pireco@Iuporob.io <i className="fa-solid fa-plus"/></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}
export default Table;