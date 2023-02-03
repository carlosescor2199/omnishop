import React, { useState } from "react";
import styles from "./sizes.module.css";

export default function Sizes({ sizes }: { sizes: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = sizes.length - 1;
    } else if (newIndex >= sizes.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.indicators}>
      {sizes.map((item, index) => {
        return (
          <button
            className={`${index === activeIndex ? `${styles.active} mr-8` : "mr-8"}`}
            onClick={() => {
              updateIndex(index);
            }}
          >
            {item.toLocaleUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
