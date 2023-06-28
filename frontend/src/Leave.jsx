import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


function Leave() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/getleave')
        .then(res => {
            if (res.data.Status === 'Success') {
                console.log(res.data.Result);
                setData(res.data.Result);
            }
        })
        .catch(err => console.log(err));
    }, [])


    return (
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>Employee Leave Requests</h3>
            </div>
            <div className='mt-3'>
                <table className='table' class="table table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((applyleave, index) => {
                            return <tr key={index}>
                                <td>{applyleave.name}</td>
                                <td>{applyleave.startdate}</td>
                                <td>{applyleave.enddate}</td>
                                <td>{applyleave.reason}</td>
                                <td>{applyleave.status}</td>
                                <td>
                                    <Link to ={'/approve/' + applyleave.id} className='btn btn-primary btn-sm me-2' class="btn btn-outline-success"><i class="bi bi-check2"></i></Link>
                                    <Link to ={'/decline/' + applyleave.id} className='btn btn-sm btn-danger' class="btn btn-outline-danger"><i class="bi bi-x"></i></Link>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leave