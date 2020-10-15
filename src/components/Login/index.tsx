import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext, Actions, UserData } from "../../store/store";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(25, 118, 210);
  color: "white";
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const Footer = styled.p`
  font-size: 15px;
  display: flex;
  justify-content: center;
  color: white;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonLogin = styled.button`
  outline: none;
  background-color: #df4a32;
  color: white;
  border: none;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
`;

export default function Login() {
  const { userData, isAuth, dispatch } = useContext(StoreContext);
  const {
    loginWithRedirect,
    user: userAuth0,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  const updateUserData = (userData: UserData) => {
    dispatch({ type: Actions.USER_DATA, payload: userData });
  };

  const updateIsAuth = (_isAuth: boolean) => {
    dispatch({ type: Actions.UPDATE_IS_AUTH, payload: _isAuth });
  };
  React.useEffect(() => {
    console.log(isAuthenticated, userAuth0);

    if (isAuthenticated && userAuth0) {
      updateIsAuth(true);
      updateUserData(userAuth0);
    }
  }, [isAuthenticated, userData]);
  return (
    <Container>
      <Main style={{ flexGrow: 999, width: "100%" }}>
        <div style={{ textAlign: "center", paddingBottom: "100px" }}>
          <svg
            focusable="false"
            viewBox="0 0 24 20"
            aria-hidden="true"
            role="presentation"
            style={{ width: "128px", height: "128px" }}
          >
            <g>
              <g>
                <path
                  d="M5.5,8.001c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5S7,5.674,7,6.501S6.327,8.001,5.5,8.001z M5.5,6.001    c-0.275,0-0.5,0.224-0.5,0.5s0.225,0.5,0.5,0.5S6,6.777,6,6.501S5.775,6.001,5.5,6.001z"
                  fill="#FFFFFF"
                />
              </g>
              <g>
                <path
                  d="M11.5,8.001c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5S12.327,8.001,11.5,8.001z M11.5,6.001    c-0.275,0-0.5,0.224-0.5,0.5s0.225,0.5,0.5,0.5s0.5-0.224,0.5-0.5S11.775,6.001,11.5,6.001z"
                  fill="#FFFFFF"
                />
              </g>
              <g>
                <path
                  d="M21.5,22.001c-0.076,0-0.152-0.017-0.224-0.053l-2.479-1.24c-0.752,0.194-1.523,0.292-2.297,0.292    c-4.136,0-7.5-2.691-7.5-6s3.364-6,7.5-6s7.5,2.691,7.5,6c0,1.783-1.007,3.482-2.715,4.616l0.679,1.699    c0.077,0.192,0.027,0.413-0.125,0.554C21.744,21.956,21.623,22.001,21.5,22.001z M18.851,19.677c0.077,0,0.153,0.018,0.224,0.053    l1.473,0.736L20.201,19.6c-0.093-0.23-0.002-0.493,0.212-0.617C22.057,18.023,23,16.572,23,15.001c0-2.757-2.916-5-6.5-5    s-6.5,2.243-6.5,5s2.916,5,6.5,5c0.747,0,1.492-0.103,2.216-0.306C18.76,19.683,18.806,19.677,18.851,19.677z "
                  fill="#FFFFFF"
                />
              </g>
              <g>
                <path
                  d="M2.5,18.001c-0.125,0-0.248-0.047-0.344-0.137c-0.16-0.151-0.202-0.39-0.104-0.587l1.033-2.067    C1.119,13.781,0,11.722,0,9.501c0-4.136,3.925-7.5,8.75-7.5c3.894,0,7.261,2.146,8.378,5.342c0.055,0.154,0.029,0.326-0.066,0.458    c-0.097,0.133-0.254,0.193-0.414,0.207l-0.131-0.451L16.5,7.563v0.438c-4.687,0-8.5,3.14-8.5,7c0,0.432,0.053,0.876,0.156,1.319    c0.036,0.158-0.006,0.325-0.114,0.446c-0.107,0.121-0.261,0.185-0.43,0.164c-0.773-0.087-1.519-0.258-2.219-0.507l-2.646,1.512    C2.671,17.98,2.585,18.001,2.5,18.001z M8.75,3.001C4.477,3.001,1,5.917,1,9.501c0,2.012,1.094,3.88,3.001,5.126    c0.213,0.139,0.287,0.415,0.174,0.642l-0.489,0.979l1.415-0.809c0.131-0.074,0.289-0.085,0.428-0.033    c0.484,0.187,0.995,0.331,1.525,0.43C7.018,15.556,7,15.277,7,15.001c0-4.244,3.944-7.726,8.907-7.985    C14.721,4.622,11.886,3.001,8.75,3.001z"
                  fill="#FFFFFF"
                />
              </g>
              <g>
                <circle cx={14} cy="13.001" r={1} fill="#FFFFFF" />
              </g>
              <g>
                <circle cx={19} cy="13.001" r={1} fill="#FFFFFF" />
              </g>
            </g>
          </svg>
          <p
            style={{
              color: "white",
              fontFamily: "Pacifico",
              fontSize: "30px",
              lineHeight: "30px",
              textAlign: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            Chat với người quen =))
          </p>
        </div>
        <div style={{ textAlign: "center", width: "100%" }}>
          <ButtonLogin onClick={() => loginWithRedirect()}>
            Vào chat thôi !
          </ButtonLogin>

          <p
            style={{
              color: "white",
              fontSize: "14px",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            Mọi thông tin cá nhân được bảo vệ
          </p>
          <div>
            <span>Tìm hiểu thêm</span>
          </div>
        </div>
      </Main>
      <Footer>© 2020 tourist199</Footer>
    </Container>
  );
}
