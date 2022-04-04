import React from "react";
import tw from "tailwind-styled-components";

const Title = tw.h3`
  bg-black
  text-white
  border-white
  border-2
  rounded
  px-2
  py-1
`;

const Content = tw.div`
  bg-black
  text-white
  border-white
  border-2
  rounded
  p-5
`;

type Props = {
  children: React.ReactNode;
  title: string;
  open: boolean;
};

const Dialog = (props: Props) => {
  return (
    <>
      <Title>{props.title}</Title>
      {props.open && <Content>{props.children}</Content>}
    </>
  );
};

export default Dialog;
