import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePageData = () => {
  const [headlines, setHeadlines] = useState([]);
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=dd659ea07d714425aaf563eb0e086020');
        const headlinesData = response.data.articles.slice(0, 5).map(article => article.title); // Limiting to 5 headlines
        console.log('Fetched headlines:', headlinesData);
        setHeadlines(headlinesData);
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    };

    fetchHeadlines();

    const intervalId = setInterval(() => {
      setCurrentHeadlineIndex(prevIndex => (prevIndex + 1) % 5); // Cycling through 5 headlines
      console.log('Current headline index:', currentHeadlineIndex);
    }, 4000); // Change the interval duration as needed (e.g., 5000 milliseconds for 5 seconds)

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div className="ticker">
      {headlines.length > 0 && (
        <p className="ticker-text">
          {headlines[currentHeadlineIndex]}
        </p>
      )}
    </div>
  );
};

export default HomePageData ;