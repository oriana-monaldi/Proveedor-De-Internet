import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Boton({ nombre }) {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="contained">{nombre}</Button>
            </Stack>
        </div>
    );
}

export default Boton;
