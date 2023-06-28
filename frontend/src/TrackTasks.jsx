import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function TrackTasks(){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/gettasks')
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
            <h3>Tasks</h3>
        </div>
        <div className='mt-3'>
            <table className='table' class="table table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Task</th>
                        <th>Due date</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((tasks, index) => {
                            return <tr key={index}>
                                <td>{tasks.name}</td>
                                <td>{tasks.task}</td>
                                <td>{tasks.due}</td>
                                <td>{tasks.priority}</td>
                                <td>{tasks.status}</td>
                                <td>
                                    <Link to ={'/complete/' + tasks.id} className='btn btn-primary btn-sm me-2' class="btn btn-outline-success"><i class="bi bi-eye"></i> View</Link>
                                </td>
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    </div>

    )
}

export default TrackTasks