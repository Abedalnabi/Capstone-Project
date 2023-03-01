import Cbmis from '../components/Cbmis';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Cbmis />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
