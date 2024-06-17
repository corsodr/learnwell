import { extractYoutubeVideoID } from '../utils/youtubeUtils.js';

function VideoPlayer({ video }) {
    const youtubeVideoID = extractYoutubeVideoID(video.video_url);

    return (
        <div>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${youtubeVideoID}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube"
                />
            </div>
            <div className="mt-4 mb-4">
                <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
                <p>{video.description}</p>
            </div>
        </div>
    );
}

export default VideoPlayer;