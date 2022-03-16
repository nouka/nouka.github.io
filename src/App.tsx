import React from "react";
import styled from "styled-components";
import TileGrass from "./assets/tile-grass.png";
import TilesetGrass from "./assets/tileset-grass.png";
import BasicScreen from "./components/screen/BasicScreen";
import ProfileScreen from "./components/screen/ProfileScreen";
import SkillSheetScreen from "./components/screen/SkillSheetScreen";
import WorksScreen from "./components/screen/WorksScreen";

const Page = styled.div`
  background-image: url(${TileGrass});
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 100;
`;

const GrassFlower = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  background-image: url(${TilesetGrass});
  background-position: -128px 0;
  background-repeat: no-repeat;
  z-index: 10;
`;

function App() {
  return (
    <Page>
      {(() => {
        for (let i = 0; i <= 10; i++) {
          let left = Math.random() * document.body.clientWidth * 64;
          let top = Math.random() * document.body.clientHeight * 64;
          return <GrassFlower style={{ top: top, left: left }} />;
        }
      })()}
      <Content>
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
