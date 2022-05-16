import './App.css';
import { Weather } from './weather/Weather';
import News from './news/News';
import { Box } from '@mui/material';

function App() {
    return (
        <div className="App">
            <Box id='weather-container'>
                <Weather />
            </Box>
            <News />
        </div>
    );
}

export default App;
