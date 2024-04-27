import React from 'react'
import Header from '../components/Header'
import '..css/Dashboard.css'
import { DataGrid } from '@mui/x-data-grid';


const Dashboard = () => {
    const columns: GridColDef[] = [
        { field: 'date', headerName: 'Date', width: 50 },
        { field: 'time', headerName: 'Time', width: 50 },
        { field: 'systolic', headerName: 'Systolic', width: 50 },
        { field: 'diastolic', headerName: 'Diastolic', width: 50 },
    ];
    return (
        <>
            <Header />
            <section className="dataArea"
                style={ { height: 350, width: '100%' } }
            >



            </section >
        </>
    )
}

export default Dashboard
