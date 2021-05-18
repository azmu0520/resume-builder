import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Button>
        <GroupButton>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </GroupButton>
        <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};

  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  p {
    color: rgba(0.1, 0.2, 0.2, 0.4);
  }
`;

const GroupButton = styled.div`
  display: flex;
  /* margin-bottom: 5px; */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  display: flex;
  opacity: 0.7;
  text-transform: uppercase;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  margin: 8px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.6;
`;

const DownArrow = styled.img`
  margin-top: 10px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
`;
