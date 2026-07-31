import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const navigate = useNavigate();
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const transitionTimerRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextPage = useCallback(() => {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    transitionTimerRef.current = window.setTimeout(() => {
      navigate("/about");
    }, 300);
  }, [isTransitioning, navigate]);

  const handleInteraction = (event) => {
    if (event.type === "keydown" && event.key !== "Enter") {
      return;
    }

    goToNextPage();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        goToNextPage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
    };
  }, [goToNextPage]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main
      className={`container mx-auto max-width section md:flex justify-between items-center cursor-pointer page-transition ${
        isTransitioning ? "page-slide-out-left" : "page-slide-in-right"
      }`}
      onClick={handleInteraction}
      onTouchEnd={handleInteraction}
      onKeyDown={handleInteraction}
      role="main"
      tabIndex={0}
    >
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
      </div>
    </main>
  );
}

export default Home;
