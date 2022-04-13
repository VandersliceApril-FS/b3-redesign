import React from 'react'

const styles = {
    wrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '.5rem',
        gridAutoRows: 'minmax(8rem, auto)',
    },
    one: {
        background: '#FED7B8',
        gridColumn: '1',
        gridRow: '1',
        border: 'none'
    },
    two: {
        background: '#FED7B8',
        gridColumn: '2',
        gridRow: '1',
        border: 'none'
    },
    three: {
        background: '#FED7B8',
        gridColumn: '3',
        gridRow: '1',
        border: 'none'
    },
    four: {
        background: '#FED7B8',
        gridColumn: '1',
        gridRow: '2',
        border: 'none'
    },
    five: {
        background: '#FED7B8',
        gridColumn: '2',
        gridRow: '2',
        border: 'none'
    },
    six: {
        background: '#FED7B8',
        gridColumn: '3',
        gridRow: '2',
        border: 'none'
    },
    seven: {
        background: '#FED7B8',
        gridColumn: '1',
        gridRow: '3',
        border: 'none'
    },
    eight: {
        background: '#FED7B8',
        gridColumn: '2',
        gridRow: '3',
        border: 'none'
    },
    nine: {
        background: '#FED7B8',
        gridColumn: '3',
        gridRow: '3',
        border: 'none'
    },
    sectionTitle: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: '1rem',
        color: '#fff'
    },
    title: {
        fontWeight: '300',
        fontSize: '1rem',
        textAlign: 'center',
        
    }
}

function Library() {
    const pageTitle = 'Instructor Content Library'
    return (
        <section>
            <h2 style={styles.title}>{pageTitle}</h2>
            <div style={styles.wrapper}>
                
                <button style={styles.one}>
                    <h3 style={styles.sectionTitle}>Certification Requirements</h3>
                </button>
                <button style={styles.two}>
                    <h3 style={styles.sectionTitle}>Class Requirements</h3>
                </button>
                <button style={styles.three}>
                    <h3 style={styles.sectionTitle}>Class Templates</h3>
                </button>
                <button style={styles.four}>
                    <h3 style={styles.sectionTitle}>Warm Up</h3>
                </button>
                <button style={styles.five}>
                    <h3 style={styles.sectionTitle}>Leg Work</h3>
                </button>
                <button style={styles.six}>
                    <h3 style={styles.sectionTitle}>Combo</h3>
                </button>
                <button style={styles.seven}>
                    <h3 style={styles.sectionTitle}>B3 Core</h3>
                </button>
                <button style={styles.eight}>
                    <h3 style={styles.sectionTitle}>Strech and Breath</h3>
                </button>
                <button style={styles.nine}>
                    <h3 style={styles.sectionTitle}>barre3 Music</h3>
                </button>
            </div>
        </section>
    )
}

export default Library