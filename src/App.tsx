import { ThemeProvider } from "@emotion/react";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { Suspense } from "react";
import { theme } from "./constant/theme";
import Provider from "./context/Provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import mainRoutes from "./routes";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
      </ThemeProvider>

      <Provider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading....</div>}>
            <Routes>
              {mainRoutes.map(({ name, path, components }) => (
                <Route key={name} path={path} element={components} />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;
