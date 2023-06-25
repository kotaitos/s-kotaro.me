import { FC } from "react";
import Link from 'next/link';
import Box from '@mui/material/Box';
import { GitHub, Twitter } from '@material-ui/icons';


export const HomeLeft: FC = () => {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'primary.main',
          '& hover': {
            backgroundColor: 'primary.light',
          },
        }}>
        <Link href="/about">
          About
        </Link>
        <Link href="/product">
          Product
        </Link>
        <Link href="/blog">
          Blog
        </Link>
        <GitHub />
        <Twitter />
      </Box>
    </>
  )
}

export default HomeLeft