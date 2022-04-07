import React, { useState } from "react";

type Props = {
  button: (toggleOpen: () => void) => React.ReactElement;
  details: React.ReactElement;
  open?: boolean;
};

const Collapse = (props: Props) => {
  const [open, setOpen] = useState(props.open || false);
  const toggleOpen = () => setOpen(!open);
  return (
    <>
      {props.button(toggleOpen)}
      {open && props.details}
    </>
  );
};

export default Collapse;
