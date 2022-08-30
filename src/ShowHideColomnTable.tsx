import React, {useState} from "react";
import MTable from "material-table";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: '0809070978',  year: 2020 },
    { id: 2, name: "Raj", email: 'raj@gmail.com', phone: '0708890345',  year: 2021 },
    { id: 3, name: "David", email: 'david342@gmail.com', phone: '0709899089',  year: 2022 },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2022 },
    { id: 5, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2020 },
    { id: 6, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2022 },
]

export const ShowHideColomnTable = () => {
    const [data, setData] = useState(empList)

    const columns = [
        { title: "ID", field: "id", hidden: true, hiddenByColumnsButton: true },
        { title: "Name", field: "name", },
        { title: "Email", field: "email" },
        { title: "Phone number", field: "phone" },
        { title: "Age", field: "year" }
    ]

    return (
        <div style={{margin:'2%', marginTop:'3%'}}>
            <h2> Show / Hide columns of Material Table</h2><br />
            <MTable
                title="Employee Data"
                columns={columns}
                data={data}
                options={{
                    selection:true,
                    columnsButton:true,
                }}
            />
        </div>
    )
}
