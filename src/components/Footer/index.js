import React from "react"
import * as Styled from "./styled"

const Footer = () => {
    return (
        <Styled.Wrapper>
            <Styled.PrimaryWrapper>
                <div className="container">
                    <h3>
                        <em>Thanks for visiting.</em>
                    </h3>
                    <h3>I'm currently looking for freelance or full-time work, feel free to say hi.</h3>
                    <h3>
                        <a className="inverted" href="mailto:lawalfolarin6@gmail.com">lawalfolarin6@gmail.com</a>
                    </h3>
                </div>
            </Styled.PrimaryWrapper>
            <Styled.SecondaryWrapper>
                <div className="container">
                    <Styled.SecondaryInner>
                        <h3>
                            © {new Date().getFullYear()}
                        </h3>
                        <Styled.Links>
                            <a className="inverted" target="_blank" href="https://twitter.com/madflows_">Twitter</a>
                            <a className="inverted" target="_blank" href="https://github.com/madflows/">GitHub</a>
                        </Styled.Links>
                    </Styled.SecondaryInner>
                </div>
            </Styled.SecondaryWrapper>
        </Styled.Wrapper>
    )
}

export default Footer