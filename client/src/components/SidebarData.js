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
        title: 'Cadastro',
        path: '/cadastro',
        icon: <FaIcons.FaUserPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Projetos',
        path: '/listaprojetos',
        icon: <FaIcons.FaElementor />,
        cName: 'nav-text'
    },
    {
        title: 'Sobre',
        path: '/about',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]