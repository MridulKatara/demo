import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const footerLinks = {
    "metta muse": [
      "About Us",
      "Stories",
      "Artisans",
      "Boutiques",
      "Contact Us",
      "EU Compliances Docs",
    ],
    "Quick Links": [
      "Orders & Shipping",
      "Join/Login as a Seller",
      "Payment & Pricing",
      "Return & Refunds",
      "FAQs",
      "Privacy Policy",
      "Terms & Conditions",
    ],
    "Follow Us": ["Instagram", "LinkedIn"],
  };

  return (
    <footer className={styles.footer}>
      {/* Top Newsletter */}
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contactCurrency}>
          <div>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div>
            <h4>CURRENCY</h4>
            <p>🇺🇸 USD</p>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>
      </div>

      {/* Links Section (collapsible in mobile) */}
      <div className={styles.linksSection}>
        {Object.entries(footerLinks).map(([title, items]) => (
          <div className={styles.linkGroup} key={title}>
            <div
              className={styles.linkHeader}
              onClick={() => toggleSection(title)}
            >
              <h4>{title}</h4>
              <span className={styles.chevron}>
                {activeSection === title ? '▲' : '▼'}
              </span>
            </div>
            <ul
              className={`${styles.linkList} ${
                activeSection === title ? styles.open : ''
              }`}
            >
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Payment Section */}
      <div className={styles.paymentSection}>
        <h4>mettā muse ACCEPTS</h4>
        <div className={styles.paymentIcons}>
          <img src="/icons/gpay.svg" alt="Google Pay" />
          <img src="/icons/mastercard.svg" alt="Mastercard" />
          <img src="/icons/paypal.svg" alt="PayPal" />
          <img src="/icons/amex.svg" alt="Amex" />
          <img src="/icons/applepay.svg" alt="Apple Pay" />
          <img src="/icons/shop.svg" alt="Shop Pay" />
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
