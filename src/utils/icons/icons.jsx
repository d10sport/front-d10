import icon_wpp_color from "@assets/icons/icon_wpp_color.png";
import icon_fdc_col from "@assets/icons/logo_fc_col.png";

import icon_d10_mas from "@assets/icons/d10mas.png";
import icon_d10 from "@assets/icons/logo_company.png";

import wpp from "@assets/icons/logo_wpp.png";

function IconInstagram() {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M16.5 7.5v.01" />
      </svg>
    </>
  );
}

function IconWhatsApp() {
  return <img src={wpp} alt="WhatsApp Logo" className="img__wpp" />;
}

function IconFdcCol() {
  return (
    <img
      width={70}
      height={70}
      src={icon_fdc_col}
      alt="icon"
      className="img__footer"
    />
  );
}

function IconD10Mas() {
  return (
    <img
      width={70}
      height={70}
      src={icon_d10_mas}
      alt="icon"
      className="img__footer"
    />
  );
}

function IconD10() {
  return (
    <img
      width={70}
      height={70}
      src={icon_d10}
      alt="icon"
      className="img__footer"
    />
  );
}

function IconWppColor() {
  return <img src={icon_wpp_color} alt="WhatsApp Logo" className="img__wpp" />;
}

export { IconFdcCol, IconInstagram, IconWhatsApp, IconWppColor, IconD10Mas, IconD10 };
