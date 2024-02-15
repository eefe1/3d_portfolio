import { BrowserRouter } from "react-router-dom";
import {
 
  Hero,
  Navbar,
  Works,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className=" bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Works />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
