import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Complete() {
    const [data, setData] = useState({

    })
    const navigate = useNavigate()

    const { id } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/approvetasks/' + id, data)
            .then(res => {
                if (res.data.Status === "Success") {
                    alert('Task Completed')
                }
            })
            .catch(err => console.log(err));
    }

    
    useEffect(()=> {
        axios.get('http://localhost:8081/gettasks')
        .then(res => {
        if(res.data.Status === "Success") {
            setData(res.data.Result);
        } else {
            alert("Error")
        }
        })
        .catch(err => console.log(err));
    }, [])



    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">Are you sure you want to mark this task as complete?</h5>
                                <form onSubmit={handleSubmit}>
                                    <button type="submit" class="btn btn-primary">Mark Task as Complete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complete