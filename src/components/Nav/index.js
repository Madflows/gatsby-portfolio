import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Menu from "../NavMenu";

const Nav = () => {
  // Nav bar states

  const [showShadow, setShowShadow] = useState(false);

  // Menu states

  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility

  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Hide/show shadow on mobile nav bar

  useEffect(() => {
    const toggleShadow = () => {
      window.scrollY >= 10 ? setShowShadow(true) : setShowShadow(false);
    };

    window.addEventListener("scroll", toggleShadow);
  });

  // Disable body scrolling while menu is open

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  });

  // Scroll to top

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to bottom

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // Framer motion variants

  const CloseIconVariants = {
    hidden: {
      opacity: 0,
      rotate: 90,
    },
    visible: {
      opacity: 1,
      rotate: 0,
    },
  };

  return (
    <>
      <AnimatePresence>
        {menuOpen && <Menu closeMenu={closeMenu} />}
      </AnimatePresence>

      <Styled.Bar position="primary" showShadow={showShadow}>
        <Styled.LogoWrapper>
          <Link to="/">
            <Styled.ClickTarget>
              {!menuOpen && (
                <Styled.Logo xmlns="http://www.w3.org/2000/svg">
                  <Styled.Path d="M 0 16.887 L 0 0 L 11.25 0 L 11.25 1.781 L 2.039 1.781 L 2.039 7.195 L 9.785 7.195 L 9.785 8.953 L 2.039 8.953 L 2.039 16.887 L 0 16.887 Z M 37.43 9.938 L 39.891 9.938 L 39.891 8.355 Q 39.891 7.582 39.598 7.119 A 1.499 1.499 0 0 0 39.075 6.625 A 2.14 2.14 0 0 0 38.672 6.445 A 3.447 3.447 0 0 0 38.187 6.325 Q 37.932 6.28 37.631 6.257 A 8.612 8.612 0 0 0 36.984 6.234 Q 36.275 6.234 35.749 6.319 A 3.886 3.886 0 0 0 35.238 6.434 A 2.313 2.313 0 0 0 34.812 6.608 Q 34.552 6.748 34.377 6.946 A 1.353 1.353 0 0 0 34.277 7.072 A 1.588 1.588 0 0 0 34.054 7.565 Q 33.973 7.864 33.973 8.238 L 32.344 8.238 A 4.351 4.351 0 0 1 32.455 7.223 A 2.703 2.703 0 0 1 33.48 5.625 A 3.58 3.58 0 0 1 34.481 5.119 Q 35.422 4.803 36.793 4.783 A 12.866 12.866 0 0 1 36.984 4.781 A 10.502 10.502 0 0 1 38.237 4.851 Q 39.711 5.028 40.541 5.66 A 2.808 2.808 0 0 1 41.571 7.27 Q 41.688 7.736 41.695 8.293 A 5.702 5.702 0 0 1 41.695 8.367 L 41.695 14.414 A 4.42 4.42 0 0 0 41.706 14.734 Q 41.728 15.038 41.796 15.226 A 0.681 0.681 0 0 0 41.877 15.387 Q 42.059 15.645 42.574 15.645 A 5.065 5.065 0 0 0 42.663 15.644 Q 42.788 15.642 42.867 15.633 L 42.867 17.063 Q 42.706 17.116 42.575 17.139 A 1.235 1.235 0 0 1 42.498 17.15 Q 42.34 17.168 42.047 17.168 A 2.603 2.603 0 0 1 41.455 17.104 A 1.784 1.784 0 0 1 40.67 16.711 A 1.503 1.503 0 0 1 40.152 15.619 A 2.063 2.063 0 0 1 40.148 15.504 A 3.459 3.459 0 0 1 39.09 16.442 A 4.5 4.5 0 0 1 38.502 16.729 Q 37.441 17.156 36.059 17.156 Q 34.667 17.156 33.727 16.696 A 3.253 3.253 0 0 1 33.012 16.225 Q 31.945 15.293 31.945 13.582 Q 31.945 12.258 32.496 11.461 A 2.652 2.652 0 0 1 33.32 10.702 Q 33.657 10.498 34.082 10.352 A 4.979 4.979 0 0 1 34.242 10.301 A 7.035 7.035 0 0 1 35.158 10.094 Q 36.122 9.938 37.43 9.938 Z M 16.864 17.086 A 10.301 10.301 0 0 0 18.105 17.156 Q 19.303 17.156 20.212 16.932 A 4.838 4.838 0 0 0 21.305 16.529 A 3.573 3.573 0 0 0 22.352 15.704 A 4.098 4.098 0 0 0 23.051 14.543 A 6.278 6.278 0 0 0 23.351 13.563 Q 23.48 12.99 23.542 12.309 A 15.193 15.193 0 0 0 23.602 10.922 A 15.276 15.276 0 0 0 23.557 9.719 Q 23.503 9.037 23.384 8.461 A 6.322 6.322 0 0 0 23.051 7.342 A 4.656 4.656 0 0 0 22.956 7.127 A 3.634 3.634 0 0 0 21.305 5.385 Q 20.511 4.976 19.361 4.839 A 10.621 10.621 0 0 0 18.105 4.77 A 10.913 10.913 0 0 0 17.195 4.806 Q 16.563 4.859 16.03 4.989 A 4.843 4.843 0 0 0 14.936 5.391 A 3.541 3.541 0 0 0 13.904 6.197 A 4.034 4.034 0 0 0 13.201 7.359 Q 12.835 8.265 12.715 9.578 A 15.18 15.18 0 0 0 12.656 10.957 Q 12.656 12.372 12.872 13.433 A 6.477 6.477 0 0 0 13.201 14.561 A 4.673 4.673 0 0 0 13.319 14.828 A 3.622 3.622 0 0 0 14.936 16.535 A 4.573 4.573 0 0 0 15.723 16.853 Q 16.241 17.01 16.864 17.086 Z M 26.883 16.887 L 26.883 0 L 28.676 0 L 28.676 16.887 L 26.883 16.887 Z M 18.176 15.691 A 7.235 7.235 0 0 0 18.986 15.649 Q 19.81 15.556 20.338 15.258 A 2.216 2.216 0 0 0 21.186 14.39 A 3.175 3.175 0 0 0 21.434 13.816 A 5.324 5.324 0 0 0 21.607 13.106 Q 21.74 12.36 21.759 11.326 A 19.075 19.075 0 0 0 21.762 10.98 A 16.111 16.111 0 0 0 21.73 9.936 Q 21.658 8.832 21.422 8.127 Q 21.082 7.113 20.303 6.674 A 2.91 2.91 0 0 0 19.63 6.407 Q 19.312 6.32 18.931 6.277 A 7.375 7.375 0 0 0 18.105 6.234 Q 17.205 6.234 16.564 6.417 A 2.845 2.845 0 0 0 15.937 6.674 A 2.24 2.24 0 0 0 15.097 7.529 A 3.233 3.233 0 0 0 14.83 8.139 A 5.508 5.508 0 0 0 14.647 8.899 Q 14.516 9.652 14.499 10.682 A 19.092 19.092 0 0 0 14.496 11.004 A 15.709 15.709 0 0 0 14.528 12.035 Q 14.6 13.126 14.836 13.822 A 3.025 3.025 0 0 0 15.169 14.518 A 2.23 2.23 0 0 0 15.961 15.258 Q 16.746 15.691 18.176 15.691 Z M 39.902 13.313 L 39.902 11.273 L 37.418 11.273 Q 36.113 11.273 35.323 11.499 A 3.679 3.679 0 0 0 35.314 11.502 Q 34.71 11.677 34.355 12.005 A 1.556 1.556 0 0 0 34.16 12.223 A 1.728 1.728 0 0 0 33.891 12.789 Q 33.823 13.03 33.804 13.316 A 3.493 3.493 0 0 0 33.797 13.547 A 2.47 2.47 0 0 0 33.887 14.232 A 1.806 1.806 0 0 0 34.5 15.158 Q 35.063 15.613 36 15.704 A 5.102 5.102 0 0 0 36.492 15.727 A 6.904 6.904 0 0 0 37.444 15.665 Q 38.409 15.531 39.018 15.1 A 2.006 2.006 0 0 0 39.884 13.637 A 2.764 2.764 0 0 0 39.902 13.312 Z" />
                  {/* <Styled.BrandCircle cx="44" cy="15" r="3" /> */}
                </Styled.Logo>
              )}
            </Styled.ClickTarget>
          </Link>
        </Styled.LogoWrapper>
        <Styled.MenuWrapper>
          <button onClick={() => toggleMenu()}>
            <Styled.ClickTarget rotate="270">
              {menuOpen ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={CloseIconVariants}
                >
                  <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                    <Styled.Path d="M29.795 32 32 29.795 22.205 20 32 10.205 29.795 8 20 17.795 10.205 8 8 10.205 17.795 20 8 29.795 10.205 32 20 22.205 29.795 32Z" />
                  </Styled.Icon>
                </motion.div>
              ) : (
                <>
                  <Styled.MenuTargetWritten>
                    <h3>Work</h3>
                  </Styled.MenuTargetWritten>
                  <Styled.MenuTargetIcon>
                    <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                      <Styled.Path d="M4 12h32v3H4zM4 24h32v3H4z" />
                    </Styled.Icon>
                  </Styled.MenuTargetIcon>
                </>
              )}
            </Styled.ClickTarget>
          </button>
        </Styled.MenuWrapper>
        <Styled.ThemeWrapper>
          {<ThemeToggle menuOpen={menuOpen} />}
        </Styled.ThemeWrapper>
      </Styled.Bar>
      <Styled.Bar position="secondary">
        <div>
          <button onClick={() => scrollToTop()}>
            <Styled.ClickTarget>
              {!menuOpen && (
                <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                  <Styled.Path d="m32 19.808-2.15 2.121-8.35-8.241V32h-3V13.758L10.15 22 8 19.879 20.036 8 32 19.808Z" />
                </Styled.Icon>
              )}
            </Styled.ClickTarget>
          </button>
        </div>
        <div>
          <Link to="/info">
            <Styled.ClickTarget rotate="90">
              {!menuOpen && <h3>Info</h3>}
            </Styled.ClickTarget>
          </Link>
        </div>
        <div>
          <button onClick={() => scrollToBottom()}>
            <Styled.ClickTarget>
              {!menuOpen && (
                <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                  <Styled.Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4h-.003C11.162 4.001 4 11.164 4 20c0 8.837 7.163 16 16 16Zm-1.5-14.5v10.985c-.702-.462-1.485-1.283-2.25-2.642-1.162-2.067-2.01-4.976-2.206-8.343H18.5Zm3 0v10.985c.702-.462 1.485-1.283 2.25-2.642 1.162-2.067 2.01-4.976 2.206-8.343H21.5Zm4.456-3H21.5V7.515c.702.462 1.485 1.283 2.25 2.642 1.162 2.067 2.01 4.976 2.206 8.343Zm3.005 3c-.2 3.838-1.164 7.282-2.617 9.85a13.005 13.005 0 0 0 6.57-9.85h-3.953Zm3.953-3h-3.953c-.2-3.838-1.164-7.282-2.617-9.85a13.005 13.005 0 0 1 6.57 9.85Zm-14.414 0h-4.456c.196-3.367 1.044-6.276 2.207-8.343.764-1.359 1.547-2.18 2.249-2.642V18.5Zm-7.461 0c.2-3.838 1.164-7.282 2.617-9.85a13.006 13.006 0 0 0-6.57 9.85h3.953Zm-3.953 3a13.006 13.006 0 0 0 6.57 9.85c-1.453-2.568-2.416-6.012-2.617-9.85H7.086Z"
                  />
                </Styled.Icon>
              )}
            </Styled.ClickTarget>
          </button>
        </div>
      </Styled.Bar>
    </>
  );
};

export default Nav;
