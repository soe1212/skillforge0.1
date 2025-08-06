import React, { useState } from 'react';
import { Search, ShoppingCart, Globe, ChevronDown, Menu, X, User, LogOut, Bell, Heart, BookOpen, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import SearchResults from './SearchResults';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import LoginModal from './Auth/LoginModal';
import SignupModal from './Auth/SignupModal';
import CartModal from './Cart/CartModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredCourses,
    categories,
    totalResults
  } = useSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLogout = () => {
    logout();
    setIsUserDropdownOpen(false);
  };

  const switchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const notifications = [
    { id: 1, title: 'New course available', message: 'Advanced React Patterns is now live!', time: '2h ago', unread: true },
    { id: 2, title: 'Course completed', message: 'Congratulations on completing Python Bootcamp!', time: '1d ago', unread: false },
    { id: 3, title: 'Assignment due', message: 'Your project submission is due tomorrow', time: '2d ago', unread: true }
  ];

  const notifications = [
    { id: 1, title: 'New course available', message: 'Advanced React Patterns is now live!', time: '2h ago', unread: true },
    { id: 2, title: 'Course completed', message: 'Congratulations on completing Python Bootcamp!', time: '1d ago', unread: false },
    { id: 3, title: 'Assignment due', message: 'Your project submission is due tomorrow', time: '2d ago', unread: true }
  ];

  const switchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/20 shadow-sm">
        {/* Top announcement bar */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm">
          <span className="font-medium">🎉 New Year Sale: Get 50% off on all courses! Use code: NEWYEAR2025</span>
          <button className="ml-2 text-purple-200 hover:text-white">×</button>
        </div>
        
        {/* Top announcement bar */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm">
          <span className="font-medium">🎉 New Year Sale: Get 50% off on all courses! Use code: NEWYEAR2025</span>
          <button className="ml-2 text-purple-200 hover:text-white">×</button>
        </div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                onClick={() => navigate('/')}
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                Skill Forge
              </button>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="What do you want to learn?"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
              <BookOpen className="w-4 h-4 mr-1" />
              My Learning
            </a>
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
              >
                Categories
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Development
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Business
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Design
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Marketing
                  </a>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <a href="#" className="block px-4 py-2 text-purple-600 hover:bg-purple-50 font-medium">
                      View All Categories
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
              <Zap className="w-4 h-4 mr-1" />
              Teach on Skill Forge
            </a>
            
            {user ? (
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      2
                    </span>
                  </button>
                  {showNotifications && (
                    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border py-2 max-h-96 overflow-y-auto">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                      </div>
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`px-4 py-3 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}>
                          <div className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${notification.unread ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                              <p className="text-gray-600 text-sm">{notification.message}</p>
                              <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="px-4 py-2 border-t border-gray-200">
                        <button className="text-purple-600 hover:underline text-sm font-medium">
                          View all notifications
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => setShowWishlist(!showWishlist)}
                  className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* User Menu */}
                <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <img
                    src={user.avatar || 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100'}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-purple-200"
                  />
                  <span className="font-medium">{user.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isUserDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        navigate('/dashboard');
                        setIsUserDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 text-left"
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Dashboard
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 text-left">
                      <BookOpen className="w-4 h-4 mr-2" />
                      My Learning
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 text-left">
                      <Heart className="w-4 h-4 mr-2" />
                      Wishlist
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 text-left">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Messages
                    </button>
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 text-left">
                        <Globe className="w-4 h-4 mr-2" />
                        Language: English
                      </button>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 text-left"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                >
                  Sign Up
                </button>
              </>
            )}
            
            <button
              onClick={() => setShowCartModal(true)}
              className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  placeholder="What do you want to learn?"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </form>
              <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                <BookOpen className="w-4 h-4 mr-2" />
                My Learning
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</a>
              <a href="#" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                <Zap className="w-4 h-4 mr-2" />
                Teach on Skill Forge
              </a>
              {user ? (
                <div className="space-y-2">
                  <button className="flex items-center w-full text-left text-gray-700 hover:text-purple-600 transition-colors">
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications (2)
                  </button>
                  <button className="flex items-center w-full text-left text-gray-700 hover:text-purple-600 transition-colors">
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist (3)
                  </button>
                  <button
                    onClick={() => {
                      navigate('/dashboard');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full text-left text-red-600 hover:text-red-700 transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setShowSignupModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      </header>

      {/* Search Results Modal */}
      {showSearchResults && (
        <SearchResults
          courses={filteredCourses}
          searchQuery={searchQuery}
          totalResults={totalResults}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          sortBy={sortBy}
          setSortBy={setSortBy}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onClose={() => setShowSearchResults(false)}
        />
      )}

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={switchToSignup}
      />
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={switchToLogin}
      />

      {/* Cart Modal */}
      <CartModal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
      />
    </>
  );
};

export default Header;