import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React
import { Box, Stack, Typography } from '@mui/material'; // Importing Box, Stack, and Typography components from Material-UI
import { fetchFromAPI } from '../utils/fetchFromAPI'; // Importing fetchFromAPI function from utils folder
import { Sidebar, Videos } from './'; // Importing Sidebar and Videos components from current directory

// Feed component
const Feed = () => {
  // State variables for selectedCategory and videos
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  // useEffect hook to fetch data from API when selectedCategory changes
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  // Rendering the Feed component
  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column", md: "row" // Set flex direction to column on small screens, and row on medium screens
        }
      }}>

      {/* Sidebar component */}
      <Box sx={{
        height: {
          sx: 'auto', md: '92vh' // Set height to auto on small screens, and 92vh on medium screens
        },
        borderRight: '1px solid #3d3d3d', // Add right border
        px: { sx: 0, md: 2 } // Set padding to 0 on small screens, and 2 on medium screens
      }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> {/* Render Sidebar component */}
        <Typography
          variant="body2"
          sx={{
            mt: 1.5,
            color: '#fff'
          }}
        >
          Copyright 2024 Neriko Media
        </Typography>
      </Box>

      {/* Videos section */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>
        <Videos videos={videos} /> {/* Render Videos component */}
      </Box>

    </Stack>
  );
};

export default Feed; // Export Feed component
