import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropdown";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import filterStyles from "../styles/FilterSort.module.css";

export default function Home({ products }) {
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  return (
    <div className={styles.container}>
      <Navbar />

      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.heroSubtitle}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      <div className={filterStyles.filterBar}>
        <div className={filterStyles.leftFilters}>
          <span>
            <strong>3425 ITEMS</strong>
          </span>
          <span
            className={filterStyles.filterLink}
            onClick={() => setShowFilter((prev) => !prev)}
          >
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </div>
        <div
          className={filterStyles.sortMenu}
          onClick={() => setShowSort((prev) => !prev)}
        >
          RECOMMENDED ▾{showSort && <SortDropdown />}
        </div>
      </div>

      <div className={filterStyles.contentWrapper}>
        {showFilter && <FilterSidebar />}
        <div
          className={`${styles.productGrid} ${
            showFilter ? styles.gridThree : styles.gridFour
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
