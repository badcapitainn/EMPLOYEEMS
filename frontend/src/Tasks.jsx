import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'



function Tasks(){
    const componentPDF = useRef();

    const generatePDF = useReactToPrint({
        content: () =>componentPDF.current,
        documentTitle: "Task Report",
        onAfterPrint: () => console.log('Printed')
    });
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
            <h3>Task Report</h3>
        </div>
        <button className='btn btn-success' class="btn btn-outline-primary" onClick={generatePDF}><i class="bi bi-printer"></i>pdf</button>
        <div className='mt-3'>
            <div ref={componentPDF} style={{width:'100%'}}>
            <table className='table' class="table table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Task</th>
                        <th>Due date</th>
                        <th>Priority</th>
                        <th>Status</th>
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
                            </tr>
                        })}
                </tbody>
            </table>
            </div>
        </div>
    </div>

    )
}

export default Tasks