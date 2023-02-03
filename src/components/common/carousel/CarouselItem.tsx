import styles from "./carousel.module.css";

export const CarouselItem = ({
  children,
  width,
}: {
  children: string | JSX.Element | JSX.Element[];
  width?: number | string;
}) => {
  return (
    <div className={styles["carousel-item"]} style={{ width: width }}>
      {children}
    </div>
  );
};
