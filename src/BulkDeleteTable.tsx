import React, {useState} from "react"
import MaterialTable, {MTableToolbar} from "material-table";
import {Icon} from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: '0809070978',  year: 2020 },
    { id: 2, name: "Raj", email: 'raj@gmail.com', phone: '0708890345',  year: 2021 },
    { id: 3, name: "David", email: 'david342@gmail.com', phone: '0709899089',  year: 2022 },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2022 },
    { id: 5, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2020 },
    { id: 6, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2022 },
]


export const BulkDeleteTable = () => {
    const [data, setData] = useState(empList)
    const [selectedRows, setSelectedRows] = useState<any>([])

    const columns = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone number", field: "phone" },
        { title: "Age", field: "year" }
    ]

    const handleBulkDelete = () => {
        const updateData = data.filter(row => !selectedRows.includes(row))
        setData(updateData)
    }
    return (
        <div style={{margin:'2%', marginTop:'3%'}}>
            <h2>Bulk Delete with material table </h2><br />
            <MaterialTable
                title="Employee Data"
                columns={columns}
                data={data}
                onSelectionChange={ (rows:any) => setSelectedRows(rows) }
                options={{
                    selection:true
                }}
                actions={[
                    {
                       icon:'delete',
                        tooltip:'Delete all selected rows',
                        onClick: () => handleBulkDelete()
                        /*icon: () => (
                            <DeleteOutlineIcon />
                        ),
                        tooltip: 'Delete Item',
                        onClick: (event, rowData:any) => console.log('deleted'),*/
                    }
                ]}
            />
        </div>
    )
}
