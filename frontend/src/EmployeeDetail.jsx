import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EmployeeDetail() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/get/' + id)
            .then(res => setEmployee(res.data.Result[0]))
            .catch(err => console.log(err));
    })
    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                navigate('/start')
            }).catch(err => console.log(err));
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <i class="fs-3 bi bi-person-circle"></i><a class="navbar-brand" href="#">Employee Profile</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li>
                                <Link to={`/leavedaysdata/` + employee.id} class="nav-link px-3 align-middle">
                                    <span class="ms-1 d-none d-sm-inline">Leave Days Data</span></Link>
                            </li>
                            <li>
                                <Link to={`/leaveapplication/` + employee.id} class="nav-link px-3 align-middle">
                                    <span class="ms-1 d-none d-sm-inline">Apply for leave</span></Link>
                            </li>
                            <li>
                                <Link to={`/trackleave/` + employee.id} class="nav-link px-3 align-middle">
                                    <span class="ms-1 d-none d-sm-inline">Track Leave Requests</span></Link>
                            </li>
                            <li>
                                <Link to={`/tracktasks/` + employee.id} class="nav-link px-3 align-middle">
                                    <span class="ms-1 d-none d-sm-inline">Track Tasks Given</span></Link>
                            </li>
                            <li class="nav-item">
                                <button className='btn btn-danger' class="btn btn-outline-danger" onClick={handleLogout}><i class=" bi bi-door-open"></i>Logout</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
                <img src={`http://localhost:8081/images/` + employee.image} alt="" className='empImg' />
                <div className='d-flex align-items-center flex-column mt-5'>
                    <h3>Name: {employee.name}</h3>
                    <h3>Email: {employee.email}</h3>
                    <h3>Salary: {employee.salary}</h3>
                </div>
                <div>
                    <Link to={`/edit/` + employee.id} className='btn btn-primary btn-sm me-2' class="btn btn-outline-success"><i class="fs-3 bi bi-pencil-fill"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetail