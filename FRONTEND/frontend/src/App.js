
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
  <Router>
    
       {/* <Header/>
       <Footer/> */}
       {/* NavBar */}
       {/* SideDrawer */}
       <main>
         <Switch>
           <Route exact path="/" component={HomeScreen} />
           <Route exact path="/item/:id" component={ItemScreen} />
           <Route exact path="/cart" component={CartScreen} />
         </Switch>
       </main>

    </Router>
  );
}

export default App;
