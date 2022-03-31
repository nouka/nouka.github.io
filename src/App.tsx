import React, { useRef, useState } from "react";
import styled from "styled-components";
import TileGrass from "./assets/tile-grass.png";
import BasicScreen from "./components/screen/BasicScreen";
import ProfileScreen from "./components/screen/ProfileScreen";
import SkillSheetScreen from "./components/screen/SkillSheetScreen";
import WorksScreen from "./components/screen/WorksScreen";
import Player from "./components/share/components/Player";
import useWindowEvent from "./components/share/hooks/WindowEvent";
import { Direction, DirectionType } from "./types/Direction";
import { Position } from "./types/Position";
import { getDirection, inRange } from "./utils";

const stageWidth = 1024;
const stageHeight = 768;

const Page = styled.div`
  position: relative;
`;

const Content = styled.div`
  background-image: url(${TileGrass});
  position: relative;
  margin: auto;
  width: ${stageWidth}px;
  height: ${stageHeight}px;
`;

function App() {
  const [position, setPosition] = useState<Position>({
    x: stageWidth / 2,
    y: stageHeight / 2,
  });
  const [direction, setDirection] = useState<Direction>(DirectionType.Bottom);
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseDown = (e: MouseEvent) => {
    if (!ref.current) {
      return;
    }
    const nextPosition = {
      x: inRange(e.pageX - ref.current.offsetLeft, 0, ref.current.offsetWidth),
      y: inRange(e.pageY - ref.current.offsetTop, 0, ref.current.offsetHeight),
    };
    setDirection(getDirection(position, nextPosition));
    setPosition(nextPosition);
  };
  useWindowEvent("mousedown", handleMouseDown, []);
  return (
    <Page>
      <header className="mx-auto py-5 w-[1024px]">
        <h1 className="text-2xl font-bold text-shadow">{process.env.REACT_APP_NAME}</h1>
        <h2 className="text-sm text-shadow">{process.env.REACT_APP_DESCRIPTION}</h2>
      </header>
      <Content ref={ref}>
        <Player
          position={{ x: position.x, y: position.y }}
          speed={2}
          direction={direction}
        />
        {/* 基本情報 */}
        <BasicScreen />
        {/* 自己紹介 */}
        <ProfileScreen />
        {/* 保有スキル */}
        <SkillSheetScreen />
        {/* 作品集 */}
        <WorksScreen />
      </Content>
    </Page>
  );
}

export default App;
