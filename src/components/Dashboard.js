import * as React from 'react';
import { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material'
export const Dashboard = () => {
    const cardsData = [
        { title: 'Card 1', content: ' for Card 3 Lizards are a widespread group of squamate reptiles, with over 6,000' ,completed:false},
        { title: 'Card 2', content: ' for Card 2Lizards are a widespread group of squamate reptiles, with over 6,000 ' ,completed:false},
        { title: 'Card 3', content: ' for Card 3Lizards are a widespread group of squamate reptiles, with over 6,000' ,completed:true},
        { title: 'Card 3', content: ' for Card 3 Lizards are a widespread group of squamate reptiles, with over 6,000',completed:false },
        { title: 'Card 3', content: ' for Card 3 Lizards are a widespread group of squamate reptiles, with over 6,000' ,completed:true},
        { title: 'Card 3', content: ' for Card 3 Lizards are a widespread group of squamate reptiles, with over 6,000' ,completed:false},
        { title: 'Card 3', content: ' for Card 3 Lizards are a widespread group of squamate reptiles, with over 6,000' ,completed:true},

      ];
      const [completed, setCompleted] = useState(cardsData.map(card => card.completed));

  const handleClick = (index) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !completed[index];
    setCompleted(updatedCompleted);
  };

  const handleEditClick = () => {
    // Handle edit click logic here
    console.log('Edit button clicked');
  };

  const handleDeleteClick = () => {
    // Handle delete click logic here
    console.log('Delete button clicked');
  };


    return(
        <div class="container my-6">
        <div class="containe  ">

<h1 class="text-white font-bold my-2 ">AllTasks</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        {cardsData.map((card, index) => (
            <Grid  item xs={8} md={6} lg={2.4}>
            <Card sx={{ maxWidth: 350, backgroundColor: '#2a2a2b',color:"#ffff" , position: 'relative'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"  sx={{ color: 'white' }}>
              {card.title}
              </Typography>
              <Typography variant="body2"  sx={{ color: 'white' }}>
              {card.content}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white ' , padding: '16px 0 16px 0'}}>
              catagory
            </Typography>
              <Typography variant="body2" sx={{ color: 'white ' , position: 'absolute', bottom: 40}}>
              22-4-2022
            </Typography>
            </CardContent>
            <CardActions>
            <Button
                sx={{
                  color: completed[index] ? '#ff0000' : '#00ff00',
                  boxShadow: !completed[index] ? '2px 2px 5px rgba(60, 192, 86, 0.5)' : '2px 2px 5px rgba(208, 58, 28, 0.5)',

                }}
                size="small"
                onClick={() => handleClick(index)}
              >
            {completed[index] ? 'Incomplete' : 'Completed'}
          </Button>
          <div className='absolute bottom-0 right-1 space-x-2 '>
          <button onClick={handleEditClick}>
          <AiOutlineEdit size={24} color="#d8d0d0" />
        </button>
  
        <button onClick={handleDeleteClick}>
        <AiOutlineDelete size={24} color="#d8d0d0" />
      </button>
      </div>
          </CardActions>
          </Card>

      </Grid>  
      ))}

      </Grid>  </div></div>

  );


}
