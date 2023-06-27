import React from 'react';
import FavFilled from './FavFilled';
import SavFilled from './FavFilled';
import { Link } from "react-router-dom";

function ButtonCard({id}) {
  return (
    <>
      <div className="card" style={{ width: '16rem' ,backgroundColor:"#faebd7"}}>
        <FavFilled id={id}/>
      </div>
    </>
  );
}

export default ButtonCard;