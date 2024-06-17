import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from "../components/VideoPlayer";
import VideoList from '../components/VideoList';
import CommentSection from '../components/CommentSection';
import CommentForm from '../components/CommentForm';
import { getVideo, getComments } from "../services/api";

function VideoPage({ userId, videos }) {
    const { videoId } = useParams();
    const [video, setVideo] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const videoResponse = await getVideo(videoId);
                const commentsResponse = await getComments(videoId);
                setVideo(videoResponse.video);
                setComments(commentsResponse.comments);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchData();
    }, [videoId]);


    if (loading) {
        return (
            <div className="flex justify-center items-center mt-20">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto w-[1200px] mt-4">
            <div className="flex gap-8">
                <div className="w-2/3">
                    <VideoPlayer video={video} />
                    <hr />
                    <CommentForm userId={userId} videoId={videoId} setComments={setComments} />
                    <CommentSection comments={comments}/>
                </div>
                <div className="w-1/3">
                    <VideoList videoId={videoId} videos={videos} />
                </div>
            </div>
    </div>
    );
}

export default VideoPage;