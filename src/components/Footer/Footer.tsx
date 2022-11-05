import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from '../../theme';

export const Footer: React.FC = () => {
  const classes: any = useStyles();
  const year: number = new Date().getFullYear();

  return (
    <Box className={classes.footer}>
      <Typography className={classes.copyright}>
        Copyright © {year} Justin Thoreson
      </Typography>
    </Box>
  );
}
