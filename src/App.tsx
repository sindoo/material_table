import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { TableTest } from './TableTest'

const defaultMaterialTheme = createTheme();
function App() {
  return (
    <div style={{margin:'30px'}}>
        <ThemeProvider theme={defaultMaterialTheme}>
            <TableTest />
        </ThemeProvider>
    </div>
  );
}

export default App;
