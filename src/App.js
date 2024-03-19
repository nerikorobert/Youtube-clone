// Importing necessary components and hooks from React, React Router, and Material-UI
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importing BrowserRouter, Routes, and Route for routing
import { Box } from '@mui/material'; // Importing Box component from Material-UI for layout
import React from 'react'; // Importing React for JSX syntax

// Importing custom components for the application
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

// Creating the main App component
const App = () => (
    <BrowserRouter> {/* Using BrowserRouter for defining routing in the application */}
        <Box sx={{ backgroundColor: '#000' }}> {/* Using Box for layout with a black background */}
            <Navbar /> {/* Rendering the Navbar component */}
            <Routes> {/* Using Routes for defining different routes in the application */}
                {/* Defining routes for different components based on the URL path */}
                <Route path="/" element={<Feed />} /> {/* Route for the main feed */}
                <Route path="/video/:id" element={<VideoDetail />} /> {/* Route for video details */}
                <Route path="/channel/:id" element={<ChannelDetail />} /> {/* Route for channel details */}
                <Route path="/search/:searchTerm" element={<SearchFeed />} /> {/* Route for search results */}
            </Routes>
        </Box>
    </BrowserRouter>
);

// Exporting the App component to be used in other parts of the application
export default App;
