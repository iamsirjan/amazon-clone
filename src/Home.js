import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel className="home__image">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpgg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="home__row">
          <Product
            id={1}
            title="Hair Gel "
            price={6}
            image="https://media-we-cdn.oriflame.com/-/media/images/externalImage.ashx?externalMediaId=product-management-media%2F34920%2F34920.png%3Fversion%3D1594222360&q=90"
            rating={5}
          />
          <Product
            id={2}
            title="Beard growing oil"
            price={10}
            image="https://cdn.shopify.com/s/files/1/0291/4202/4291/products/H43b8130f3b94401aae3ba81124622b7cg_2000x_copy_f48d721b-d9e2-49f9-beb1-fde1cf24c0e6_2000x.jpg?v=1597753137"
            rating={4}
          />

          <Product
            id={9}
            title="Axe Purfume "
            price={5}
            image="https://market.thulo.com/uploads/ads/2017/02/tem_500.jpg"
            rating={4}
          />
          <Product
            id={10}
            title=" Men's Watch   "
            price={10}
            image="https://rukminim1.flixcart.com/image/332/398/jwzabgw0/watch/c/h/g/ls2821-limestone-original-imafhjcr3xkxgqaz.jpeg?q=50"
            rating={5}
          />
          <Product
            id={11}
            title="Plastic white cup"
            price={3}
            image="https://www.huhtamaki.com/globalassets/north-america/retail/catalog-images/10oz_clearcup.jpg?width=320"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="IPHONE XR 128GB INTERNAL"
            price={1000}
            image="https://www.cricketwireless.com/uiassets/DAPW4127-detail-front.jpg"
            rating={5}
          />
          <Product
            id={12}
            title="WATERCOOLING GAMING CPU"
            price={50}
            image="https://hothardware.com/newsimages/Item12940/cyberpower-pc-1.jpg"
            rating={5}
          />
          <Product
            id={13}
            title="LOGICTECH GAMING MOUSE"
            price={30}
            image="https://www.ebuyer.com/blog/wp-content/uploads/2014/07/gaming-mouse-header.jpg"
            rating={5}
          />
          <Product
            id={4}
            title="Combatwing Gaming Headset"
            price={40}
            image="https://images-na.ssl-images-amazon.com/images/I/71HFFgckuFL._AC_SL1267_.jpg"
            rating={5}
          />
          <Product
            id={5}
            title="Elgato Game Capture HD60 S Full HD "
            price={30}
            image="https://www.scan.co.uk/images/products/3061843-a.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="LETHER JACKET FOR MEN"
            price={20}
            image="https://img.tradees.com/file/upload/2020/07/20/Low-Price-Guaranteed-Quality-Black-Genuine-Leather-Jacket-short-slim-Leather-Jacket-Women-2.jpg"
            rating={4}
          />
          <Product
            id={7}
            title="COTTON PANT FOR MEN"
            price={28}
            image="https://images-na.ssl-images-amazon.com/images/I/81SPeUXqBsL._UL1500_.jpg"
            rating={5}
          />
          <Product
            id={8}
            title="WHITE FILA SHOES FOR MEN"
            price={20}
            image="https://images.journeys.com/images/products/1_502268_ZM_WHITE.JPG"
            rating={5}
          />

          <Product
            id={15}
            title="POLO SHIRT FOR WOMEN"
            price={15}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvlkvOz_w3fr54fHg92o3UOvrO-3MT2_nfaw&usqp=CAU"
            rating={5}
          />
          <Product
            id={14}
            title=" POLO WHITE SHIRT FOR MEN "
            price={15}
            image="https://i.pinimg.com/originals/bd/63/f0/bd63f0e11ab4b8a4fbc92b092348d502.jpg "
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
