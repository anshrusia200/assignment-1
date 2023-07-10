import React, { useState, useEffect } from "react";
import { LandingSec1 } from "../components/LandingSec1";
import { LandingSec2 } from "../components/LandingSec2";
import { Box } from "@chakra-ui/react";
export const Landing = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    setCompanies([
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002416/airtel_drdc0m.png",
        name: "Airtel",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002394/UBA_tfzezv.png",
        name: "UBA",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002394/paga_umy8jv.png",
        name: "Paga",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002393/MTN_swgeyw.png",
        name: "MTN",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002417/dangote_cvok56.png",
        name: "Dangote",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002393/firstBank_wosrta.png",
        name: "FirstBank",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002393/gc_nubyk2.png",
        name: "googleCloud",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002392/ebay_l99fwh.png",
        name: "Ebay",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002393/linux_wqbjep.png",
        name: "Linux",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002394/spotify_aiugca.png",
        name: "Spotify",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002416/airbnb_gxpmzj.png",
        name: "Airbnb",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002393/fb_kktncx.png",
        name: "Facebook",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002416/cocaCola_s8xdf7.png",
        name: "CocaCola",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002394/zoom_erxnjr.png",
        name: "Zoom",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002416/adobe_lst6kr.png",
        name: "AdobeCloud",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002394/netflix_lxcron.png",
        name: "Netflix",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002392/discord_nggx9b.png",
        name: "Discord",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002393/Figma_qgau9s.png",
        name: "Figma",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002394/Paypal_qa7cax.png",
        name: "PayPal",
      },
      {
        link: "https://res.cloudinary.com/appcloudansh/image/upload/v1689002416/Adobe2_tuazrx.png",
        name: "Adobe",
      },
    ]);
  }, []);

  return (
    <Box>
      <LandingSec1 />
      <LandingSec2 sponsors={companies} />
    </Box>
  );
};
