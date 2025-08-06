import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, Settings, List, X } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
}

const mockLessons: Lesson[] = [
  {
    id: '1',
    title: 'Introduction to Python',
    duration: '15:30',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    completed: true
  },
  {
    id: '2',
    title: 'Variables and Data Types',
    duration: '22:45',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    completed: false
  },
  {
    id: '3',
    title: 'Control Structures',
    duration: '18:20',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    completed: false
  }
];

const CoursePlayer: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const currentLesson = mockLessons.find(lesson => lesson.id === lessonId) || mockLessons[0];
  const currentLessonIndex = mockLessons.findIndex(lesson => lesson.id === currentLesson.id);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const goToLesson = (lesson: Lesson) => {
    navigate(`/course/${courseId}/lesson/${lesson.id}`);
  };

  const nextLesson = () => {
    if (currentLessonIndex < mockLessons.length - 1) {
      goToLesson(mockLessons[currentLessonIndex + 1]);
    }
  };

  const previousLesson = () => {
    if (currentLessonIndex > 0) {
      goToLesson(mockLessons[currentLessonIndex - 1]);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const changePlaybackSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackSpeed(speed);
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Video Player */}
      <div className={`flex-1 relative ${showPlaylist ? 'mr-80' : ''}`}>
        <div className="relative h-screen">
          <video
            ref={videoRef}
            src={currentLesson.videoUrl}
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={togglePlay}
          />

          {/* Video Controls */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-white text-sm mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={previousLesson}
                  disabled={currentLessonIndex === 0}
                  className="text-white hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SkipBack className="w-6 h-6" />
                </button>
                
                <button
                  onClick={togglePlay}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                
                <button
                  onClick={nextLesson}
                  disabled={currentLessonIndex === mockLessons.length - 1}
                  className="text-white hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
                
                <button onClick={toggleMute} className="text-white hover:text-purple-400">
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <button className="text-white hover:text-purple-400 flex items-center">
                    <Settings className="w-6 h-6 mr-1" />
                    <span className="text-sm">{playbackSpeed}x</span>
                  </button>
                  <div className="absolute bottom-full right-0 mb-2 bg-gray-800 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map(speed => (
                      <button
                        key={speed}
                        onClick={() => changePlaybackSpeed(speed)}
                        className={`block w-full text-left px-3 py-1 text-white hover:bg-gray-700 rounded ${
                          playbackSpeed === speed ? 'bg-purple-600' : ''
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setShowPlaylist(!showPlaylist)}
                  className="text-white hover:text-purple-400"
                >
                  <List className="w-6 h-6" />
                </button>
                
                <button onClick={toggleFullscreen} className="text-white hover:text-purple-400">
                  <Maximize className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Course Title Overlay */}
          <div className="absolute top-6 left-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Complete Python Developer Bootcamp</h1>
            <h2 className="text-lg opacity-90">{currentLesson.title}</h2>
          </div>

          {/* Close Button */}
          <button
            onClick={() => navigate(`/course/${courseId}`)}
            className="absolute top-6 right-6 text-white hover:text-purple-400 p-2 rounded-full bg-black/50"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Playlist Sidebar */}
      {showPlaylist && (
        <div className="w-80 bg-gray-900 text-white overflow-y-auto">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold mb-2">Course Content</h3>
            <p className="text-gray-400">{mockLessons.length} lessons</p>
          </div>
          
          <div className="p-4">
            {mockLessons.map((lesson, index) => (
              <button
                key={lesson.id}
                onClick={() => goToLesson(lesson)}
                className={`w-full text-left p-4 rounded-lg mb-2 transition-colors ${
                  lesson.id === currentLesson.id
                    ? 'bg-purple-600'
                    : 'hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Lesson {index + 1}</span>
                  <span className="text-sm text-gray-400">{lesson.duration}</span>
                </div>
                <h4 className="font-medium">{lesson.title}</h4>
                {lesson.completed && (
                  <div className="mt-2">
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                      Completed
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePlayer;