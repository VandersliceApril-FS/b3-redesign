import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Routes from './components/Routes'
import { BrowserRouter as Router} from 'react-router-dom'

const styles = {
  container: {
    maxWidth: '65rem',
    minWidth: '30rem',
    margin: '0 auto',
  },
  wrapper: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'flex-start',
    
  },
  sideNav: {
    width: '20%'
  },
  main: {
    marginRight: '1rem',
    width: 'calc(80% - 1rem)',
    padding: '2rem',
    backgroundColor: '#FEF8F0'
  }
}

function App() {
  return (
    <Router>
      <div style={styles.container}>
      <Header />
      <div style={styles.wrapper}>
        <div style={styles.sideNav}>
              <Nav />    
          </div>
          <main style={styles.main}>
            <Routes />
          </main>
        </div>
      </div>  
        
    </Router>   
  );
}

export default App;