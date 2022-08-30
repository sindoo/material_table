import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import {ShowHideColomnTable} from "./ShowHideColomnTable";
import {OverridingTableComponent} from "./OverridingTableComponent";

const defaultMaterialTheme = createTheme();
function App() {
  return (
      <ThemeProvider theme={defaultMaterialTheme}>
          <OverridingTableComponent />
      </ThemeProvider>
  );
}

export default App;
