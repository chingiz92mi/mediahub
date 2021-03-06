import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch, IndexRoute} from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Movie from './components/Movie/Movie';
import Music from './components/pages/music';
import Video from './components/pages/video';

const error = () => {
    return(
        <div className="comingsoonDiv">
            <p className="comingsoon">error 404</p>
        </div>
    );
};

class App extends Component {
    render() {
        return(
            <div>
            <HashRouter>
                <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/movie" component={Movie} />
                        <Route path="/video" component={Video} />
                        <Route path="/music" component={Music} />
                        <Route component={error} />
                    </Switch>
                </div>
                </BrowserRouter>     
            </HashRouter>
                       
            </div>
        );
    }
}

export default App;