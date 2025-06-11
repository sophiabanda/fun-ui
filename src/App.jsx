import './App.css';
import Button from './components/Button';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <Nav />
            <div className="app-content">
                <h1>Hello World!</h1>
                <Button />
            </div>
        </>
    );
}

export default App;
