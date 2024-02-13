import React from "react";
import { Description, Map, Title } from "../../component";

export default function BarbershopMap() {
  return (
    <div className="mt-10">
      <Title className="text-4xl"> Find Us</Title>
      <div className="flex flex-1 w-full justify-between mt-4">
        <div className="flex-1 ">
          <Title className="text-2xl text-start">Address</Title>
          <Description className="text-start">
            SPBU Baloi Taman Kota (Samping ATM Centre)
          </Description>
          <Description className="text-start">
            Open Daily | 9.30-21.30 wib
          </Description>
          <Title className="text-2xl mt-5 text-start">Contact Us</Title>
          <Description className="text-start">082122133189</Description>
        </div>
        <div className="flex-1"></div>
        <Map className="w-96 h-96" />;
      </div>
    </div>
  );
}
