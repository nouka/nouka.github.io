import React from "react";
import tw from "tailwind-styled-components";
import Collapse from "./Collapse";

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
  open?: boolean;
};

const Dialog = (props: Props) => {
  return (
    <Collapse
      button={(toggleOpen) => (
        <Title onClick={() => toggleOpen()}>{props.title}</Title>
      )}
      details={<Content>{props.children}</Content>}
    />
  );
};

export default Dialog;
