import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SearchBox from "./search-box";
import InfoButton from "./info-button";

import { CATEGORIES } from "../constants/categories";

import { useCategory } from "../contexts/CategoryContext";

import "./header.css";
import * as styles from "./header-about.module.css";

const TEAM_BIOS = [
  {
    name: "Professor Jon McCormack",
    bio: "Short bio should go here. Hopefully no more than 25 words, so it only takes a couple of lines.",
  },
  {
    name: "Dr Camilo Cruz Gambardella",
    bio: "Short bio should go here. Hopefully no more than 25 words, so it only takes a couple of lines.",
  },
];

const HeaderAbout = () => {
  const { handleCategoryChange } = useCategory();

  return (
    <header
      className="full-inner header-about"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className={styles.headerContainer}>
        <Link
          to={"/"}
          onClick={() => {
            handleCategoryChange(CATEGORIES.concept);
          }}
        >
          <StaticImage
            src="../images/logo-expanded.svg"
            alt="Generative Systems Archive logo"
            className="logo-expanded"
            placeholder="blurred"
            width={378}
          />
        </Link>
        <div className={styles.buttonsContainer}>
          <SearchBox />
          <InfoButton />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.description}>
          <h2>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. VESTIBULUM
            TURPIS URNA, COMMODO AC RHONCUS UT, PORTTITOR NON LEO.
          </h2>
        </div>
        <div className={styles.contentInner}>
          <div className={styles.contentSection}>
            <div className={styles.content}>
              <h1>ABOUT US</h1>
            </div>
            <p>
              We are a group of creative researchers based at SensiLab, (Monash
              University). Our work revolves around the exploration of novel
              applications of technology for creative purposes. We do research
              by practice: we learn as we make, and we share what we learn.
            </p>
            <p>
              The Generative Systems Archive was born from our collective desire
              to have a systematic way of documenting, situating and
              consolidating the experience we have collectively acquired through
              our creative work and research with and around computational
              generative methods. The idea then grew into a more encompassing
              resource, with a twofold aim: On the one hand, we want to create a
              platform where creators can archive and showcase their work in
              context – alongside their peers – and on the other, we want to
              build a resource for teachers, beginners, enthusiasts and experts
              to acquire and share their knowledge about computational
              generative systems in a collegial manner.
            </p>
          </div>
          <div className={styles.contentSection}>
            <div>
              <div className={styles.content}>
                <h1>THE TEAM</h1>
              </div>
              <div>
                {TEAM_BIOS.map((bio) => (
                  <>
                    <p style={{ whiteSpace: "pre-line" }}>
                      <strong style={{ fontWeight: 700 }}>{bio.name}</strong>
                      <br />
                      {bio.bio}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.contentSectionLast}>
            <div>
              <div className={styles.content}>
                <h1>COPYRIGHT</h1>
              </div>
              <p>
                All articles and imagery produced by the Generative Systems
                Archive (GSA) can be reproduced, remixed and used by you in any
                way or form for no commercial purposes, as long as you provide
                credit to GSA and other underlying sources, and you licence your
                work under identical terms. All of this falls under a Creative
                Commons by Attribution, non commercial, share alike licence (CC
                BY-NC-SA 4.0).
              </p>
              <p>
                All the code produced by the GSA and showcased in this
                repository is licensed under GPL3.
              </p>
              <p>
                All the material, code or otherwise, produced by GSA will be
                clearly identified.
              </p>
              <p>
                All material produced by third parties and made available on the
                GSA website must be licensed according to the licence terms of
                the original material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAbout;
