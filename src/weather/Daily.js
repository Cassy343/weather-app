import { Stack, Typography, Box } from '@mui/material';

function LabeledWeather(props) {
    const time = new Date(props.data.dt * 1000);

    return (<Box key={props.data.dt.toString()}>
        <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} />
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='row'
        >
            <Typography sx={{ fontSize: 14 }} color="text.primary">
                {Math.round(props.data.temp.max).toString()}°
            </Typography>
            <div>&nbsp;</div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {Math.round(props.data.temp.min).toString()}°
            </Typography>
        </Box>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
            {time.toLocaleDateString([], {month: 'numeric', day: 'numeric'})}
        </Typography>
    </Box>)
}

function Daily(props) {
    const daily = props.daily
        .map(info => <LabeledWeather key={info.dt} data={info} labelTime={false} />);

    return (<Stack direction='row' justifyContent='center' spacing={2}>
        {daily}
    </Stack>);
}

export default Daily;