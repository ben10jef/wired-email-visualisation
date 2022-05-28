import * as React from 'react';
import {StyledEngineProvider, ThemeProvider as MUIThemeProvider, useTheme} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import Visualisation from "./theme/Visualisation";
import Header from "./theme/header";

const App = () => {
        const theme = useTheme();

        return (
            <StyledEngineProvider injectFirst>
                <MUIThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Header/>
                    <Visualisation/>
                </MUIThemeProvider>
            </StyledEngineProvider>
        );
    }
;
export default App;
