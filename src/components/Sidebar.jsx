import { Stack } from '@mui/material'; // Importing Stack component from Material-UI
import { categories } from '../utils/constants'; // Importing categories from constants file

// Sidebar component takes selectedCategory and setSelectedCategory as props
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        direction='row' // Arrange items horizontally
        sx={{ // Custom styles for the Stack component
            overflowY: "auto", // Enable vertical scrolling
            height: { sx: 'auto', md: '95%' }, // Set height for different screen sizes
            flexDirection: { md: 'column' }, // Change direction to column on medium-sized screens
        }}
    >
        {/* Mapping through categories to render buttons */}
        {categories.map((category) => (
            <button
                className="category-btn" // CSS class for styling
                onClick={() => setSelectedCategory(category.name)} // Set selected category on click
                style={{
                    background: category.name === selectedCategory && '#FC1503', // Change background color if selected
                    color: 'white' // Set text color to white
                }}
                key={category.name} // Unique key for each category button
            >
                {/* Render category icon */}
                <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>
                    {category.icon}
                </span>
                {/* Render category name */}
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
)

export default Sidebar; // Export Sidebar component
