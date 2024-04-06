import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from './components/Header';
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";


function App() {
  const  isAuth= useSelector(state=>state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth /> }
      {isAuth && <UserProfile /> }
      <Counter />

      <Footer/>
    </Fragment>
  );
}

export default App;
