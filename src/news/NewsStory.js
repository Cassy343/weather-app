import { Card, Typography, Box } from "@mui/material";

function NewsStory(props) {
    let image = props.data.media.length > 0 ? props.data.media[0]['media-metadata'][1].url : null;

    return (<a href={props.data.url} className='no-link-format' target='_blank' rel='noreferrer'>
        <Card className='news-story'>
            <Box
                display='flex'
            >
                <Box
                    textAlign='left'
                    className='news-text'
                >
                    <Typography variant='h5'>{props.data.title}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        {props.data.abstract}
                    </Typography>
                </Box>
                {image ? <img src={image} alt='Thumbnail' /> : <></>}
            </Box>
        </Card>
    </a>)
}

export default NewsStory;