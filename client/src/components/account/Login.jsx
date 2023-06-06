import React, { useState, useEffect, useContext } from "react";
import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 1, 0.4);
`;

const Image = styled("img")`
  width: 100px;
  display: flex;
  margin: auto;
  padding: 50px 0 0;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #54b0c7;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #54b0c7;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState("");
  const [account, toggleAccount] = useState("login");
  const [isLoading, setLoading] = useState(false);
  const [activeInput, setActiveInput] = useState("");
  
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const imageURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSX-fmJzHgXIZO0Jot-2MW2WFy8AYGcM8HHbzMGRqXA&usqp=CAU&ec=48665699";

  useEffect(() => {
    showError("");
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    setLoading(true); // Set loading state to true

    try {
      let response = await API.userLogin(login);
      if (response.isSuccess) {
        showError("");

        sessionStorage.setItem(
          "accessToken",
          `Bearer ${response.data.accessToken}`
        );
        sessionStorage.setItem(
          "refreshToken",
          `Bearer ${response.data.refreshToken}`
        );
        setAccount({
          name: response.data.name,
          username: response.data.username,
        });

        isUserAuthenticated(true);
        setLogin(loginInitialValues);
        navigate("/");
      } else {
        showError("Username or Password not recognized");
      }
    } catch (error) {
      showError("Username or Password not recognized");
    } finally {
      setLoading(false);
    }
  };

  const signupUser = async () => {
    setLoading(true);

    try {
      let response = await API.userSignup(signup);
      if (response.isSuccess) {
        showError("");
        setSignup(signupInitialValues);
        alert("Sign up successful!");
        toggleAccount("login");
      } else {
        showError("Something went wrong! please try again later");
      }
    } catch (error) {
      showError("Something went wrong! please try again later");
    } finally {
      setLoading(false);
    }
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="outlined"
              value={login.username}
              onChange={onValueChange}
              name="username"
              label="Enter Username"
              InputLabelProps={{ shrink: true }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setActiveInput(e.target.name);
                  loginUser();
                }
              }}
            />
            <TextField
              variant="outlined"
              type="password"
              value={login.password}
              onChange={onValueChange}
              name="password"
              label="Enter Password"
              InputLabelProps={{ shrink: true }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setActiveInput(e.target.name);
                  loginUser();
                }
              }}
            />

            {error && <Error>{error}</Error>}

            <LoginButton
              variant="contained"
              onClick={() => {
                if (activeInput !== "password") {
                  loginUser();
                }
              }}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </LoginButton>

            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={toggleSignup} style={{ marginBottom: 50 }}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="outlined"
              onChange={onInputChange}
              name="name"
              label="Enter Name"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="outlined"
              onChange={onInputChange}
              name="username"
              label="Enter Username"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="outlined"
              onChange={onInputChange}
              name="password"
              label="Enter Password"
              type="password"
              InputLabelProps={{ shrink: true }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setActiveInput(e.target.name);
                  signupUser();
                }
              }}
            />
            {error && <Error>{error}</Error>}

            <SignupButton
              onClick={() => {
                if (activeInput !== "password") {
                  signupUser();
                }
              }}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Signup"}
            </SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={toggleSignup}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
