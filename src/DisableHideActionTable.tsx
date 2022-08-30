import React, {useState} from "react";
import MaterialTable from "material-table";
import { resolve } from "path";

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: '0809070978',  age: 23 },
    { id: 2, name: "Raj", email: 'raj@gmail.com', phone: '0708890345',  age: 17 },
    { id: 3, name: "David", email: 'david342@gmail.com', phone: '0709899089',  age: 34 },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', age: 20 },
]

export const DisableHideActionTable = () => {
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
            <h2>Disable/ Hide the Delete and Edit Icons in Material Table</h2><br />
            <MaterialTable
                title="Employee Data"
                columns={columns}
                data={data}
                editable={{
                    isDeleteHidden:(row:any) => row.age < 18,
                    isDeletable:(row:any) => row.id%2 === 0,
                    isEditable:(row:any) => row.id%2 === 0,
                    onRowAdd:(newRow:any) => new Promise((resolve, reject) => {
                    }),
                    onRowUpdate:(updatedRow, oldRow:any) => new Promise((resolve, reject) => {
                    }),
                    onRowDelete: (selectedRow:any) => new Promise((resolve, reject) => {
                    }),
                }}
                options={{
                    actionsColumnIndex:-1,
                    addRowPosition: 'first'
                }}
            />
        </div>
    )

}
