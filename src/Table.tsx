import React, {useEffect, useState} from 'react'
import MaterialTable from 'material-table'

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, role: 1 },
    { id: 2, name: "Raj", email: 'raj@gmail.com', status: 1, role: 0 },
    { id: 3, name: "David", email: 'david342@gmail.com', status: 1, role: 3 },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, role: 2 },
]

const empStatus = [
    { id: 0, title:'Deactive' },
    { id: 1, title: 'Active' }
]
const empRole = [
    { id: 0, title:'Associate' },
    { id: 1, title:'Senior Associate' },
    { id: 2, title:'Architect' },
    { id: 3, title:'Manager' },
]

export const ColumnLookupTable = () => {
    const [data, setData] = useState(empList)
    const [status, setStatus] = useState({})
    const [role, setRole] = useState({})

    const columns = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        {
            title: "Status",
            field: 'status',
            lookup: status,
        },
        { title: "Role", field: "role", lookup: role }
    ]

    useEffect(() => {
        const status:any = {}
        const role:any = {}
        empStatus.map(row => status[row.id] = row.title)
        setStatus(status)
        empRole.map(row => role[row.id] = row.title)
        setRole(role)

    }, [])
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
