import React from "react";
import styled from "styled-components";

const Page = styled.div``;

const WorksScreen = () => (
  <Page>
    <h2>実績</h2>
    <h3>WEB</h3>
    <dl>
      <dt>Firebaseリアルタイムデータベースを使ったチャットシステム</dt>
      <dd></dd>
      <dt>商品価格ディスカウント計算機</dt>
      <dd>
        <a
          href="https://nouka.github.io/price-calculator/"
          target="_blank"
          rel="noreferrer"
        >
          https://nouka.github.io/price-calculator/
        </a>
      </dd>
    </dl>
    <h3>GAME</h3>
    <ul>
      <li>
        <a href="/games/cat-escape">CAT ESCAPE</a>
      </li>
      <li>
        <a href="/games/climb-cloud">CLIME CLOUD</a>
      </li>
    </ul>
  </Page>
);

export default WorksScreen;
