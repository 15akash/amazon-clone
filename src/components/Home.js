import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <img 
             className="home_image" 
             src="https://m.media-amazon.com/images/I/71FSVYGiPEL._SX3000_.jpg" 
             alt="home-image" /> 
           <div className="home__row">
             <Product 
                id="1"
                title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
                price={305}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51u2E5fNq8L._SX301_BO1,204,203,200_.jpg"  
           /> 
             <Product 
                id="2"
                title="Realme Watch S with 1.3: TFT-LCD Touchscreen, 15 Days Battery Life, SpO2 & Heart Rate Monitoring, IP68 Water Resistance"
                price={4500}
                rating={5}
                image="https://m.media-amazon.com/images/I/61QXCkshDOS._SL1500_.jpg"  
           /> 
           </div>
           <div className="home__row">
             <Product 
                id="3"
                title="The Psychology of Money Paperback – 1 September 2020"
                price={400}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"  
           /> 
             <Product 
                id="4"
                title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                price={3499}
                rating={5}
                image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"  
           />
           <Product 
                id="5"
                title="Imou 360 Degree WiFi Security Camera (White), Up to 256GB SD Card Support, 1080P Full HD, Privacy Mode"
                price={3150}
                rating={5}
                image="https://m.media-amazon.com/images/I/51guhe1DQeL._SL1200_.jpg"  
           /> 
           </div>
           <div className="home__row">
             <Product 
                id="12"
                title="TCL 126 cm (50 inches) 4K Ultra HD Certified Android Smart LED TV 50P615 (Black) (2020 Model) | With Dolby Audio"
                price={40000}
                rating={5}
                image="https://m.media-amazon.com/images/I/71nsCYdploL._SL1500_.jpg"  
           />
           <Product 
                id="12"
                title="New Apple iPhone 12 (128GB) - Blue (includes charger)"
                price={68999}
                rating={5}
                image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"  
           /> 
           </div> 
        </div>

    );
};

export default Home
