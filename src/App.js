// To hold paths
import { Route, Switch } from 'react-router';
import Homepage from './components/Homepage.js';
import Aboutpage from './components/Aboutpage.js';
import Navbar from './components/Navbar.js';
import Blogspage from './components/Blogspage.js';
import ContactUs from './components/ContactUs.js';
import Footer from './components/Footer.js';

function App() {
  return (<>
            <Navbar/>
            {/* add paths here */}
              <Switch>
                  <Route exact path = '/' component={Homepage} />
                  <Route exact path = '/blogs' component={Blogspage} />
                  <Route exact path = '/about' component={Aboutpage} />
                  <Route exact path = '/contactus' component={ContactUs}/>

              </Switch>
              <Footer/>
          </>
  );
}

export default App;
