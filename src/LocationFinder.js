import { useRef } from "react";
import { Typography, Stack, TextField, Box } from '@mui/material';
import Button from '@mui/material/Button';

function fetchLatLong(city, state, country, setLatLong) {
    const url = new URL("http://api.openweathermap.org/geo/1.0/direct");
    url.searchParams.append("q", city + ',' + state + ',' + country);
    url.searchParams.append("appid", process.env.REACT_APP_openWeatherKey);

    fetch(url)
        .then(response => response.json())
        .then(json => setLatLong(json[0].lat, json[0].lon));
}

function LocationFinder(props) {
    const cityNameRef = useRef();
    const stateCodeRef = useRef();
    const countryCodeRef = useRef();

    return (<>
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Stack
                direction='column'
                alignItems='center'
                spacing={1}
            >
                <Box>
                    <Typography
                        variant="h5"
                        id='location-finder-instructions'
                    >
                        Enter your location below to see the weather!
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="City"
                        inputRef={cityNameRef}
                    />
                    <TextField
                        variant="outlined"
                        label="State"
                        inputRef={stateCodeRef}
                    />
                    <TextField
                        variant="outlined"
                        label="Country"
                        inputRef={countryCodeRef}
                    />
                </Box>
                <Button
                    variant="contained"
                    sx={{ maxWidth: 250 }}
                    onClick={() => fetchLatLong(
                        cityNameRef.current.value,
                        stateCodeRef.current.value,
                        countryCodeRef.current.value,
                        props.setLatLong
                    )}
                >Submit</Button>
            </Stack>
        </Box>
    </>);
}

export { LocationFinder };
