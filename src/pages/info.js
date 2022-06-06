import React from "react";
import { Link } from "gatsby";
import ArticleBody from "../components/ArticleBody";
import Head from "../components/Head";
import InfoIntro from "../components/InfoIntro";
import Layout from "../components/Layout";

const Info = () => {
  return (
    <Layout>
      <Head title="Info" />
      <InfoIntro />
      <div className="container">
        <section>
          <ArticleBody>
            <h2>
              Hi, I’m <em>Folarin Lawal</em> – a Frontend Developer living in
              Lagos, Nigeria.
            </h2>
            <p>
              Aside from work, I love to play{" "}
              <span>
                <a href="https://geometrydash.io/" target={"_blank"}>
                  Geometry Dash
                </a>
              </span>
              ,{" "}
              <span>
                <a href="https://www.torn.com/2289003" target="_blank">
                  Torn.com
                </a>
              </span>
              , and read programming articles on <span> <a href="https://dev.to">Dev.to</a> </span>.
            </p>
            <p>
              Good inspiration comes from experience. I try to stand often and
              spend time away from Coding. It helps.
            </p>
            <h2>About the website</h2>
            <p>
              This website was originally built with{" "}
              <a href="https://www.gatsbyjs.com/">Gatsby</a> – a React-based
              framework for generating static sites by{" "}
              <span>
                <a href="https://aaron.sh" target="_blank">
                  Aaron
                </a>
              </span>
              . This site was built from
              scratch (no templates!) with the help of{" "}
              <a href="https://www.framer.com/motion/">Framer Motion</a> and{" "}
              <a href="https://styled-components.com/">Styled Components</a>.
            </p>
          </ArticleBody>
        </section>
      </div>
    </Layout>
  );
};

export default Info;
