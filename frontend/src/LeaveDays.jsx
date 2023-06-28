import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


function LeaveDays(){

    const leavedue = 18;
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/getleavedays')
        .then(res => {
            if (res.data.Status === 'Success') {
                console.log(res.data.Result);
                setData(res.data.Result);
            }
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>Employee Leave Days</h3>
            </div>
            <div className='mt-3'>
                <table className='table' class="table table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Status of Leave</th>
                            <th>Leave Days Due</th>
                            <th>Leave Days Taken</th>
                            <th>Leave Days Left</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((applyleave, index) => {
                            return <tr key={index}>
                                <td>{applyleave.name}</td>
                                <td>{applyleave.status}</td>
                                <td>{leavedue}</td>
                                <td>{applyleave.days}</td>
                                <td>{leavedue - applyleave.days}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LeaveDays