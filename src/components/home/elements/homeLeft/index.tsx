import { FC } from "react";
import { TypeAnimation } from 'react-type-animation';
import Box from '@mui/material/Box';


export const HomeLeft: FC = () => {
  return (
    <>
      <Box sx={{
        p: 10,
        m: 10,
        minWidth: 400,
        minHeight: 300,
        border: '1px white solid',
      }}>
        <TypeAnimation
          sequence={[
            "Hi, there.👋",
            3000,
            "I'm Kotaro Saito.",
            3000,
            "Thank you for visiting my website.",
            3000,
            "Please check out my resume, portfolio, and blog on the right side.",
            5000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
        />
      </Box>
    </>
  )
}

export default HomeLeft