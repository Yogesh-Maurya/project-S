// src/pages/CreatePlaylistPage.jsx
import { useState } from 'react';

const CreatePlaylistPage = () => {
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [videos, setVideos] = useState([
    { link: '', title: '', description: '' }
  ]);

  const addVideo = () => {
    setVideos([...videos, { link: '', title: '', description: '' }]);
  };

  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...videos];
    updatedVideos[index][field] = value;
    setVideos(updatedVideos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting playlist:', { playlistTitle, videos });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Create Playlist</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Playlist Title</label>
            <input
              type="text"
              value={playlistTitle}
              onChange={(e) => setPlaylistTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Enter playlist title"
              required
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-800">Videos</h3>
            {videos.map((video, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg bg-gray-50 space-y-4">
                <div className="font-medium text-gray-700 mb-4">Video {index + 1}</div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video Link</label>
                  <input
                    type="url"
                    value={video.link}
                    onChange={(e) => handleVideoChange(index, 'link', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Enter video URL"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video Title</label>
                  <input
                    type="text"
                    value={video.title}
                    onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Enter video title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={video.description}
                    onChange={(e) => handleVideoChange(index, 'description', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-24 resize-none"
                    placeholder="Enter video description"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={addVideo}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Add Another Video
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Upload Playlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylistPage;