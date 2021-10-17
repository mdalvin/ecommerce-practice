import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({ checkoutToken }) => {
    console.log(checkoutToken);
    return (
        <>
          <Typography variant="h6" gutterBottom style={{fontFamily:"PT Sans"}}>Order Summary</Typography>  
          <List disablePaddings>
              {checkoutToken.live.line_items.map((product) => (
                  <ListItem style={{padding:"10px 0", fontFamily:"PT Sans"}} key={product.name} >
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} style={{fontFamily:"PT Sans"}}/>
                    <Typography variant="body2" style={{fontFamily:"PT Sans"}}>{product.line_total.formatted_with_symbol}</Typography>
                  </ListItem>
              ))}
              <ListItem style={{padding:"10px 0"}}>
                  <ListItemText primary="Total" />
                  <Typography variant="h6" style={{fontWeight: "700", fontFamily:"PT Sans"}}>
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                  </Typography>
              </ListItem>
          </List>
        </>
    )
}

export default Review;
