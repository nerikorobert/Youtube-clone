import axios from 'axios'; // Importing axios library for making HTTP requests

// Base URL for the YouTube API
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// Options for the HTTP request
const options = {
    params: {
        maxResults: '50' // Maximum number of results to fetch
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // RapidAPI key for authentication
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com' // RapidAPI host for the YouTube API
    }
};

// Function to fetch data from the YouTube API
export const fetchFromAPI = async (url) => {
    // Making a GET request to the specified URL with the provided options
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data); // Logging the fetched data to the console
    return data; // Returning the fetched data
};
