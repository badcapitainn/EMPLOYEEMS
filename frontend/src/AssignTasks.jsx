import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function AssignTasks(){
    const [data, setData] = useState({
        name: '',
        task: '',
        due: '',
        priority: '',
        status:'Pending',
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/assigntasks', data)
        .then(res => {
            alert("Task Assigned")
        })
        .catch(err => console.log("here"));
    }
    return(
        
        <div className='d-flex flex-column align-items-center pt-4'>
        <h2>Assign Task</h2>
        <form class="row g-3 w-50" onSubmit={handleSubmit}>
        <div class="col-12">
                <label for="inputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                onChange={e => setData({...data, name: e.target.value})} value={data.name}/>
            </div>
            <div class="col-12">
                <label for="inputEmail4" class="form-label">Task</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder='Enter Task' autoComplete='off'
                onChange={e => setData({...data, task: e.target.value})} value={data.task}/>
            </div>
            <div class="col-12">
                <label for="inputSalary" class="form-label">Due Date</label>
                <input type="date" class="form-control" id="inputSalary" placeholder="Select Due Date" autoComplete='off'
                onChange={e => setData({...data, due: e.target.value})} value={data.due}/>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Priority</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Low, Medium or High" autoComplete='off'
                onChange={e => setData({...data, priority: e.target.value})} value={data.priority}/>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-outline-primary">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default AssignTasks