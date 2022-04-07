import React, { useRef } from "react";
import styled from "styled-components";
import PlayerImage from "../../../assets/player.png";
import { Direction, DirectionType } from "../../../types/Direction";
import { Position } from "../../../types/Position";

interface Props {
  position: Position;
  direction: Direction;
  speed: number;
}

const Character = styled.div`
  position: absolute;
  z-index: 9999;
  transition-property: top left;
`;

const CharacterWrapper = styled.div`
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: 21px;
  height: 48px;
`;

const CharacterBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 21px;
  height: 48px;
  background-image: url(${PlayerImage});
  background-repeat: no-repeat;
  background-position-y: -10px;
`;

const CharacterShadow = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 28px;
  height: 30px;
  background-image: url(${PlayerImage});
  background-repeat: no-repeat;
  background-position: -98px -31px;
`;

const Player = (props: Props) => {
  let bgPositionX = 0;
  let scaleX = 1;
  if (props.direction === DirectionType.Top) {
    bgPositionX = -38;
  }
  if (props.direction === DirectionType.Right) {
    bgPositionX = -69;
    scaleX = -1;
  }
  if (props.direction === DirectionType.Bottom) {
    bgPositionX = -6;
  }
  if (props.direction === DirectionType.Left) {
    bgPositionX = -69;
  }
  return (
    <Character
      style={{
        top: `${props.position.y}px`,
        left: `${props.position.x}px`,
        transitionDuration: `${props.speed}s`,
      }}
    >
      <CharacterWrapper>
        <CharacterShadow></CharacterShadow>
        <CharacterBody
          style={{
            backgroundPositionX: `${bgPositionX}px`,
            transform: `scale(${scaleX}, 1)`,
          }}
        ></CharacterBody>
      </CharacterWrapper>
    </Character>
  );
};

export default Player;
