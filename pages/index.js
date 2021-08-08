import axios from "axios";
import { useState } from "react";

import CookieStandAdmin from "../components/cookiestandadmin";
import LoginForm from "../components/loginform";

const baseUrl = "https://cookie-stand-api.herokuapp.com";
const tokenUrl = baseUrl + "/api/token/";
const refreshToken = baseUrl + "/api/token/refresh";

export default function Home(props) {
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  async function getToken(credentials) {
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
    setRefreshToken(fetchedToken.data.refresh);
  }

  function signouthandler() {
    setToken("");
  }

  function loginHandler(credentials) {
    getToken(credentials);
  }

  if (token)
    return <CookieStandAdmin token={token} signouthandler={signouthandler} />;

  return <LoginForm loginHandler={loginHandler} />;
}
