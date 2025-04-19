import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function StarRating({ name = "half-rating-read", defaultValue = 4.5, precision = 0.5, readOnly = true }) {
    return (
        <Stack spacing={1}>
            <Rating name={name} defaultValue={defaultValue} precision={precision} readOnly={readOnly} />
        </Stack>
    );
}