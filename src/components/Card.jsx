import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ButtonCard from './IconButtons/ButtonCard';


function Card({img,releaseDate,title,id}) {
  return (
    <>

       <StyledCard>
        
        <img
          src={`${img}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
         <Link  to={"detail/"+{id}} style={{ color: 'antiquewhite',textDecoration: 'none' }}> <h5 className="card-title">{title}</h5></Link>
         
          <h7 className="card-title"><span>{releaseDate}</span></h7>
        </div>
        </StyledCard>
      {/* </div> */}
    </>
  );
}

export default Card;


const StyledCard = styled.div`
  background-color:#a301fb;
  width:16rem;
  cursor: pointer;
  &:hover {
  transform: scale(1.20);
  transition: all 600ms;
  z-index: 99;
  }
`;
