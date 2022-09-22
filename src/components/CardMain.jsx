import React from 'react'
import Cards from './Cards'
import './cardmain.css'
let CardMain = () => {
    return (
        <React.Fragment>
            <div id='services'>
                <h3 className='display-4 display-flex  align-items-center '>Check out these Epic Destinations!</h3>
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <Cards src="images/img-9.jpg" head="Explore the hidden WaterFall"></Cards>
                        </div>
                        <div className="col-md-5">
                            <Cards src="images/img-2.jpg" head="Travel through the islands of bali in a Private Cruise"></Cards>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <Cards src="images/img-3.jpg" head="Set Sail in the Atlantic Ocean Visiting"></Cards>
                        </div>
                        <div className="col-md-4">
                            <Cards src="images/img-4.jpg" head="Experience Football on the top of Himalayan"></Cards>
                        </div>
                        <div className="col-md-4">
                            <Cards src="images/img-8.jpg" head="Ride through the Sahara desert on a guided Camel your"></Cards>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardMain