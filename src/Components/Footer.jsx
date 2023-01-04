import React from "react";
import logoLight from "../Assets/ps copy.png";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaInstagramSquare,
  FaFacebook,
  FaTwitter,
  FaEnvelopeSquare,
  FaMapMarker,
  FaWhatsapp,
} from "react-icons/fa";

export let socials = [
  {
    icon: <FaWhatsapp size={24} />,
    url: "https://wa.link/vemnuc",
  },
  {
    icon: <FaInstagramSquare size={24} />,
    url: "https://instagram.com/honourworld?igshid=YmMyMTA2M2Y=",
  },
  {
    icon: <FaFacebook size={24} />,
    url: "https://www.facebook.com/profile.php?id=100089022584103",
  },
  {
    icon: <FaTwitter size={24} />,
    url: "https://twitter.com/p_smartbills?s=21&t=GfoSMDaA28b2AyvoDSt8zA",
  },
  {
    icon: <FaTwitter size={24} />,
    url: "https://twitter.com/p_smartbills?s=21&t=GfoSMDaA28b2AyvoDSt8zA",
  },
];

export let details = [
  { icon: <FaPhone />, text: "+2348065498200", type: "tel" },
  {
    icon: <FaEnvelopeSquare />,
    text: "ailerufiyinfoluwa@gmail.com",
    type: "mail",
  },
  {
    icon: <FaMapMarker />,
    text: "praise smartbills",
    type: "address",
  },
  {
    icon: <FaFacebook />,
    text: "praise smartbills",
    type: "address",
  },
  {
    icon: <FaWhatsapp />,
    text: "+2348065498200",
    type: "address",
  },
  {
    icon: <FaTwitter />,
    text: "praise smartbills",
    type: "address",
  },
  {
    icon: <FaInstagramSquare />,
    text: "praise smartbills",
    type: "address",
  },
];
const Footer = () => {
  let quick = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    // { name: "Blog", url: "/blogs" },
    { name: "About Us", url: "/about" },
  ];

  let resources = [
    { name: "Data services" },
    { name: "Airtime Services" },
    { name: "TV Subscription" },
    { name: "Cable Subscription" },
    { name: "Subscription" },
  ];

  return (
    <footer className="bg-select-2 page-footer  p-3">
      <div className="container text-white">
        <div className="footerDiv py-5">
          <div>
            <Link
              to="/"
              className="text-decoration-none text-white d-flex align-items-center mb-5"
            >
              {<img
                src={logoLight}
                alt="Honourworld"
                className="logo me-1 logo-img-size"
              />}
              {/*<div className="">
                <p className="text-capitalize m-0 text-light">praise</p>
                <p className="text-capitalize m-0 site-secondary-color">
                  smartbills
                </p>
              </div>*/}
            </Link>
            {/* <div className="d-none d-md-block fontReduce">
							We are the #MOVEMENT People Your Trusted Logistics Aggregator
						</div> */}
          </div>
          <div>
            <h5>Explore</h5>
            <ul className="list-group border-0">
              {quick.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item border-0 bg-transparent"
                >
                  <Link
                    to={item.url}
                    className="text-white text-decoration-none fontReduce"
                  >
                    {item.name}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 pt-md-0">
            <h5>Our services</h5>
            <ul className="list-group border-0">
              {resources.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item border-0 bg-transparent"
                >
                  <p className="text-white text-decoration-none fontReduce">
                    {item.name}
                  </p>{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="d-none d-md-block">
            <h5>Contact Us</h5>
            <ul className="list-group border-0">
              {details.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item border-0 bg-transparent text-white d-flex align-items-center"
                >
                  {item.icon}
                  <p className="ms-3">
                    {item?.type === "tel" ? (
                      <>
                        <a
                          className="text-white text-decoration-none fontReduce"
                          href={`tel:${item?.text}`}
                        >
                          {item?.text}
                        </a>
                      </>
                    ) : item?.type === "mail" ? (
                      <>
                        <a
                          className="text-white text-decoration-none fontReduce"
                          href={`mail:${item?.text}`}
                        >
                          {item?.text}
                        </a>
                      </>
                    ) : item?.type === "address" ? (
                      <>
                        <a
                          className="text-white text-decoration-none fontReduce"
                          target={"_blank"}
                          rel="noreferrer"
                          href={`https://www.google.com/maps/place/?q=place_id=${
                            details?.[details?.length - 1]?.text
                          }`}
                        >
                          {item?.text}
                        </a>
                      </>
                    ) : (
                      <></>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 d-none pt-md-0">
            <h5>Socials</h5>
            <ul className="list-group border-0 list-group-horizontal">
              {socials.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item border-0 bg-transparent text-white d-flex align-items-center"
                >
                  <a
                    className="text-white text-decoration-none fontReduce"
                    target={"_blank"}
                    rel="noreferrer"
                    href={item?.url}
                  >
                    {item?.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <p className="m-0 fontReduce text-center">
            All rights reserved.
            <span className="mx-1">
              &copy; {`${new Date().getFullYear() !== 2022 ? "2022 - " : ""}`}
              {new Date().getFullYear()}
            </span>
            &nbsp;{" "}
            <span className="d-block d-lg-inline">praise smartbills</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
