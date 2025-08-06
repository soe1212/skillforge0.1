import { useState, useMemo } from 'react';

export interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  originalPrice: number;
  bestseller: boolean;
  category: string;
  description?: string;
  level?: string;
}

// Mock course data - in a real app, this would come from an API
const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Complete Python Developer Bootcamp',
    instructor: 'Dr. Sarah Johnson',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    students: 12543,
    duration: '42 hours',
    price: 2999,
    originalPrice: 5999,
    bestseller: true,
    category: 'Development',
    description: 'Master Python programming from basics to advanced concepts',
    level: 'Beginner to Advanced'
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass',
    instructor: 'Mike Chen',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    students: 8742,
    duration: '28 hours',
    price: 2499,
    originalPrice: 4999,
    bestseller: true,
    category: 'Design',
    description: 'Learn modern UI/UX design principles and tools',
    level: 'Beginner to Intermediate'
  },
  {
    id: 3,
    title: 'Digital Marketing Strategy',
    instructor: 'Emma Wilson',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    students: 6234,
    duration: '35 hours',
    price: 1999,
    originalPrice: 3999,
    bestseller: false,
    category: 'Marketing',
    description: 'Build effective digital marketing campaigns',
    level: 'Intermediate'
  },
  {
    id: 4,
    title: 'Machine Learning Fundamentals',
    instructor: 'Prof. David Kumar',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    students: 4521,
    duration: '56 hours',
    price: 3499,
    originalPrice: 6999,
    bestseller: true,
    category: 'AI & ML',
    description: 'Introduction to machine learning algorithms and applications',
    level: 'Intermediate to Advanced'
  },
  {
    id: 5,
    title: 'React.js Complete Guide',
    instructor: 'Alex Rodriguez',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    students: 15234,
    duration: '38 hours',
    price: 2799,
    originalPrice: 5599,
    bestseller: true,
    category: 'Development',
    description: 'Build modern web applications with React.js',
    level: 'Intermediate'
  },
  {
    id: 6,
    title: 'Photography Masterclass',
    instructor: 'Lisa Thompson',
    image: 'https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    students: 3421,
    duration: '24 hours',
    price: 1799,
    originalPrice: 3599,
    bestseller: false,
    category: 'Photography',
    description: 'Master the art of photography from basics to professional techniques',
    level: 'Beginner to Advanced'
  },
  {
    id: 7,
    title: 'Business Analytics with Excel',
    instructor: 'Robert Kim',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    students: 7832,
    duration: '32 hours',
    price: 1599,
    originalPrice: 3199,
    bestseller: false,
    category: 'Business',
    description: 'Analyze business data and create powerful reports with Excel',
    level: 'Beginner to Intermediate'
  },
  {
    id: 8,
    title: 'Cybersecurity Essentials',
    instructor: 'Jennifer Davis',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    students: 5643,
    duration: '45 hours',
    price: 3299,
    originalPrice: 6599,
    bestseller: true,
    category: 'Cybersecurity',
    description: 'Learn essential cybersecurity concepts and practices',
    level: 'Intermediate to Advanced'
  }
];

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<'relevance' | 'price-low' | 'price-high' | 'rating' | 'popularity'>('relevance');

  const filteredCourses = useMemo(() => {
    let filtered = mockCourses;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.description?.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(course => 
      course.price >= priceRange[0] && course.price <= priceRange[1]
    );

    // Sort results
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
        filtered.sort((a, b) => b.students - a.students);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(mockCourses.map(course => course.category)));
    return cats.sort();
  }, []);

  return {
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
    totalResults: filteredCourses.length
  };
};