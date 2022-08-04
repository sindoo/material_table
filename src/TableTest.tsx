import React, { useState} from 'react'
import MaterialTable from 'material-table'
import {Avatar, Grid} from "@mui/material";
const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, dob: '10/10/1987' },
    { id: 2, name: "Raj", email: 'raj@gmail.com', status: 1, dob: '02/08/1980' },
    { id: 3, name: "David", email: 'david342@gmail.com', status: 1, dob: '03/02/1990' },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, dob: '05/08/1978' },
]

export const TableTest = () => {
    const [data, setData] = useState(empList)

    const columns = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name", render: (row:any) => <NameCustomeComponent name={row.name} />
        },
        { title: "Email", field: "email" },
        {
            title: "Status",
            field: 'status',
            render:(row:any) => <div className={row.status ? 'active' : 'deactive'}>{row.status ? 'Active' : 'Deactive'}</div>
        },
        { title: "Date of born", field: "dob" }
    ]

    return (
        <MaterialTable
            title="Employee Data"
            columns={columns}
            data={data}
            options={{
                exportButton:true
            }}
        />
    )
}

export const NameCustomeComponent = ({ name } : { name: string }) => {

    return (
        <Grid container alignItems="center">
            <Grid item sm={2}><Avatar style={{backgroundColor:"darkgreen"}}>{name[0]}</Avatar></Grid>
            <Grid item>{name}</Grid>
        </Grid>
    )
}
