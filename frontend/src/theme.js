import { createTheme } from '@mui/material/styles';
import { blue, lightBlue, grey } from '@mui/material/colors';

// Define the theme based on the selected mode (light or dark)
export const themeColors = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode uses the original palette you provided
            primary: {
              main: blue[700], // Primary color
              contrastText: "#000000", // Text color on primary
            },
            secondary: {
              main: lightBlue[800], // Secondary color
              contrastText: "#000000", // Text color on secondary
              midNightBlue: "#003366", // Custom color you defined
            },
            background: {
              default: "#ffffff", // White background for light mode
              paper: "#f7f7f7", // Light grey background for paper elements
            },
            text: {
              primary: "#000000", // Black text for readability on white
              secondary: grey[700], // Grey for secondary text
            },
          }
        : {
            // Dark mode with black background and blue neon contrast
            primary: {
              main: "#000000", // Neon blue for primary contrast
              contrastText: "#000000", // Black text for contrast
            },
            secondary: {
              main: blue[500], // Blue for secondary elements
              contrastText: "#00FFFF", // Neon blue for contrast
              midNightBlue: "#2196f3", // Slightly darker blue for highlights
            },
            background: {
              default: "#000000", // Pure black background
              paper: "#121212", // Slightly lighter black for elements like cards
            },
            text: {
              primary: "#00FFFF", // Neon blue text for readability on black
              secondary: grey[500], // Grey for secondary text
            },
            action: {
              active: blue[600], // Blue for active buttons and icons
              hover: "#00FFFF", // Neon blue hover effect
              selected: blue[700], // Blue for selected elements
            },
          }),
    },
    typography: {
      fontFamily: 'Roboto, sans-serif', // Clean font style
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      button: {
        fontWeight: 500,
        textTransform: 'none',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            ...(mode === 'light'
              ? {
                  backgroundColor: blue[500], // Light blue AppBar in light mode
                  color: "#000000", // White text
                }
              : {
                  backgroundColor: "#000000", // Black AppBar in dark mode
                  color: "#00FFFF", // Neon blue text in dark mode
                }),
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px', // Smooth button corners
            textTransform: 'none', // No uppercase text
          },
          contained: {
            ...(mode === 'light'
              ? {
                  backgroundColor: blue[500], // Blue button in light mode
                  color: "#ffffff", // White text
                  '&:hover': {
                    backgroundColor: blue[600], // Slightly darker on hover
                  },
                }
              : {
                  backgroundColor: "#00FFFF", // Neon blue button in dark mode
                  color: "#000000", // Black text on button
                  '&:hover': {
                    backgroundColor: "#00CED1", // Darker neon blue on hover
                  },
                }),
          },
        },
      },
    },
  });
};
