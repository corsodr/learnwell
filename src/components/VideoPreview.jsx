import { useNavigate } from "react-router-dom";
import { extractYoutubeVideoID } from '../utils/youtubeUtils.js';

function VideoPreview({ video }) {
    const navigate = useNavigate();
    const youtubeVideoID = extractYoutubeVideoID(video.video_url);
    const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoID}/0.jpg`;

    return (
        <div className="cursor-pointer" onClick={() => navigate(`/video/${video.id}`)}>
            <img src={thumbnailUrl} alt={video.title} className="w-full h-48 rounded object-cover mb-2" />
            <div>
                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="text-gray-600">{video.user_id}</p>

            </div>
        </div>
    )
}

export default VideoPreview;