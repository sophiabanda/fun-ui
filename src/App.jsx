import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Card from './components/Card';

function App() {
    return (
        <>
            <Nav />
            <div className="app-content">
                <Card />
            </div>
            <Footer />
        </>
    );
}

export default App;
