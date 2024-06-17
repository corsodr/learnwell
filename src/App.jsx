import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import VideoModal from './components/VideoModal';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import { getVideos } from './services/api';

function App() {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [videosLoading, setVideosLoading] = useState(true);
  const userId = "corso_rosati4";


  useEffect(() => { 
    async function fetchVideos(userId) {
        try {
            const response = await getVideos(userId);
            setVideos(response.videos);
        } catch (error) {
            console.error(error);
        } finally {
          setVideosLoading(false);
        }
    }
    fetchVideos(userId);
  }, []);

  return (
    <div>
      <Router>
        <NavBar setShowModal={setShowModal} />
        <VideoModal 
          showModal={showModal} 
          setShowModal={setShowModal} 
          userId={userId}
          setVideos={setVideos}
        />
        <Routes>
          <Route path="/" element={<HomePage videos={videos} videosLoading={videosLoading} /> }/>
          <Route path="/video/:videoId" element={<VideoPage userId={userId} videos={videos} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
