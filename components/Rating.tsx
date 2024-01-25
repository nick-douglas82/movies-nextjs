'use client'

import { Box, CircularProgress, Typography } from '@mui/material'

interface RatingProps {
  value: number
  className?: string
}

export const Rating: React.FC<RatingProps> = ({ value, className }) => {
  return (
    <span className={className}>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
          width: 'max-content',
        }}
      >
        <CircularProgress
          variant="determinate"
          value={value * 10}
          color={'inherit'}
          size={50}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            fontWeight="700"
            fontSize={16}
            color={'white'}
            sx={{ marginTop: '-5px' }}
          >
            {(Math.floor(value * 10) / 10).toFixed(1)}
          </Typography>
        </Box>
      </Box>
    </span>
  )
}
