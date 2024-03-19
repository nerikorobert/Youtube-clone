// Importing necessary components and styles from external libraries and files
import { Stack } from '@mui/material'; // Importing a layout component from Material-UI
import { Link } from 'react-router-dom'; // Importing a component for creating links in a React app

import { logo } from '../utils/constants'; // Importing a logo image from a constants file
import SearchBar from './SearchBar'; // Importing a custom SearchBar component

// Creating a functional component called Navbar
const Navbar = () => (
    // Using the Stack component to layout elements horizontally
    <Stack
        direction="row" // Arranging child elements horizontally
        alignItems="center" // Aligning child elements vertically in the center
        p={2} // Adding padding of 2 units to the Stack component
        sx={{ // Using the sx prop to add custom styles
            position: 'sticky', // Making the Navbar sticky so it stays at the top of the screen
            background: '#000', // Setting the background color to black
            top: 0, // Placing the Navbar at the top of the viewport
            justifyContent: 'space-between' // Distributing child elements with space in between
        }}>

        {/* Creating a link to the home page with a logo */}
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
            {/* Displaying the logo image */}
            <img src={logo} alt="logo" height={45} />
        </Link>

        {/* Rendering the SearchBar component */}
        <SearchBar />
    </Stack>
)

// Exporting the Navbar component to be used in other parts of the application
export default Navbar;
