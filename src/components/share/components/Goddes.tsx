import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropsImage from "../../../assets/props.png";
import { Position } from "../../../types/Position";
import { inRange } from "../../../utils";

const Character = styled.div`
  position: absolute;
  width: 37px;
  height: 72px;
  z-index: 100;
`;

const CharacterBody = styled.div`
  position: absolute;
  bottom: -12px;
  left: -18px;
  width: 37px;
  height: 72px;
  background-image: url(${PropsImage});
  background-repeat: no-repeat;
  background-position: -445px -21px;
`;

type Props = {
  position: Position;
};

const Goddes = (props: Props) => {
  return (
    <Character
      style={{ left: `${props.position.x}px`, top: `${props.position.y}px` }}
    >
      <CharacterBody />
    </Character>
  );
};

export default Goddes;
