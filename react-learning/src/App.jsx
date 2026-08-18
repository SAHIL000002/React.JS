import Greet from "./greet";
import Home from "./home";

function App() {
    const name = "Sahil";
    let roll = 50;
    return (
        <>
        <Greet name ="sahil"  />
        <Greet name ="aryan"  />
        <Greet name ="aman"  />
            <h1>Hello {name} your roll no. is {roll} 👋</h1>
            <p>Welcome to my React journey!</p>
            <Home/>
        </>
    );
}

export default App;
