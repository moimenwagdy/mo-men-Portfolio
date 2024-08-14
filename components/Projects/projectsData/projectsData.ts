import violetLanding from "@/public/violetLanding.png";
import mySpotify from "@/public/mySpotify.png";
import { StaticImageData } from "next/image";

interface project {
  id: string;
  title: string;
  description: string;
  imgSrc: StaticImageData;
  imgTitle: string;
  technologies: string[];
  usageGuide: string;
  gitUrl: string;
  liveUrl: string;
}

const projects: project[] = [
  {
    id: "violetStore",
    title: "Violet Store",
    description: "E-commerce website",
    imgSrc: violetLanding,
    imgTitle: "violetShop",
    technologies: [
      "Products API -",
      "TypeScript -",
      "React.js -",
      "ReduxToolkit -",
      "React-Query -",
      "React-Router -",
      "TailwindCSS -",
      "Framer-motion",
    ],
    usageGuide: `You can browse suggested products based on discounts, 
        ratings, and search popularity. The Products page allows you to filter 
        and view all items, and you can check detailed information and related products. 
        Manage your cart after logging in or use " Login as Viewer " for quick access. 
        The Search page helps you find products by entering relevant text. Navigate easily 
        with the menu, where you can also sign up, log in, or log out. `,
    gitUrl: "https://github.com/moimenwagdy/violetShop",
    liveUrl: "https://violetshop.netlify.app/",
  },
  {
    id: "mySpotify",
    title: "mySpotify",
    description: "E-commerce website",
    imgSrc: mySpotify,
    imgTitle: "mySpotifyImg",
    technologies: [
      "Official spotify API -",
      "TypeScript -",
      "React.js -",
      "ReduxToolkit -",
      "React-Query -",
      "React-Router -",
      "TailwindCSS -",
      "Framer-motion",
    ],
    usageGuide: `Dive into music categories to
     browse playlists and tracks, or use the search feature to find your 
     favorite tracks, playlists, albums, or artists. Listen to tracks, and by 
     clicking the albums button, you’ll be directed to the current track's artist's 
     albums. You can save tracks to your playlist using the 'Save to Playlist' option or 
     remove them as needed. Create your own playlists by clicking the
     'Playlists' link in the navigation bar.`,
    gitUrl: "https://github.com/moimenwagdy/mySpotify",
    liveUrl: "https://main--myspotfy.netlify.app/",
  },
];

export default projects;
