import { FC } from "react";
import Navbar from "./Navbar";

interface ITemplate {
  children?: any;
}

const Template: FC<ITemplate> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Template;
