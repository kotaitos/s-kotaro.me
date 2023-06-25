import { FC } from "react";
import { TypeAnimation } from 'react-type-animation';
import Box from '@mui/material/Box';


export const HomeLeft: FC = () => {
  return (
    <>
      <Box sx={{
        p: 10,
        m: 10,
        border: '1px white solid',
      }}>
        <TypeAnimation
          sequence={[
            "Hello, there.",
            1000,
            "I'm Kotaro Saito.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </Box>
    </>
  )
}

export default HomeLeft