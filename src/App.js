import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import CoinPage from "./Pages/coinPage";
import HomePage from "./Pages/homePage";
import {makeStyles} from  "@material-ui/core";

function App() {

  const useStyles=makeStyles(()=>({
    App:{
      backgroundColor:"#14161a",
      color:"white",
      height:"100%"
    }
  }))

  const classes=useStyles()


  return (
    <div className="App" className={classes.App}>
      <Header/>
      <Router>
          <Route path="/" component={HomePage}exact/>
          <Route path="/coins/:id" component={CoinPage}/>
      </Router>
    </div> 
  );
}

export default App;
