import React from "react";
import * as Styled from "./styled";
import { Link } from "gatsby";
import JiggleText from "../JiggleText";

const Hero = () => {
  return (
    <Styled.Wrapper>
      <Styled.Statement>
        <div className="large">
          A <em>good guy</em> who
          <br />
          makes <em>good websites</em>.
        </div>
        <div className="small">
          A{" "}
          <em>
            good
            <br />
            guy
          </em>{" "}
          who
          <br />
          makes
          <br />
          <em>
            good
            <br />
            websites
          </em>
          .
        </div>
      </Styled.Statement>
      <div className="container">
        <Styled.Bio>
          I’m <Link to="/info">Folarin</Link> – a Lagos-based Frontend Developer
          with over a decade of experience working on technologies like ReactJS,
          NextJS, and{" "}
          <em>
            <JiggleText>Framer Motion</JiggleText>
          </em>
          .
        </Styled.Bio>
        <Styled.Bio>
          Perfect Codes makes me{" "}
          <em>
            <JiggleText>happy</JiggleText>
          </em>
          .
        </Styled.Bio>
      </div>
    </Styled.Wrapper>
  );
};

export default Hero;
