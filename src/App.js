import logo from './logo.svg';
import './App.css';

function App() {        
    const planets = [
        { name: 'Earth', isGasPlanet: false },
        { name: 'Jupiter', isGasPlanet: true },
        { name: 'Mars', isGasPlanet: false },
        { name: 'Saturn', isGasPlanet: true },
        { name: 'Uranus', isGasPlanet: true },
    ];
    return (
        <div className='App'>
            {planets.map((planet, index)=>{
                if(planet.isGasPlanet) return <h1>{planet.name}</h1>
            })}
        </div>
    );
}

const Job = (props) => {
    return (
        <div>
            <h1>{props.salary}</h1>
            <h1>{props.position}</h1>
            <h1>{props.company}</h1>
        </div>
    );
};

export default App;
