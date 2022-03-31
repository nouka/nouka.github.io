import React from "react";
import styled from "styled-components";

const Page = styled.div``;

const WorksScreen = () => (
  <Page>
    <h2>実績</h2>
    <h3>WEB</h3>
    <dl>
      <dt>
        <a href="/web/bookshelf-with-deletion/">Bookshelf</a>
      </dt>
      <dd>
        Firebase Realtime Database と Firebase Storage を使った本棚アプリです。
        元々はフロントエンド講師を担当した際の教材でしたが、学習目的で自身でも開発しました。
      </dd>
      <dt>
        <a href="/web/realtime-chat-with-fav/">
          Firebaseリアルタイムデータベースを使ったチャットシステム
        </a>
      </dt>
      <dd>
        Firebase Realtime Database を使ったチャットアプリです。
        元々はフロントエンド講師を担当した際の教材でしたが、学習目的で自身でも開発しました。
      </dd>
      <dt>
        <a
          href="https://nouka.github.io/price-calculator/"
          target="_blank"
          rel="noreferrer"
        >
          商品価格ディスカウント計算機
        </a>
      </dt>
      <dd>
        React Reduxを使った計算機アプリです。
        Reactの学習用に作成しました。PWAとしてオフラインでも動作するように工夫しました。
        GitHub ActionsとGitHub Pagesを使って自動デプロイしています。
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
      <li>
        <a href="/games/igaguri">IGAGURI</a>
      </li>
      <li>
        <a href="/games/apple-catch">APPLE CATCH</a>
      </li>
      <li>
        <a href="/games/ml-sample">ML SAMPLE</a>
      </li>
    </ul>
  </Page>
);

export default WorksScreen;
