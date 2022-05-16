import { Stack, Typography, Box } from '@mui/material';

function LabeledWeather(props) {
    const time = new Date(props.data.dt * 1000);

    return (<Box>
        <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} />
        <Typography sx={{ fontSize: 14 }} color="text.primary">
            {Math.round(props.data.temp).toString()}°
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
            {time.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})}
        </Typography>
    </Box>)
}

function Hourly(props) {
    const hourly = props.hourly
        .filter((_, index) => index % 2 === 0 && index < 24)
        .map(info => <LabeledWeather key={info.dt} data={info} labelTime={true} />);

    return (<Stack direction='row' justifyContent='center' spacing={2}>
        {hourly}
    </Stack>);
}

export default Hourly;