import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { useTheme } from "styled-components";

// Assuming the paths to the Lottie JSON files are correct
const AnimationYellowBackground = require("@/public/lotties/landing-page-yellow.json");
const AnimationLightBackground = require("@/public/lotties/landing-page-light.json");

const ContainerLottie = styled.div`
  width: 800px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: transparent; /* for contrast to see the container */

  @media (max-width: 1400px) {
    width: 700px;
    height: 700px;
  }

  @media (max-width: 1200px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 425px) {
    width: 100%; /* Adjusts width to full container size on smaller screens */
    height: auto; /* Adjusts height automatically based on the aspect ratio */
  }
`;

const LottieWrapper = styled.div`
  max-width: 80%;
  max-height: 80%;
  width: 100%;
  height: 100%;
  display: flex; /* Use flex to center the animation */
  justify-content: center;
  align-items: center;
`;

const AnimationsToShow = {
  dark: AnimationYellowBackground,
  light: AnimationLightBackground,
};

export default function LandingPageAnimation() {
  const theme = useTheme();
  const [isStopped] = useState(false);
  const [isPaused] = useState(false);

  var defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationsToShow[theme.name],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <ContainerLottie>
      <LottieWrapper>
        <Lottie
          options={defaultOptions}
          isStopped={isStopped}
          isPaused={isPaused}
          isClickToPauseDisabled={true}
        />
      </LottieWrapper>
    </ContainerLottie>
  );
}
