import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import ContributeModal from "./contribute-modal";
import ContactModal from "./contact-us-modal";

import { CATEGORIES, CATEGORIES_TO_FILTER_MAP } from "../constants/categories";

import { useHome } from "../contexts/HomeContext";
import { useCategory } from "../contexts/CategoryContext";

import * as styles from "./footer.module.css";

const Footer = () => {
  const { setIsExpanded } = useHome();
  const [contributeModalOpen, setContributeModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { handleCategoryChange } = useCategory();

  const contributeOpen = () => {
    setContributeModalOpen(true);
  };
  const contributeClose = () => {
    setContributeModalOpen(false);
  };

  const contactOpen = () => {
    setContactModalOpen(true);
  };
  const contactClose = () => {
    setContactModalOpen(false);
  };

  return (
    <footer>
      <div className="full-inner">
        <div className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <ul className="footer-links">
              {Object.entries(CATEGORIES).map(([key, value]) => (
                <li key={key}>
                  <Link
                    to={"/"}
                    onClick={() => {
                      handleCategoryChange(value);
                      setIsExpanded(true);
                    }}
                  >
                    {CATEGORIES_TO_FILTER_MAP[key]}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="footer-links">
              <li>
                <button
                  onClick={contributeOpen}
                  className={styles.footerButton}
                >
                  <p>Contribute</p>
                </button>
                <ContributeModal
                  open={contributeModalOpen}
                  dialogClose={contributeClose}
                />
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfSNfY9h0NlUTB0w1sUEarDJ0GXLRS_6c0exh4ud7W9jouvBQ/viewform?emailAddress="
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign Up For Mailing List
                </a>
              </li>
              <li>
                <button onClick={contactOpen} className={styles.footerButton}>
                  <p>Contact Us</p>
                </button>
                <ContactModal
                  open={contactModalOpen}
                  dialogClose={contactClose}
                />
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerRight}>
            <a
              href="https://sensilab.monash.edu"
              target="_blank"
              rel="noreferrer"
              className={styles.footerLogo}
            >
              <StaticImage
                src="../images/sensilab-logo.svg"
                alt="SensiLab icon"
              />
              Sensilab
            </a>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
