import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 30));//default range: 30 days before today
    const max = new(Date);

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);


    return(
        <div className="sales-card">
            <h2>Sales</h2>
            <div>
                <div className="form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Date</th>
                            <th>Associate</th>
                            <th className="show992">Visits</th>
                            <th className="show992">Sales</th>
                            <th>Total</th>
                            <th>Notify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">07-10-2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>$ 55300.00</td>
                            <td>
                                <div className="red-btn-container">
                                   <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">07-10-2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>$ 55300.00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">07-10-2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>$ 55300.00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>                        
            </div>
        </div>
    )
  }
  
  export default SalesCard;