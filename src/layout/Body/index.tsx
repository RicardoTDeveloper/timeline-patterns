import React from "react";
import "./styles.css";

type BodyProps = {
  children: React.ReactNode;
};

export default function Body({ children }: BodyProps) {
  return (
    <div className="scroll-y max-h-custom overflow-y-scroll">{children}</div>
  );
}
