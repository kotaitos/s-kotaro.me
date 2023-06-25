import { FC } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HomeLeft from './element/homeLeft';
import HomeRight from './element/homeRight';


export const HomePage: FC = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        '& hover': {
          backgroundColor: 'primary.light',
        },
      }}>
        <Grid container>
          <Grid item xs={6}>
            <HomeLeft />
          </Grid>
          <Grid item xs={6}>
            <HomeRight />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default HomePage
