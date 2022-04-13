import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
    navigation: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content'
    },
    menuItem: {
        color: '#5b6271',
        padding: '.5rem 0',
        margin: '1.5rem',
        textDecoration: 'none',
        fontWeight: '400',
        fontSize: '1.2rem',
    },
    icon: {
        verticalAlign: 'text-bottom',
        padding: '0 1rem',
        fontSize: '1rem'
    }
}

const Nav = () => {
    return (
        <nav style={styles.navigation}>
            <NavLink 
                to='/Home'
                style={styles.menuItem}
                activeStyle={{
                    color: '#2a2d34',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(241, 76, 37, 1)',
                    textDecorationThickness: '.15em'
                }}
                >
                Home
            </NavLink>
            <NavLink  to='/Library' 
                style={styles.menuItem}
                activeStyle={{
                    color: '#2a2d34',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(241, 76, 37, 1)',
                    textDecorationThickness: '.15em'
                }}
                >
                Library
            </NavLink>
            <NavLink  to='/Profile' 
                style={styles.menuItem}
                activeStyle={{
                    color: '#2a2d34',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(241, 76, 37, 1)',
                    textDecorationThickness: '.15em'
                }}
                >
                Profile
            </NavLink>
            <NavLink to='/Settings' 
                style={styles.menuItem}
                activeStyle={{
                    color: '#2a2d34',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(241, 76, 37, 1)',
                    textDecorationThickness: '.15em'
                }}
                >
                Settings
            </NavLink>
        </nav>
    )
}

export default Nav;