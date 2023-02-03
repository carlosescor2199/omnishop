import styles from "./home.module.css";
import Carousel from '../../components/common/carousel/Carousel';
import { CarouselItem } from '../../components/common/carousel/CarouselItem';
import img1 from "../../assets/common/carousel/img1.png"
import img2 from "../../assets/common/carousel/img2.png"
import img3 from "../../assets/common/carousel/img3.png"
import img4 from "../../assets/common/carousel/img4.png"
import HeaderHome from '../../components/common/headerHome/HeaderHome';
import Tag from '../../components/common/tag/Tag';
import LikeButton from '../../components/common/like-button/LikeButton';

export default function Home() {
  return (
    <div>
      <HeaderHome /> 
      <Carousel>
        <CarouselItem><img src={img1} alt="" /></CarouselItem>
        <CarouselItem><img src={img2} alt="" /></CarouselItem>
        <CarouselItem><img src={img3} alt="" /></CarouselItem>
        <CarouselItem><img src={img4} alt="" /></CarouselItem>
      </Carousel>
      <div className={styles.content}>
        <div className={styles.topcontent}>
          <Tag label="new" />
          <LikeButton />
        </div>
      </div>
    </div>
  )
}
