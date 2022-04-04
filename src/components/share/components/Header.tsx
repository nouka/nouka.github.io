import React from "react";
import tw from "tailwind-styled-components";

const HeaderInner = tw.header`
  relative
  w-[1024px]
  mx-auto
  py-5
`;

const PageTitle = tw.h1`
  text-2xl
  font-bold
  text-shadow
`;

const SubTitle = tw.h2`
  text-sm
  text-shadow
`;

const Nav = tw.ul`
  absolute
  bottom-5
  right-0
`;

const List = tw.li`
  float-left
  ml-5
  text-sm
`;

const Link = tw.a`
  block
  text-shadow
  hover:underline
`;

const Header = () => (
  <HeaderInner>
    <PageTitle>{process.env.REACT_APP_NAME}</PageTitle>
    <SubTitle>{process.env.REACT_APP_DESCRIPTION}</SubTitle>
    <Nav>
      <List>
        <Link
          href="https://www.facebook.com/noka.blank"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </Link>
      </List>
      <List>
        <Link
          href="https://twitter.com/noka_blank"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </Link>
      </List>
      <List>
        <Link
          href="https://www.wantedly.com/id/nokablank"
          target="_blank"
          rel="noreferrer"
        >
          Wantedly
        </Link>
      </List>
      <List>
        <Link href="https://qiita.com/nouka" target="_blank" rel="noreferrer">
          Qiita
        </Link>
      </List>
      <List>
        <Link href="https://github.com/nouka" target="_blank" rel="noreferrer">
          GitHub
        </Link>
      </List>
      <List>
        <Link href="mailto: noka.blank@gmail.com">Mail</Link>
      </List>
    </Nav>
  </HeaderInner>
);

export default Header;
