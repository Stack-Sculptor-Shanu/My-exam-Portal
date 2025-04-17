import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard'
import './style.css'
import Landingpage from './components/LandingPage/Landingpage'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Privacy from './components/Privacy/Privacy'
import Login from './components/Login/Login'
import AdminReg from './Admin/AdminReg'
import StudentReg from './Student/StudentReg'
import ExamLists from './components/LiveExams/ExamLists/ExamLists'
import Instruction from './components/LiveExams/Instructions/Instruction'
import Admin from './Admin/admindashboard/Admin'
import ExamForm from './Admin/admindashboard/maincontent/Examform/ExamForm'
import CreateQuestion from './Admin/admindashboard/maincontent/createquestion/CreateQuestion'
import LiveExams from './components/LiveExams/ExamPage/LiveExams'
import Result from './components/Results/Result'
import Private from './components/LiveExams/PrivateRoute/Private'
import StudentDashboard from './Student/Dashboard/StudentDashboard'
import HowItWorks from './components/HowItWorks';
import FlowChart from './Flowchart';
import PRforExam from './components/LiveExams/PrivateRoute/PRforExams';
import PRforLoginReg from './components/LiveExams/PrivateRoute/PRforLoginReg';

const App = () => {
    const route = createBrowserRouter([
        {
            path:'/',
            element:<Dashboard/>,
            children:[
                {
                    path:'/',
                    element:<Landingpage/>
                },
                {
                    path:'/about',
                    element:<About/> 
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    path:'/privacy',
                    element:<Privacy/>
                },
                {
                    path:'/login',
                    element:<PRforLoginReg>
                        <Login/>
                    </PRforLoginReg>
                },
                {
                    path:'/adminReg',
                    element:<PRforLoginReg>
                        <AdminReg/>
                    </PRforLoginReg>
                },
                {
                    path:'studentReg',
                    element:<PRforLoginReg>
                        <StudentReg/>
                    </PRforLoginReg>
                },
                {
                    path:'/examlists',
                    element:<ExamLists/>
                },
                {
                    path:'/instructions',
                    element:<Private>
                        <Instruction/>
                    </Private>
                },
                {
                    path:'/exampage',
                    element:<PRforExam>
                            <LiveExams/>
                        </PRforExam>
                },
                {
                    path:'/aDashboard',
                    element:<Private>
                        <Admin/>
                    </Private>
                },
                {
                    path:'/studentDashboard',
                    element:<Private>
                        <StudentDashboard/>
                    </Private>
                },
                {
                    path:'/examform',
                    element:<Private>
                        <ExamForm/>
                    </Private>
                },
                {
                    path:'/createquestion',
                    element:<Private>
                        <CreateQuestion/>
                    </Private>
                },
                {
                    path:'/result',
                    element:<Private>
                        <Result/>
                    </Private>
                },
                {
                    path:'/howitworks',
                    element:<HowItWorks/>
                },
                {
                    path:'/flowchart',
                    element:<FlowChart/>
                }
            ]
        }
    ])
  return <RouterProvider router={route}></RouterProvider>
}

export default App