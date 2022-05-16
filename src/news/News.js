import NewsStory from "./NewsStory";
import { useEffect, useState } from 'react';
import { Stack, Button, Typography } from '@mui/material';

function News() {
    const [newsData, setNewsData] = useState(null);
    const [maxShown, setMaxShown] = useState(5);

    useEffect(() => {
        const nytUrl = new URL('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json');
        nytUrl.searchParams.append('api-key', process.env.REACT_APP_nytKey);

        fetch(nytUrl)
            .then(response => response.json())
            .then(json => setNewsData(json));
    }, []);

    if (!newsData) {
        return (<></>);
    }

    return (<>
        <Typography variant='h3' id='news-header'>Top News</Typography>
        <Stack
            direction='column'
            alignItems='center'
            spacing={2}
            id='news-stack'
        >
            {
                newsData.results
                    .filter((_, index) => index <= maxShown)
                    .map(data => <NewsStory key={data.uri} data={data} />)
            }
            <Button
                disabled={maxShown >= newsData.results.length}
                variant='contained'
                onClick={() => setMaxShown(maxShown + 5)}
            >
                Show More
            </Button>
        </Stack>
    </>)
}

export default News;