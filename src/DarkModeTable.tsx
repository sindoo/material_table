import React, {useState} from "react";
import MaterialTable from "material-table";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'
import {ThemeProvider} from "@mui/styles";
import {FormControlLabel, Switch} from "@mui/material";

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: '0809070978',  age: 23 },
    { id: 2, name: "Raj", email: 'raj@gmail.com', phone: '0708890345',  age: 17 },
    { id: 3, name: "David", email: 'david342@gmail.com', phone: '0709899089',  age: 34 },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', age: 20 },
    { id: 5, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', age: 20 },
    { id: 6, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', age: 20 },
]
export const DarkModeTable = () => {
    const [data, setData] = useState(empList)
    const [preferDarkMode, setPreferDarkMode] = useState(() => {
        const mode = localStorage.getItem('_tableDarkMode')
        return mode === "true" || false
    })
    const columns = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone number", field: "phone" },
        { title: "Age", field: "age" }
    ]
    const theme = createTheme({
        palette: {
            type: preferDarkMode ? 'dark' : 'light',
        },
    })
    const handleDarkModeChange = () => {
        setPreferDarkMode(!preferDarkMode)
        localStorage.setItem('_tableDarkMode', ""+!preferDarkMode)
    }
    return (
        <div style={{margin:'2%', marginTop:'3%'}}>
            <h2>Apply Dark mode to Material Table </h2><br />
            <FormControlLabel
                value="top"
                onChange={handleDarkModeChange}
                control={<Switch color="primary" checked={preferDarkMode} />}
                label="Dark Mode"
                labelPlacement="top"
            />
            <ThemeProvider theme={theme}>
                <MaterialTable
                    title="Employee Data"
                    columns={columns}
                    data={data}
                />
            </ThemeProvider>

        </div>
    )
}
