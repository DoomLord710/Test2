import React from 'react';
import './Card.css';

const Card = (prop) => {
const classes = 'Card ' + prop.className;

return <div className={classes}>{prop.children}</div>
}

export default Card;