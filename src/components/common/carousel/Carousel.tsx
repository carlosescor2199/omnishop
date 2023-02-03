import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import { useSwipeable } from "react-swipeable"

export default function Carousel({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child: any, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={styles.indicators}>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? styles.active : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {""}
            </button>
          );
        })}
      </div>
    </div>
  );
};
