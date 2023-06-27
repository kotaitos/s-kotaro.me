import { FC } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavigationCard } from './elements/navigationCard';


export const HomeLeft: FC = () => {
  return (
    <>
      <Box
        sx={{
          p: 5,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'primary.main',
        }}>
          <Grid container>
            <NavigationCard name="about" />
            <NavigationCard name="product" />
            <NavigationCard name="blog" />
          </Grid>
      </Box>
    </>
  )
}

export default HomeLeft