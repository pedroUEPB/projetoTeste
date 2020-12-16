import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Meus Dados',
        path: '/dados',
        icon: <FaIcons.FaAddressCard />,
        cName: 'nav-text'
    },
    {
        title: 'Projetos',
        path: '/listaprojetos',
        icon: <FaIcons.FaTasks />,
        cName: 'nav-text'
    },
    {
        title: 'Sobre',
        path: '/about',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Sair',
        path: '/',
        icon: <FaIcons.FaSignInAlt />,
        cName: 'nav-text'
    }
]