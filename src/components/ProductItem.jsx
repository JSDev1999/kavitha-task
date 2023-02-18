import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Rating,
  Stack,
} from "@mui/material";

export default function ProductItem({ item }) {
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={item.thumbnail}
          alt={item?.title}
        />
        <CardContent>
          <Chip label={item?.brand} />

          <Stack>
            <Typography gutterBottom variant="h5" component="div">
              {"$" + item?.price}
            </Typography>
            <Rating name="read-only" value={item?.rating} readOnly />
          </Stack>

          <Typography gutterBottom variant="h6" component="div">
            {item?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {item?.category}
        </Button>
      </CardActions>
    </Card>
  );
}
