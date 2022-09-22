import React from 'react'
import './cards.css'
let Cards = (props) => {

  return (
    <React.Fragment>
     <div className="card shadow-lg ">
              {/* <div className="card-header bg-primary text-white text-lg ">Paris</div> */}
              <img className='card-img-top ' src={props.src} alt="" />
              <div className="card-body">
                <h3>{props.head}</h3>
               </div>
            </div>
    </React.Fragment>
  )
}

export default Cards;