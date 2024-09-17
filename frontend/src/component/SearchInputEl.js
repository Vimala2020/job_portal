import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'; // Import the useTheme hook

// Validation schema for form
const validationSchema = yup.object({
  search: yup.string('Enter your search query').required('This field cannot be empty'),
});

const SearchInputEl = () => {
  const navigate = useNavigate();
  const theme = useTheme(); // Access the current theme

  const onSubmit = (values, actions) => {
    const { search } = values;
    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      navigate('/');
    }
    actions.resetForm();
  };

  // Formik hook to manage form state
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} style={{ width: '50%' }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <InputBase
          sx={{
            bgcolor: theme.palette.mode === 'light' ? 'white' : theme.palette.background.paper,
            color: theme.palette.text.primary, // Adjust the text color based on the theme
            padding: '10px',
            borderRadius: '4px', // Rounded corners for a modern look
            border: `1px solid ${theme.palette.primary.main}`, // Border based on primary color
            '&:hover': {
              borderColor: theme.palette.primary.dark, // Darker border on hover
            },
            '& .MuiInputBase-input': {
              color: theme.palette.text.primary, // Ensure the input text is readable
            },
          }}
          fullWidth={true}
          id="search"
          name="search"
          placeholder="ex:web developer, front-end developer"
          value={values.search}
          onChange={handleChange}
          error={touched.search && Boolean(errors.search)}
        />

        <Button color="primary" variant="contained" type="submit" disabled={isSubmitting}>
          Search
        </Button>
      </Box>
      <Box component="span" sx={{ color: 'orange' }}>
        {touched.search && errors.search}
      </Box>
    </form>
  );
};

export default SearchInputEl;
