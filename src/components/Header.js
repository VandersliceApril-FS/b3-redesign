import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/b3logo.svg'
import { AiOutlineSetting } from "react-icons/ai"
import { FaRegUser } from 'react-icons/fa'

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0 0 1rem 0',
        padding: '1rem',
        maxWidth: '100%'
    },
    title: {
        fontWeight: '300',
        fontSize: '1rem',
        color: 'rgba(175,175,175, 1)'
    },
    logo: {
        width: '4rem',
    },
    toolbarContainer: {

    },
    icon: {
        verticalAlign: 'text-bottom',
        padding: '0 1rem',
        fontSize: '1.4rem',
        color: 'rgba(241, 76, 37, 1)'
    }
}

const Header = () => {
    return(
        <header style={styles.header}>
            <img style={styles.logo} src={Logo} alt='barre3 hub logo'/>
            <h1 style={styles.title}></h1>
            <div style={styles.toolbarContainer}>
                <NavLink to='/Settings'>
                    <AiOutlineSetting style={styles.icon}/>
                </NavLink>
                <NavLink to='/Profile'>
                    <FaRegUser style={styles.icon} />
                </NavLink>
            </div>
        </header>
    )
}

export default Header