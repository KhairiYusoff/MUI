import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxBasic() {
  return (
    <Box component="h2" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
