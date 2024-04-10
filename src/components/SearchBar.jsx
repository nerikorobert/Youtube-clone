// Importing necessary hooks and components from React and Material-UI
import { useState } from 'react'; // Importing the useState hook for managing state
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook for navigation
import { Paper, IconButton } from '@mui/material'; // Importing Paper and IconButton components from Material-UI
import { Search } from '@mui/icons-material'; // Importing the Search icon from Material-UI icons

// Creating a functional component called SearchBar
const SearchBar = () => {
    // Declaring state variables using the useState hook
    const [searchTerm, setSearchTerm] = useState(''); // State variable to store the search term
    const navigate = useNavigate(); // Using the useNavigate hook to navigate to different routes

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission behavior

        // Checking if the search term is not empty
        if (searchTerm) {
            // Navigating to the search results page with the search term as a route parameter
            navigate(`/search/${searchTerm}`);

            // Clearing the search term after navigation
            setSearchTerm('');
        }
    }

    // Rendering the search bar component
    return (
        <Paper
            component="form" // Using Paper as a form container
            onSubmit={handleSubmit} // Calling the handleSubmit function on form submission
            sx={{ // Adding custom styles using the sx prop
                borderRadius: 20, // Setting border radius to 20px
                border: '1px solid #e3e3e3', // Setting border style
                pl: 2, // Adding left padding of 2 units
                boxShadow: 'none', // Removing box shadow
                mr: { sm: 5 } // Adding right margin for responsiveness
            }}
        >
            <input
                className="search-bar" // Adding a class name for styling
                placeholder="search..." // Placeholder text for the input field
                value={searchTerm} // Binding the input value to the searchTerm state variable
                onChange={(e) => setSearchTerm(e.target.value)} // Updating the searchTerm state variable on input change
            />

            <IconButton type="submit" sx={{ p: '10px', colour: 'red' }}>
                <Search />  
            </IconButton>
        </Paper>
    )
}

// Exporting the SearchBar component to be used in other parts of the application
export default SearchBar;
