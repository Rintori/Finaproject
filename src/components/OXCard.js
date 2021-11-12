import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://store-images.microsoft.com/image/apps.42989.9007199266246294.3244c551-ca8c-40db-9107-331e7396baf4.1cdc773f-3544-4224-b32c-b4f418418a6e"
        alt="TicTacToe"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tic Tac Toe
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Games played on three-in-a-row boards can be traced back to ancient Egypt, where such game boards have been found on roofing tiles dating from around 1300 BC.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">How to play</Button>
      </CardActions>

      <CardMedia
        component="img"
        height="240"
        image="https://mymodernmet.com/wp/wp-content/uploads/2020/12/history-of-chess-1.jpg"
        alt="Chess"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chess
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The history of chess can be traced back nearly 1500 years to its earliest known predecessor, called chaturanga, in India; its prehistory is the subject of speculation. From India it spread to Persia. Following the Arab invasion and conquest of Persia, chess was taken up by the Muslim world and subsequently spread to southern Europe. The game evolved roughly into its current form by about 1500 CE.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">How to play</Button>
      </CardActions>
    </Card>
  );
}
