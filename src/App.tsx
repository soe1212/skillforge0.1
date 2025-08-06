import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import HomePage from './pages/HomePage';
import CourseDetail from './components/Course/CourseDetail';
import CoursePlayer from './components/Course/CoursePlayer';
import UserDashboard from './components/Dashboard/UserDashboard';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/course/:courseId/lesson/:lessonId" element={<CoursePlayer />} />
              <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;