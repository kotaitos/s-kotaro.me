import { FC } from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { GitHub, Twitter } from '@material-ui/icons';

export const Icons: FC = () => {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        borderRadius: 1,
        backgroundColor: 'primary.main',
        color: 'text.secondary',
        '& svg': {
          m: 1.5,
        },
        '& hr': {
          mx: 0.5,
        },
      }}
      >
        <Link href="https://github.com/kotaitos">
          <GitHub color="secondary" />
        </Link>
        <Link href="https://twitter.com/kotarodotpy">
          <Twitter color="secondary" />
        </Link>
      </Box>
    </>
  )
}

export default Icons
