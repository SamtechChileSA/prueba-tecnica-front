import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserTable } from "../components/UserTable";
import axios from "axios";

const UsersPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Usuarios
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => navigate("/create-user")}
      >
        Crear Usuario
      </Button>
      <UserTable users={users} />
    </Container>
  );
};

export default UsersPage;
