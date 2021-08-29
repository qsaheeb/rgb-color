/* eslint-disable no-unused-vars */
import React from 'react';
import './card.scss';
const Card = ({ hexCode }) => {
    return (
        <div className="card" style={{ backgroundColor: `${hexCode}` }}>
            <p>{hexCode}</p>
        </div>
    )
}
export default Card;