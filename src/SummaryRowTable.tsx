import React, {useState} from 'react'
import MaterialTable from "material-table";
import {Divider, Grid, TablePagination, Typography} from "@mui/material";

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: '0809070978',  age: 23 },
    { id: 2, name: "Raj", email: 'raj@gmail.com', phone: '0708890345',  age: 17 },
    { id: 3, name: "David", email: 'david342@gmail.com', phone: '0709899089',  age: 34 },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', age: 20 },
    { id: 5, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', age: 20 },
    { id: 6, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', age: 20 },
]

export const SummaryRowTable = () => {
    const [data, setData] = useState(empList)
    const columns = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone number", field: "phone" },
        { title: "Age", field: "age" }
    ]
    return (
        <div style={{margin:'2%', marginTop:'3%'}}>
            <h2>Add Summary Row to Material Table </h2><br />
            <MaterialTable
                title="Employee Data"
                columns={columns}
                data={data}
                components={{
                    Pagination: (props) => <>
                        {console.log(props)}
                        <Grid container style={{padding:15, backgroundColor:'#f5f5f5'}}>
                            <Grid sm={6} item>
                                <Typography variant="subtitle2">Total</Typography>
                            </Grid>
                            <Grid sm={6} item textAlign="center">
                                <Typography variant="subtitle2">Number of rows : {props.count}</Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <TablePagination {...props} />
                    </>
                }}
            />
        </div>
    )
}
