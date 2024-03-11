import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Table.css';
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
                <i className="fa fa-square-check"></i><span>Show / Hide Rows</span>
                <FontAwesomeIcon icon="fa-solid fa-file-export"/><span>Export</span>
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
                    <tbody>
                    <tr>
                        <td>Barry Parker</td>
                        <td>Yes</td>
                        <td>(224) 614-9985</td>
                        <td className="gray">(588) 900-2137 <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td className="gray">bparker@example.com <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr>
                        <td>Dominic Wright</td>
                        <td>No</td>
                        <td className="red">(367) 602-7186</td>
                        <td className="gray">(979) 307-9402 <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td className="gray">pireco@Iuporob.io <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr>
                        <td>Barry Parker</td>
                        <td>Yes</td>
                        <td>(224) 614-9985</td>
                        <td className="gray">(588) 900-2137 <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td className="gray">bparker@example.com <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr>
                        <td>Dominic Wright</td>
                        <td>No</td>
                        <td>(367) 602-7186</td>
                        <td className="gray">(367) 602-7186 <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td className="gray">pireco@Iuporob.io <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr>
                        <td>Barry Parker</td>
                        <td>Yes</td>
                        <td>(224) 614-9985</td>
                        <td className="gray">(588) 900-2137 <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td className="gray">bparker@example.com <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td>English</td>
                        <td>Unknown</td>
                    </tr>
                    <tr>
                        <td>Dominic Wright</td>
                        <td>No</td>
                        <td className="red">(367) 602-7186</td>
                        <td className="gray">(979) 307-9402 <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
                        <td className="gray">pireco@Iuporob.io <FontAwesomeIcon icon="fa-solid fa-plus" /></td>
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