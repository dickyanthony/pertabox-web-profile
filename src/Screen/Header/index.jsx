import React from "react";
import { ItemHeader, NavDesktop, NavMobile, Title } from "../../component";
import { WEB_TITLE } from "../../constant";

const itemHeader = [
  { id: 1, title: "Home", onClick: () => {} },
  { id: 2, title: "About", onClick: () => {} },
  { id: 3, title: "Contact", onClick: () => {} },
];

export default function Header() {
  return (
    <div className="w-full max-w-screen-xl h-20 flex flex-row mt-2 z-20">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <div className="flex items-center">
          <img
            alt="logo"
            src={require("../../assets/logo/pertabox-logo.png")}
            className="w-14 h-14"
          />
          <Title className=" text-slate-50 ml-3 text-xl">{WEB_TITLE}</Title>
        </div>
        <NavMobile item={itemHeader} />
        <NavDesktop item={itemHeader} />
      </nav>
    </div>
  );
}
