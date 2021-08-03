import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                className="home_image"
                 src="https://images-na.ssl-images-amazon.com/images/G/32/digital/video/Magellan_MLP/BRND_MTH21_GWBleedingHero_1500x600_Final_pt-BR_FT_PVD7127._CB665235283_.jpg" alt=""/>
            <div className="home_row">
                <Product 
                id="0"
                title='The lean startup' 
                price={999}
                rating = {5} 
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                />
                <Product 
                id="4"
                title=" Harry Potter and the Cursed Child , A fictional Novel by J.K Rowling "
                price={799}
                rating={5}
                image="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1224&h=612&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2016%2F12%2F07%2Fharry-potter-cursed.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                id="1"
                title=" Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={29998}
                rating={3}
                image="https://i.pcmag.com/imagery/reviews/03Qnlt9aC4lMcPMuRP7HiCO-8..1569472965.jpg"
                />
                <Product 
                id="2"
                title=" Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric "
                price={4999}
                rating={4}
                image="https://icdn.digitaltrends.com/image/digitaltrends/echo-3rd-gen-416x277.jpg"
                />
                <Product
                id="3"
                title=" New Apple iPad Pro (12.9-inch, Wi-Fi,128GB) - Silver (4th Generation)"
                price={89990}
                rating={5}
                image="https://static.toiimg.com/thumb/msid-76084889,width-1200,height-900,resizemode-4/.jpg"
                 />

            </div>
            <div className="home_row">
            <Product
            id="4"
            title=" HP Pavilion Gaming Laptop-GTXi3600, Intel Core i5, 8GB RAM, 512 SSD"
            price={75990}
            rating={4}
            image="https://in-files.apjonlinecdn.com/landingpages/npi/hp-pavilion-gaming-laptops-p1/images/Game_ready_image_desktop.png"
             /> 
            </div>
            </div>
        </div>
    )
}

export default Home
