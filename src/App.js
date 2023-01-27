import AnchorLink from "react-anchor-link-smooth-scroll";
import WelcomePage from "./WelcomePage";
  
function App() { 
  return (
    <div className="App">
     <h1 align ="center">Welcome To An Empty HomePage</h1>
     <h2 align="center">
     <AnchorLink href='#services'><button>Services</button></AnchorLink>
     <AnchorLink href='#contact'><button>Contact</button></AnchorLink>
     </h2>
     <WelcomePage/>
    </div>
  );
}
  
export default App;