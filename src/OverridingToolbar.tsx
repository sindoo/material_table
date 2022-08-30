import React, {useEffect, useState} from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { createTheme } from '@material-ui/core/styles'
import {ThemeProvider} from "@mui/styles";
import {FormControlLabel, Switch} from "@mui/material";
import {Checkbox, MenuItem, Select} from "@material-ui/core";

const empList = [
    { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: '0809070978',  year: 2020 },
    { id: 2, name: "Raj", email: 'raj@gmail.com', phone: '0708890345',  year: 2021 },
    { id: 3, name: "David", email: 'david342@gmail.com', phone: '0709899089',  year: 2022 },
    { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2022 },
    { id: 5, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2020 },
    { id: 6, name: "Vikas", email: 'vikas75@gmail.com', phone: '0605678909', year: 2022 },
]
export const OverridingToolbar = () => {
    const [filteredData, setFilteredData] = useState(empList)
    const [filter, setFilter] = useState(true)
    const [year, setYear] = useState(0)
    const [darkMode, setDarkMode] = useState(() => {
        const mode = localStorage.getItem('_darkMode')
        return mode === "true" || false
    })
    const columns = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone number", field: "phone" },
        { title: "Age", field: "year" }
    ]
    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        },
    })
    const handleDarkModeChange = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('_darkMode', ""+!darkMode)
    }

    const handleChange = () => {
        setFilter(!filter)
    }
    useEffect(() => {
        setFilteredData(year === 0 ? empList : filteredData.filter(data => data.year === year))
    }, [year])
    const age = 10
    return (
        <div style={{margin:'2%', marginTop:'3%'}}>
            <h2>Filtering in Material Table</h2><br />
            <br /><br />
            <ThemeProvider theme={theme}>
                <MaterialTable
                    title="Employee Data"
                    columns={columns}
                    data={filteredData}
                    components={{
                        Toolbar:(props) => <MTableToolbar {...props} />
                    }}
                    actions={[
                        {
                            icon:() => <Switch color="primary" onChange={handleDarkModeChange} checked={darkMode} />,
                            tooltip:'Dark Mode',
                            isFreeAction:true,
                            onClick: () => {},
                        },
                        {
                            icon:() => <Checkbox
                                checked={filter}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />,
                            tooltip:'Add button',
                            isFreeAction:true,
                            onClick: () => {},
                        },
                        {
                            icon:() => <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={year}
                                            style={{width:100}}
                                            onChange={(e:any) => setYear(e.target.value)}
                                        >
                                            <MenuItem value={0} selected>All</MenuItem>
                                            <MenuItem value={2020} selected>2020</MenuItem>
                                            <MenuItem value={2021}>2021</MenuItem>
                                            <MenuItem value={2022}>2022</MenuItem>
                                        </Select>,
                            tooltip:'Filter by year',
                            isFreeAction:true,
                            onClick: () => {},
                        },
                    ]}
                    options={{
                        filtering: filter
                    }}
                />
            </ThemeProvider>

        </div>
    )
}
