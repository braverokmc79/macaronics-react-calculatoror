import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";


const Header = () => {
  const dispatch=useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler =(e)=>{    
    e.preventDefault();
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>리덕스 인증</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">내 제품</a>
            </li>
            <li>
              <a href="/">내 매출</a>
            </li>
            <li>
              <button onClick={logoutHandler}>로그아웃</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
