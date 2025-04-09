/* eslint-disable @next/next/no-img-element */
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.productImg} />
      <div className={styles.cardContent}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}