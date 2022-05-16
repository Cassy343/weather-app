import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';

function Current(props) {
    return (<>
        <Stack direction='row' justifyContent='center'>
            <img src={`http://openweathermap.org/img/wn/${props.current.weather[0].icon}@2x.png`} />
            <Box
                sx={{ display: 'flex' }}
                alignItems='center'
            >
                <Typography variant='h3'>{Math.round(props.current.temp).toString()}°F</Typography>
            </Box>
            <Box
                sx={{display: 'flex'}}
                alignItems='flex-start'
                flexDirection='column'
                justifyContent='center'
                id="current-weather-stats"
            >
                <Typography sx={{ fontSize: 11 }} color="text.secondary">
                Feels like {Math.round(props.current.feels_like).toString()}°F
                </Typography>
                <Typography sx={{ fontSize: 11 }} color="text.secondary">
                Humidity: {props.current.humidity}%
                </Typography>
                <Typography sx={{ fontSize: 11 }} color="text.secondary">
                Wind: {Math.round(props.current.wind_speed)} mph
                </Typography>
            </Box>
        </Stack>
    </>)
}

export { Current };