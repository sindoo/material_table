import React, {useEffect, useState} from 'react'
import MaterialTable from 'material-table'

export const ExternalApiDataTable = () => {
    const [data, setData] = useState([])

    const columns = [
        { title: "ID", field: "id" },
        { title: "Username", field: "username" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone number", field: "phone" }
    ]

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(result => setData(result))
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
