import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { Login } from "../components/Login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/log-in`,
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        navigate("/users");
      }
    } catch (error) {
      console.log({ error });
      alert("Credenciales incorrectas");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Login
          email={email}
          password={password}
          // handleLogin={handleLogin}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </Box>
    </Container>
  );
};

export default LoginPage;
