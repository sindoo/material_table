import React from 'react'
import MaterialTable from "material-table";
import {Link} from "@material-ui/core";


const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: '0809070978' },
    { id: 2, name: "Raj", email: 'raj@gmail.com', phone: '0708890345' },
    { id: 3, name: "David", email: 'david342@gmail.com', phone: '0709899089' },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909' },
]

export const HyperlinkInTable = () => {
    const columns = [
        { title: "ID", field: "id", render:(rowData:any) => <Link href={`https://picsum.photos/1000?random=${rowData.id}`} target="_blank">{rowData.id}</Link> },
        { title: "Name", field: "name", render:(rowData:any) => <Link href={`/user?id=${rowData.id}`} target="_blank">{rowData.name}</Link> },
        { title: "Email", field: "email" },
        { title: "Phone number", field: "phone" },
        /*{ title: "Profile", render:(rowData:any) => <Link href={`/user?id=${rowData.id}`} target="_blank">Profile</Link>}*/
    ]

    return (
        <div style={{margin:'2%', marginTop:'3%'}}>
            <MaterialTable
                title="Employee Data"
                columns={columns}
                data={empList}
            />
        </div>
    )
}
