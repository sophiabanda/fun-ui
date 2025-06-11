import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <Nav />
            <div className="app-content">
                <h1>Hello World!</h1>
                <Button />
            </div>
            <Footer />
        </>
    );
}

export default App;
