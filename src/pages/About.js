import React from "react";
import Github from "../img/github_100x100grey.svg";
import Instagram from "../img/instagram_100x100grey.svg";
import Linkedin from "../img/linkedin_100x100grey.svg";
import Twitter from "../img/twitter_100x100grey.svg";

const About = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <article>
        <header>
          <h2>About Author</h2>
        </header>
        <main id="about">
          <h3>Lin, You-Lun</h3>
          <ul>
            <li>
              Email:
              <a href="mailto: urlun0404@gmail.com">urlun0404@gmail.com</a>
            </li>
            <li>
              Personal Website:
              <a
                href="https://urlun0404.netlify.app/index.html"
                target="_blank"
              >
                My website
              </a>
            </li>
            <li>Links:</li>
            <div class="icons">
              <a href="https://github.com/urlun0404">
                <img src={Github} alt="github" title="github" />
              </a>
              <a href="https://twitter.com/urlun0404">
                <img src={Twitter} alt="twitter" title="twitter" />
              </a>
              <a href="https://www.linkedin.com/in/urlun0404">
                <img src={Linkedin} alt="linkedin" title="linkedin" />
              </a>
              <a href="https://www.instagram.com/urlun0404">
                <img src={Instagram} alt="instagram" title="instagram" />
              </a>
            </div>
          </ul>
        </main>
      </article>
    </div>
  );
};

export default About;
