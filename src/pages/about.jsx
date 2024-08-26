import React from "react";

import Layout from "../components/layout";
import HeaderAbout from "../components/header-about";

const AboutPage = () => {
  return (
    <main className="homepage">
      <title>About Us</title>

      <section className="full">
        <Layout header={HeaderAbout} />
      </section>
    </main>
  );
};

export default AboutPage;
