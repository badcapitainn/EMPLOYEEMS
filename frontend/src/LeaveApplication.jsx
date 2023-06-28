import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function LeaveApplication() {
    const { id } = useParams();

    const [data, setData] = useState({
        name: '',
        days:'',
        startdate: '',
        enddate: '',
        reason: '',
        status:'Pending',
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/leaveapplication', data)
        .then(res => {
            alert("Application sent")
        })
        .catch(err => console.log("here"));
    }
    return (
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>Apply for Leave</h2>
            <div class="container">
                <form class="row g-3 w-50" onSubmit={handleSubmit}>
                    <div class="col-12" >
                        <label for="inputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                            onChange={e => setData({ ...data, name: e.target.value })} />
                    </div>
                    <div class="col-12" >
                        <label for="inputName" class="form-label">Number of days</label>
                        <input type="number" class="form-control" id="inputdays" placeholder='Enter Number of Days' autoComplete='off'
                            onChange={e => setData({ ...data, days: e.target.value })} />
                    </div>
                    <div class="col-12">
                        <label for="start-date" class="form-label">Start Date</label>
                        <input type="date" class="form-control" id="inputstartdate" name="startdate" required onChange={e => setData({ ...data, enddate: e.target.value })} />
                    </div>
                    <div class="mb-3">
                        <label for="end-date" class="form-label">End Date</label>
                        <input type="date" class="form-control" id="inputenddate" name="enddate" required onChange={e => setData({ ...data, startdate: e.target.value })} />
                    </div>
                    <div class="mb-3">
                        <label for="reason" class="form-label">Reason</label>
                        <input type="text" class="form-control" id="inputreason" name="reason" placeholder='Enter Reason' required onChange={e => setData({ ...data, reason: e.target.value })} />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-outline-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LeaveApplication