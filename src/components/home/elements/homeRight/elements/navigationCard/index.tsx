import { FC } from 'react'
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, Typography } from '@mui/material';

interface Props {
  name: string
}

export const NavigationCard: FC<Props> = ({ name }: Props) => {
  return (
    <Card
    variant='outlined'
    sx={{
      minWidth: 275,
      minHeight: 100,
      m: 2,
      backgroundColor: 'primary.main',
      color: 'text.primary',
      border: '1px white solid',
      '&:hover': {
        backgroundColor: 'primary.light',
        color: 'text.secondary',
      },
    }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { `${name} ->` }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default NavigationCard
