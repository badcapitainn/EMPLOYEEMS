import React from 'react'
import Login from './login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Reports from './Reports'
import Home from './Home'
import Leave from './Leave'
import AddEmployee from './addEmployee'
import EditEmployee from './EditEmployee'
import Start from './Start'
import EmployeeDetail from './EmployeeDetail'
import EmployeeLogin from './EmployeeLogin'
import Edit from './edit'
import LeaveApplication from './LeaveApplication'
import TrackLeave from './TrackLeave'
import Approve from './approve'
import Decline from './Decline'
import AssignTasks from './AssignTasks'
import Tasks from './Tasks'
import TrackTasks from './TrackTasks'
import Complete from './complete'
import LeaveDays from './LeaveDays'
import LeaveDaysData from './LeaveDaysData'



function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='/reports' element={<Reports/>}></Route>
        <Route path='/leave' element={<Leave/>}></Route>
        <Route path='/create' element={<AddEmployee/>}></Route>
        <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
        <Route path='/tasks' element={<Tasks />}></Route>
        <Route path='/assigntasks' element={<AssignTasks />}></Route>
        <Route path='/leavedays' element={<LeaveDays />}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/start' element={<Start/>}></Route>
      <Route path='/employeelogin' element={<EmployeeLogin/>}></Route>
      <Route path='/employeedetail/:id' element={<EmployeeDetail/>}></Route>
      <Route path='/edit/:id' element ={<Edit/>}></Route>
      <Route path='/leaveapplication/:id' element ={<LeaveApplication/>}></Route>
      <Route path='/leavedaysdata/:id' element ={<LeaveDaysData/>}></Route>
      <Route path='/trackleave/:id' element ={<TrackLeave/>}></Route>
      <Route path='/approve/:id' element ={<Approve/>}></Route>
      <Route path='/decline/:id' element ={<Decline/>}></Route>
      <Route path='/tracktasks/:id' element ={<TrackTasks/>}></Route>
      <Route path='/complete/:id' element ={<Complete/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App