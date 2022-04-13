import React from 'react'

const styles = {
    title: {
        fontWeight: '300',
        fontSize: '1rem',
        textAlign: 'center'
    }
}

function Profile() {
    const pageTitle = 'Profile'
    return (
        <h2 style={styles.title}>{pageTitle}</h2>
    )
}

export default Profile