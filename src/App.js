import GlobalStyles from "../src/theme/globalStyles";
import themeDefault from "../src/theme/themeDefault";
import { ThemeProvider } from "styled-components";

import { Home } from './pages/Home/Home';

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
