import Video from "@/data/models/dto/Video";
import {Box, Stack, Typography} from "@mui/material";
import YouTube from "react-youtube";

interface VideoSectionProps {

    title: string
    videos: Video[]
}

const VideoSection = ({title, videos}: VideoSectionProps) => {

    const ytItem = (video: Video) => <YouTube
        videoId={video.key}
        opts={{
            height: '240',
            width: '426',
        }}
    />

    return (
        <Box>
            <Typography variant="h6" marginBottom={2}>{title}</Typography>
            <Stack direction="row" spacing={2} sx={{overflowX: "auto"}}>
                {videos.map(video => ytItem(video))}
            </Stack>

        </Box>
    );
};

export default VideoSection