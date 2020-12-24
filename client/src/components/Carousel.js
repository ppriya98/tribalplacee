import React from "react";
import { Carousel } from 'react-bootstrap';
import {Card} from 'react-bootstrap';



import slide04 from "../components/image/25.jpeg";
import slide05 from "../components/image/9.jpeg";
import slide06 from "../components/image/10.jpeg";




const Carousels = () => {
  return (
    <div className="App">
      <Carousel style = {{height: '80vh'}}>
<Carousel.Item style = {{height: '80vh'}}>
  <img
    className="d-block w-100"
    src = {slide04}
    alt="First slide"
  />

</Carousel.Item>

<Carousel.Item style = {{height: '80vh'}}>
  <img
    className="d-block w-100"
    src = {slide05}
    alt="Third slide"
  />

</Carousel.Item >


<Carousel.Item style = {{height: '80vh'}}>
  <img
    className="d-block w-100"
    src = {slide06}
    alt="Third slide"
    
  />

  
</Carousel.Item >

{/* <Carousel.Item style = {{height: '80vh'}}>
  <img
    className="d-block w-100"
    src = {slide07}
    // width = "100%"
    alt="Third slide"
  /> */}

  
{/* </Carousel.Item > */}
</Carousel>
    </div>
  );
}

export default Carousels;