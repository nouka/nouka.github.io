import React from "react";
import styled from "styled-components";

const Page = styled.div``;

const BasicScreen = () => (
  <Page>
    <dl>
      <dt>Facebook</dt>
      <dd>
        <a
          href="https://www.facebook.com/noka.blank"
          target="_blank"
          rel="noreferrer"
        >
          https://www.facebook.com/noka.blank
        </a>
      </dd>
      <dt>Twitter</dt>
      <dd>
        <a
          href="https://twitter.com/noka_blank"
          target="_blank"
          rel="noreferrer"
        >
          https://twitter.com/noka_blank
        </a>
      </dd>
      <dt>Wantedly</dt>
      <dd>
        <a
          href="https://www.wantedly.com/id/nokablank"
          target="_blank"
          rel="noreferrer"
        >
          https://www.wantedly.com/id/nokablank
        </a>
      </dd>
      <dt>Qiita</dt>
      <dd>
        <a href="https://qiita.com/nouka" target="_blank" rel="noreferrer">
          https://qiita.com/nouka
        </a>
      </dd>
      <dt>GitHub</dt>
      <dd>
        <a href="https://github.com/nouka" target="_blank" rel="noreferrer">
          https://github.com/nouka
        </a>
      </dd>
      <dt>Mail</dt>
      <dd>
        <a href="mailto: noka.blank@gmail.com">noka.blank@gmail.com</a>
      </dd>
    </dl>
  </Page>
);

export default BasicScreen;
