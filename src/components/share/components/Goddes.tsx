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
  playerPosition: Position;
  handleIn: () => void;
  handleOut: () => void;
};

const Goddes = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (
      inRange(
        props.playerPosition.x,
        ref.current.offsetLeft,
        ref.current.offsetLeft + ref.current.offsetWidth
      ) &&
      inRange(
        props.playerPosition.y,
        ref.current.offsetTop,
        ref.current.offsetTop + ref.current.offsetHeight
      )
    ) {
      props.handleIn();
    } else {
      props.handleOut();
    }
  }, [props, props.playerPosition, ref]);
  return (
    <Character
      ref={ref}
      style={{ left: `${props.position.x}px`, top: `${props.position.y}px` }}
    >
      <CharacterBody />
    </Character>
  );
};

export default Goddes;
