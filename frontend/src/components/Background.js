import React from "react";
import styled from "styled-components";

function Background() {
  return (
    <Wrapper>
      <Main />
      <Secondary />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(117, 153, 179, 0.1);
`;

const Main = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/static/images/pattern.jpg');
    background-size: 40%;
    opacity: 0.2;
    pointer-events: none;
    z-index: -1 !important;
`;

const Secondary = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(-25deg, rgba(58, 85, 124, 0.25) 0%, rgba(255, 255, 255, 0.5) 100%),linear-gradient(155deg, rgba(247, 167, 93, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    z-index: -1 !important;
`;

export default Background;
