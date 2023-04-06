import Video from "@/data/models/dto/Video";
import YouTube from "react-youtube";
import ScrollableSection from "@/components/ScrollableSection";

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
        <ScrollableSection header={title} headerVariant="h6">
            {videos.map(video => ytItem(video))}
        </ScrollableSection>
    );
};

export default VideoSection