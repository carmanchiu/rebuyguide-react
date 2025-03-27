// import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
    return (
        <Stack direction="row">
            <Button variant="contained" href="/">
                Create Review
            </Button>
        </Stack>
    );
}
