import React from "react";

// const phoneNumber = "082122133189";
const phoneNumber = "08995326492";
const message = "Halo Pertabox, Saya ingin melakukan reservasi";
export default function FloatingWhatsapp() {
  return (
    <a
      className="fixed z-20 bottom-2 right-2 md:bottom-8 md:right-8"
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="-rotate-90 w-7 h-7 md:w-14 md:h-14"
        alt="contact-us"
        src={require("../assets/logo/whatsapp-logo.png")}
      />
    </a>
  );
}
