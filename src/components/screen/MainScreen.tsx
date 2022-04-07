import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Direction, DirectionType } from "../../types/Direction";
import { Position } from "../../types/Position";
import { getDirection, inRange, range } from "../../utils";
import Dialog from "../share/components/Dialog";
import Player from "../share/components/Player";
import useWindowEvent from "../share/hooks/WindowEvent";
import TileGrass from "../../assets/tile-grass.png";
import Goddes from "../share/components/Goddes";

const stageWidth = 1024;
const stageHeight = 768;

const Content = styled.div`
  background-image: url(${TileGrass});
  position: relative;
  margin: auto;
  width: ${stageWidth}px;
  height: ${stageHeight}px;
`;

const MainScreen = () => {
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
      x: range(e.pageX - ref.current.offsetLeft, 0, ref.current.offsetWidth),
      y: range(e.pageY - ref.current.offsetTop, 0, ref.current.offsetHeight),
    };
    setDirection(getDirection(position, nextPosition));
    setPosition(nextPosition);
  };
  useWindowEvent("mousedown", handleMouseDown, []);
  const playerPosition = { x: position.x, y: position.y };
  return (
    <Content ref={ref}>
      <Player position={playerPosition} speed={2} direction={direction} />
      <Goddes position={{ x: stageWidth / 2 - 100, y: stageHeight / 2 }} />
      <Dialog title="経歴">
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
      </Dialog>
      <Dialog title="趣味">
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
      </Dialog>
      <Dialog title="スキル">
        <ul>
          <li>PHP（8年）</li>
          <li>HTML（10年）</li>
          <li>CSS（10年）</li>
          <li>JavaScript（10年）</li>
          <li>TypeScript（4年）</li>
          <li>CodeIgniter（8年）</li>
          <li>ZendFramework（8年）</li>
          <li>Symfony（6年）</li>
          <li>React（5年）</li>
          <li>Redux（5年）</li>
          <li>ReactNative（3年）</li>
          <li>Vue（1年）</li>
          <li>jQuery（8年）</li>
          <li>AWS（8年）</li>
          <li>MySQL（8年）</li>
        </ul>
      </Dialog>
      <Dialog title="ツール・開発環境">
        <ul>
          <li>VSCode、AWS Cloud9、Xcode、Android Studio</li>
          <li>Photoshop、Illustrator、AdobeXD</li>
          <li>GitHub、TortoiseSVN、Docker、Vagrant</li>
        </ul>
      </Dialog>
      <Dialog title="貢献">
        <dl>
          <dt>新型コロナウィルス感染症対策サイト</dt>
          <dd>
            <a
              href="https://stopcovid19.metro.tokyo.lg.jp/"
              target="_blank"
              rel="noreferrer"
            >
              https://stopcovid19.metro.tokyo.lg.jp/
            </a>
          </dd>
        </dl>
      </Dialog>
      <Dialog title="実績">
        <>
          <h3>WEB</h3>
          <dl>
            <dt>
              <a href="/web/bookshelf-with-deletion/">Bookshelf</a>
            </dt>
            <dd>
              Firebase Realtime Database と Firebase Storage
              を使った本棚アプリです。
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
        </>
      </Dialog>
    </Content>
  );
};
export default MainScreen;
