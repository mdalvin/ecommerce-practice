import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { Delete, ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import useStyles from "./styles.js";

const CartItem = ({ item, onUpdateQty, onRemoveFromCart }) => {
  const classes = useStyles();
  console.log(item);

  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1" className={classes.text}>{item.name}</Typography>
        <Typography variant="subtitle1" className={classes.text}>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => onUpdateQty(item.id, item.quantity - 1)}>
            <ArrowDropDown />
          </Button>
          <Typography className={classes.text}>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => onUpdateQty(item.id, item.quantity + 1)}>
            <ArrowDropUp />
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>
          <Delete />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
