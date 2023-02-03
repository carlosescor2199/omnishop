import { useState } from 'react'
import styles from "./likebutton.module.css";
import heart from '../../../assets/common/heart-outline.svg'
import heartSolid from '../../../assets/common/heart-solid.svg'

export default function LikeButton() {

  const [like, setLike] = useState(true);

  return (  
    <button className={styles.like} onClick={() => setLike(!like)}>
        {like ? (
            <img src={heartSolid} alt="" />
        ) : (
            <img src={heart} alt="" />
        )}
    </button>
  )
}
