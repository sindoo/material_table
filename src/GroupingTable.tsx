import React, {useState} from 'react'
import MaterialTable  from 'material-table'
const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', gender: "Male", phone: '0809070978',  city: 'Yamoussoukro' },
    { id: 2, name: "Raj", email: 'raj@gmail.com', gender: "Male", phone: '0708890345',  city: 'Bouake' },
    { id: 3, name: "David", email: 'david342@gmail.com', gender: "Male", phone: '0709899089',  city: 'Bouake' },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', gender: "Female", phone: '0605678909', city: 'Abidjan' },
]



export const GroupingTable = () => {
    const [data, setData] = useState(empList)
    const columns = [
        { title: "ID", field: "id", grouping: false },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Gender", field: "gender", defaultGroupOrder:1 },
        { title: "Phone number", field: "phone" },
        { title: "City", field: "city", defaultGroupOrder:0 }
    ]


    return (
        <MaterialTable
            title="Employee Data"
            columns={columns}
            data={data}
            options={{
                grouping: true
            }}
        />
    )
}
