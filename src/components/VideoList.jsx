import VideoPreview from './VideoPreview';

function VideoList({ videoId, videos }) {
    videos = videos.filter((video) => video.id !== videoId);
    
    return (
        <div className="flex flex-col gap-3">
            {videos ? (
                videos.map((video) => (
                    <VideoPreview key={video.id} video={video} />
                ))
            ) : (
                <p>No videos</p>
            )}
        </div>
    );
}

export default VideoList;