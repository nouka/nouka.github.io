import React from "react";
import styled from "styled-components";

const Page = styled.div``;

const SkillSheetScreen = () => (
  <Page>
    <h2>スキル</h2>
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
    <h2>ツール・開発環境</h2>
    <ul>
      <li>VSCode、AWS Cloud9、Xcode、Android Studio</li>
      <li>Photoshop、Illustrator、AdobeXD</li>
      <li>GitHub、TortoiseSVN、Docker、Vagrant</li>
    </ul>
    <h2>貢献</h2>
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
  </Page>
);

export default SkillSheetScreen;
