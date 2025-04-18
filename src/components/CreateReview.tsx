// Imports for the star rating
// import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// Create review button
import CreateReviewButton from './CreateReviewButton';

function CreateReview() {
    return (
        <form>
            <div>
                <p>Create Review template</p>
                <FormRating />
            </div>
            <CreateReviewButton>Submit</CreateReviewButton>
        </form>
    )
}
export default CreateReview;


export function FormRating() {
    return (
        <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
    );
}