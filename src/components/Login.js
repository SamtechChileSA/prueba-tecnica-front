import { Button, TextField, Typography } from "@mui/material";
import React from "react";

export const Login = ({
  email,
  password,
  handleLogin,
  setEmail,
  setPassword,
}) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        type="password"
        label="Contraseña"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Entrar
      </Button>
    </>
  );
};
