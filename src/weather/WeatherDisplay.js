import { Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Current } from './Current';
import Daily from './Daily';
import Hourly from './Hourly';

function WeatherDisplay(props) {
    const [weatherData, setWeatherData] = useState(null);
    const [shownSeries, setShownSeries] = useState('hourly');

    useEffect(() => {
        const weatherUrl = new URL("https://api.openweathermap.org/data/2.5/onecall");
        weatherUrl.searchParams.append("lat", props.lat);
        weatherUrl.searchParams.append("lon", props.long);
        weatherUrl.searchParams.append("exclude", "minutely,alerts");
        weatherUrl.searchParams.append("appid", process.env.REACT_APP_openWeatherKey);
        weatherUrl.searchParams.append("units", 'imperial');

        fetch(weatherUrl)
            .then(response => response.json())
            .then(json => setWeatherData(json));
    }, []);

    return weatherData
        ? (<>
            <Box>
                <Typography variant='h3' id='weather-header'>Today's Weather</Typography>
                <Current current={weatherData.current} />
                <ToggleButtonGroup
                    value={shownSeries}
                    exclusive
                    onChange={(_, newSeries) => setShownSeries(newSeries)}
                    id='weather-series-select'
                >
                    <ToggleButton value='hourly'>Hourly Forecast</ToggleButton>
                    <ToggleButton value='daily'>Daily Forecast</ToggleButton>
                </ToggleButtonGroup>
                {
                    shownSeries == 'hourly'
                        ? <Hourly hourly={weatherData.hourly} className='weather-series' />
                        : <Daily daily={weatherData.daily} className='weather-series' />
                }
            </Box>
        </>)
        : (<Typography>Fetching weather...</Typography>);
}

export { WeatherDisplay };