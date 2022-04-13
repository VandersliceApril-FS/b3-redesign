import React from 'react'

const styles = {
    wrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '.25rem',
        gridAutoRows: 'minmax(13rem, auto)'
    },
    one: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '1 / 7',
        gridRow: '1',
        padding: '.75rem'
    },
    two: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '1 / 3',
        gridRow: '2',
        padding: '.75rem'
    },
    three: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '3 / 5',
        gridRow: '2',
        padding: '.75rem'
    },
    four: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '5 / 7',
        gridRow: '2',
        padding: '.75rem'
    },
    five: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '1 / 4',
        gridRow: '3',
        padding: '.75rem'
    },
    six: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '4 / 7',
        gridRow: '3',
        padding: '.75rem'
    },
    seven: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '7 / 9',
        gridRow: '1 / span 3',
        display: 'flex',
        flexDirection: 'column',
        padding: '.75rem'
    },
    title: {
        fontWeight: '300',
        fontSize: '1rem',
        textAlign: 'center'
    }
}

function Home() {
    const pageTitle = 'Home'
    return (
        <section>
            <h2 style={styles.title}>{pageTitle}</h2>
            <div style={styles.wrapper}>
                <div style={styles.one}>
                    
                </div>
                <div style={styles.two}>
                    
                </div>
                <div style={styles.three}>
                    
                </div>
                <div style={styles.four}>
                    
                </div>
                <div style={styles.five}>
                    
                </div>
                <div style={styles.six}>
                    
                </div>
                <div style={styles.seven}>
                    
                </div>
            </div>
        </section>
    )
}

export default Home