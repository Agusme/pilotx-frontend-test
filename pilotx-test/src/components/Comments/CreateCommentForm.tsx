import {
  Box,
  TextField,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import type { CreateCommentPayload } from "../../types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CustomButton from "../Common/CustomButton";

interface Props {
  onSubmit: (data: CreateCommentPayload) => Promise<void>;
}

export default function CreateCommentForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateCommentPayload>();
  const [open, setOpen] = useState(false);

  const submit = async (data: CreateCommentPayload) => {
    await onSubmit(data);
    setOpen(true);
    reset();
  };
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          backgroundColor: "#fff",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(submit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#1E1743",
            }}
          >
            Agregar comentario
          </Typography>

          <TextField
            label="Nombre"
            size="small"
            fullWidth
            {...register("name", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 2,
                message: "Debe tener al menos 2 caracteres",
              },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
          />

          <TextField
            label="Email"
            size="small"
            fullWidth
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email inválido",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
          />

          <TextField
            label="Comentario"
            multiline
            rows={3}
            size="small"
            fullWidth
            {...register("body", {
              required: "El comentario es obligatorio",
              minLength: {
                value: 5,
                message: "Debe tener al menos 5 caracteres",
              },
            })}
            error={!!errors.body}
            helperText={errors.body?.message}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
          />

          <CustomButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Publicar"}
          </CustomButton>
        </Box>
      </Paper>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          variant="filled"
          onClose={() => setOpen(false)}
          severity="success"
          sx={{
            bgcolor: "#1a1a4a",
            color: "white",
            fontWeight: "bold",
            borderRadius: 2,
          }}
        >
          Comentario enviado
        </Alert>
      </Snackbar>
    </>
  );
}
