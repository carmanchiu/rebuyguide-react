// import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CreateReviewButton() {
    return (
        <Stack direction="row">
            <Button variant="contained" href="/create-review">
                Create Review
            </Button>
        </Stack>
    );
}
