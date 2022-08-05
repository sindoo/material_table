import React, {useState} from 'react'
import MaterialTable, { MTableBodyRow } from 'material-table'
import {Grid, grid2Classes, IconButton, Table, TableRow} from "@mui/material";
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';
import {text} from "stream/consumers";

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', gender: "Male", phone: '0809070978',  city: 'Yamoussoukro' },
    { id: 2, name: "Raj", email: 'raj@gmail.com', gender: "Male", phone: '0708890345',  city: 'Aboisso' },
    { id: 3, name: "David", email: 'david342@gmail.com', gender: "Male", phone: '0709899089',  city: 'Bouake' },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', gender: "Female", phone: '0605678909', city: 'Abidjan' },
]

export const CustomRow = (props:any) => {
    const [show, setShow] = useState(false)
    const overlayStyle:any = {
        width: '100%',
        position: 'absolute',
    }

    return(
        <Grid style={{display:'contents'}} onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            { show && <Grid container textAlign='left' style={overlayStyle}>
                    <Grid alignItems="flex-enter" item sm={1} style={{ backgroundColor:'#ffffff' }}>
                        <IconButton title="Download" onClick={() => alert(props.data.name)}>
                            <GetAppIcon />
                        </IconButton>
                        <IconButton title="Delete" onClick={() => props.handleDelete(props.index)}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid> }
            <MTableBodyRow { ...props } />
        </Grid>
    )
}


export const OverridingTableComponent = () => {
    // eslint-disable-next-line
    const [data, setData] = useState(empList)
    const columns = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Gender", field: "gender" },
        { title: "Phone number", field: "phone" },
        { title: "City", field: "city" }
    ]

    const handleDelete = (index:number) => {
        alert(index)
    }

    return (
        <MaterialTable
            title="Employee Data"
            columns={columns}
            data={data}
            options={{
                exportButton:true,
                actionsColumnIndex:-1,
                addRowPosition: 'first'
            }}
            components={{
                Row: props => <CustomRow { ...props } handleDelete={handleDelete} />
            }}
        />
    )
}
