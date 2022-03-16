import React from "react";
import styled from "styled-components";

const Page = styled.div``;

const ProfileScreen = () => (
  <Page>
    <h2>経歴</h2>
    <ul>
      <li>
        大学時代はグラフィックデザインを専攻。CGアート研究会を立ち上げ展示会を開催する。
      </li>
      <li>
        能登印刷株式会社に就職。WEBデザイン部門でホームページの企画提案とデザイン・コーディングを担当。
      </li>
      <li>
        株式会社オズビジョンに転職。エンジニアに転向し、WEBアプリケーションの開発と運用、スマートフォンアプリの新規開発を担当。
      </li>
      <li>
        マネジメント職として開発チームの目標管理、メンバーの評価、ソースコードレビュー、ソフトウェアテスト、アジャイルソフトウェア開発の導入を担当。
      </li>
      <li>副業でTechAcademyフロントエンド講師を務める。</li>
    </ul>
    <h2>趣味</h2>
    <ul>
      <li>
        好きな本：「コードコンプリート」「リーダブルコード」「レガシーコード改善ガイド」「JavaScript:
        The Good Parts」「メンタルブロックバスター」
      </li>
      <li>
        好きなゲーム：「クロノトリガー」「スーパーマリオRPG」「ガイア幻想紀」「天地創造」「MOTHER2」「ゼノギアス」
      </li>
      <li>好きなプログラミング言語：「TypeScript」「C#」</li>
      <li>社会人バンドでベーシストをやっていたことがある。</li>
      <li>運動全般苦手だがスノーボードだけは得意。</li>
      <li>最近は愛犬にべったり。</li>
    </ul>
  </Page>
);

export default ProfileScreen;
