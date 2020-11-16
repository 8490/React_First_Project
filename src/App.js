import Movie from "./Movie";
import MovieDetail from "./MovieDetail";

import Navbar from "./components/Navbar"

import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/detail/:id" component={MovieDetail} exact/>
                <Route path="/" component={Movie} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;