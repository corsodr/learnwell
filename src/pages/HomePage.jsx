import VideoPreview from '../components/VideoPreview';

function HomePage({ videos, videosLoading}) {

    if (videosLoading) {
        return (
            <div className="flex justify-center items-center mt-20">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }
    return (
        <div className="container mx-auto w-[1200px] mt-4">
            <div className="grid grid-cols-3 gap-8">
                {videos.length ? (
                    videos.map((video) => (
                        <VideoPreview key={video.id} video={video} />
                    ))
                ) : (
                    <p>No videos yet.</p>
                )}
            </div>
        </div>
    );
}

export default HomePage;