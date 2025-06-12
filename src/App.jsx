import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Card from './components/Card';

function App() {
    return (
        <>
            <Nav />
            <div className="app-content">
                <h1>Hello World!</h1>
                <Button />
                <Card />
            </div>
            <Footer />
        </>
    );
}

export default App;
