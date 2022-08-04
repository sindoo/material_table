import React, {useState} from 'react'
import MaterialTable from 'material-table'

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: '0809070978',  city: 'Yamoussoukro' },
    { id: 2, name: "Raj", email: 'raj@gmail.com', phone: '0708890345',  city: 'Aboisso' },
    { id: 3, name: "David", email: 'david342@gmail.com', phone: '0709899089',  city: 'Bouake' },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', city: 'Abidjan' },
]

export const BulkEditTable = () => {
    const never: | "always" | "onUpdate" | "onAdd" | "never" = "never";

    const [data, setData] = useState(empList)
    const columns = [
        { title: "ID", field: "id", editable: never },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone number", field: "phone" },
        { title: "City", field: "city" }
    ]

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
            editable={{
                onRowAdd: (newRow:any) => new Promise((resolve, reject) => {
                    const updatedRow = [...data, {id:Math.floor(Math.random()*100), ...newRow}]
                    setTimeout(() => {
                        setData(updatedRow)
                        resolve('success');
                    }, 2000)

                    //console.log(newRow)
                }),
                onRowDelete: (selectedRow:any) => new Promise((resolve, reject) => {
                    const datatableIndex = selectedRow.tableData.id;
                    const updatedRow = [...data]
                    updatedRow.splice(datatableIndex, 1)
                    setTimeout(() => {
                        setData(updatedRow)
                        resolve('success')
                    }, 2000)
                    console.log(datatableIndex)
                }),
                onRowUpdate: (updatedRow, oldRow:any) => new Promise((resolve, reject) => {
                    const dataIndex = oldRow.tableData.id
                    const updatedRows = [...data]
                    updatedRows[dataIndex] = updatedRow
                    setTimeout(() => {
                        setData(updatedRows)
                        resolve('success')
                    }, 2000)
                }),
                onBulkUpdate: (selectedRows) => new Promise((resolve, reject) => {
                    const rows:any = Object.values(selectedRows)
                    const updatedRows = [...data]
                    let index;
                    rows.map((employee:any) => {
                        index = employee.oldData.tableData.id
                        updatedRows[index] = employee.newData
                    })
                    setTimeout(() => {
                        setData(updatedRows)
                        resolve('success')
                    }, 2000)
                })
            }}
        />
    )
}
