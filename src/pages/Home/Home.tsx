import styles from "./home.module.css";
import Carousel from "../../components/common/carousel/Carousel";
import { CarouselItem } from "../../components/common/carousel/CarouselItem";
import img1 from "../../assets/common/carousel/img1.png";
import img2 from "../../assets/common/carousel/img2.png";
import img3 from "../../assets/common/carousel/img3.png";
import img4 from "../../assets/common/carousel/img4.png";
import HeaderHome from "../../components/common/headerHome/HeaderHome";
import Tag from "../../components/common/tag/Tag";
import LikeButton from "../../components/common/like-button/LikeButton";
import { Rating } from "react-simple-star-rating";
import Sizes from "../../components/common/sizes/Sizes";
import Counter from "../../components/common/counter/Counter";
import CustomButton from "../../components/common/button/CustomButton";
import { Link } from "react-router-dom";
import Card from '../../components/common/card/Card';

import img1Card from "../../assets/common/cards/img1.png"
import Footer from "../../components/common/footer/Footer";

export default function Home() {
  return (
    <div>
      <HeaderHome />
      <Carousel>
        <CarouselItem>
          <img src={img1} alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src={img2} alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src={img3} alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src={img4} alt="" />
        </CarouselItem>
      </Carousel>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topcontent}>
            <Tag label="new" />
            <LikeButton />
          </div>
          <div className={`${styles.product_name} mt-16`}>
            <h1>Sweater Le pull Neve Fluffy long sleeve knit.</h1>
          </div>
          <Rating
            className={`${styles.rating}`}
            initialValue={4}
            readonly
            fillColor="#7315BE"
            emptyColor="transparent"
            SVGstrokeColor="#7315BE"
            SVGstorkeWidth={1}
            size={14}
          />
          <div className={`${styles.prices} mt-8`}>
            <span className={`${styles.price} mr-8`}>$2.000.000</span>
            <span className={styles.offer}>$1.200.000</span>
          </div>
          <div className="mt-12">
            <Sizes sizes={["xxs", "xs", "s", "m", "l", "xl", "xxl"]} />
          </div>
          <div className={`${styles.buttons} mt-12`}>
            <Counter />
            <CustomButton width={185} height={41} label="Agregar al carrito" />
          </div>
          <div className={`${styles.description}`}>
            <h3>DESCRIPCIÓN</h3>
            <p>
              Saco de punto de manga larga con materiales eco amigables en 4
              tonos. Esta sudadera con capucha clásica está confeccionada con
              algodón 100 % orgánico y está diseñada para usarse durante todo el
              año, en todas las temporadas. es un tejido de peso medio con una
              textura loopback en el interior y un acabado que aporta suavidad
              extra. se trata con aceite de menta natural (pprmint™), para
              reducir la necesidad de lavado y mantenerlo fresco por más tiempo.
            </p>
            <Link to="/">Leer mas</Link>
          </div>
          <div className={`${styles.others_products_title}`}>
            <h3>TAMBIÉN TE PODRÍA GUSTAR</h3>
          </div>
          <div className={`${styles.slider} mt-12`}>
            <Card img={img1Card} price="$760.000" title="Maroon Sweater square La robe Bari" />
            <Card img={img1Card} price="$760.000" title="Maroon Sweater square La robe Bari" />
            <Card img={img1Card} price="$760.000" title="Maroon Sweater square La robe Bari" />
            <Card img={img1Card} price="$760.000" title="Maroon Sweater square La robe Bari" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
