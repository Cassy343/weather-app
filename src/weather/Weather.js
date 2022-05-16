import { useState } from "react";
import { WeatherDisplay } from "./WeatherDisplay";
import { LocationFinder } from "../LocationFinder";
import { Box } from '@mui/material';

function Weather() {
    const [locationData, setLocationData] = useState({
        found: false,
        lat: null,
        long: null
    });

    return (<>
        <Box>
            {locationData.found
                ? <WeatherDisplay
                    lat={locationData.lat}
                    long={locationData.long}
                />
                : <LocationFinder
                    setLatLong={(lat, long) => setLocationData({found: true, lat: lat, long: long})}
                />
            }
        </Box>
    </>)
}

export { Weather };