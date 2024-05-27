import { MdOutlineExplore } from "react-icons/md";

const { FaRegHeart, FaFacebookMessenger, FaSearch } = require("react-icons/fa");
const { IoHome, IoSearch } = require("react-icons/io5");

export const LEFT_SIDEBAR_LINKS = [
    {
        id:1,
        title:"Home",
        icon:<IoHome size={26} />,
    },
    {
        id:2,
        title:"Search",
        icon:<FaSearch size={26} />,
    },
    {
        id:3,
        title:"Explore",
        icon:<MdOutlineExplore size={26} />,
    },
    {
        id:4,
        title:"Notification",
        icon:<FaRegHeart size={26} />,
    },
    {
        id:5,
        title:"Messages",
        icon:<FaFacebookMessenger size={26} />,
    },
    {
        id:6,
        title:"Profile",
        icon:<img src="https://avatar.iran.liara.run/public/38" height={30} width={30} alt="Avatar"/>
    }
];