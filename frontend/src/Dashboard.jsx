import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard(){
    const navigate = useNavigate()
	axios.defaults.withCredentials = true;
	useEffect(()=>{
		axios.get('http://localhost:8081/dashboard')
		.then(res => {
			if(res.data.Status === "Success") {
				if(res.data.role === "admin") {
					navigate('/home');
				} else {
					const id = res.data.id;
					navigate('/employeedetail/'+id)
				}
			} else {
				navigate('/start')
			}
		})
	}, [])

	const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}
    return(
        <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Admin</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <Link to="/home" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tasks" class="nav-link px-0 align-middle">
                                <i class=" fs-4 bi bi-bar-chart-line"></i> <span class="ms-1 d-none d-sm-inline">Reports</span></Link>
                        </li>
                        <li>
                            <Link to="/leave" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi bi-calendar3"></i> <span class="ms-1 d-none d-sm-inline">Leave Requests</span> </Link>
                        </li>
                        <li>
                            <Link to="/leavedays" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi bi-calendar3"></i> <span class="ms-1 d-none d-sm-inline">Leave Days</span> </Link>
                        </li>
                        <li>
                            <Link to="/assigntasks" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi bi-clipboard"></i> <span class="ms-1 d-none d-sm-inline">Assign Tasks</span> </Link>
                        </li>
                        <li>
                            <Link to="employee" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Manage Employees</span> </Link>
                        </li>
                        <li onClick ={handleLogout}>
                            <Link to="/" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class=" fs-3 bi bi-door-open"></i> <span class="ms-1 d-none d-sm-inline">Logout</span> </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col p-0 m-0">
                <div className="p-2 d-flex justify-content-center shadow">
                    <h4>Employee Management System</h4>
                </div>
                <Outlet/>
            </div>
        </div>
    </div>
    
    )
}

export default Dashboard