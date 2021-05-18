// To hold paths
import { Route, Switch } from 'react-router';
import Homepage from './components/Homepage.js';
import Aboutpage from './components/Aboutpage.js';
import Navbar from './components/Navbar.js';
import Blogspage from './components/Blogspage.js';

function App() {
  return (<>
            <Navbar/>
            {/* add paths here */}
              <Switch>
                  <Route exact path = '/' component={Homepage} />
                  <Route exact path = '/blogs' component={Blogspage} />
                  <Route exact path = '/about' component={Aboutpage} />

              </Switch>
          </>
  );
}

export default App;
