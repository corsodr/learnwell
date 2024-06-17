import { useState } from 'react';
import { createVideo, getVideos } from '../services/api';

function VideoModal({ showModal, setShowModal, userId, setVideos }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const newVideo = {
      user_id: userId,
      title,
      description,
      video_url: videoUrl,
    };
    try {
      await createVideo(newVideo);
      const response = await getVideos(userId);
      setVideos(response.videos);
      setTitle('');
      setDescription('');
      setVideoUrl('');
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center mb-2">Add video</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-lg font-medium mb-1">
              Title
            </label>
            <input
              required
              type="text"
              id="title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-2"
              rows={3}
            ></textarea>
          </div>
          <div>
            <label htmlFor="videoUrl" className="block text-lg font-medium mb-1">
              Video URL
            </label>
            <input
              required
              type="url"
              id="videoUrl"
              placeholder="Enter video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-[#47B99B] text-white font-medium rounded-lg py-2 px-6"
            >
              Add video
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="bg-gray-200 text-gray-700 font-medium rounded-lg py-2 px-6"
            >
                Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VideoModal;