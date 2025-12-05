import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import type { CreateCommentPayload } from "../../types";

interface Props {
  onSubmit: (data: CreateCommentPayload) => Promise<void>;
}

export default function CreateCommentForm({ onSubmit }: Props) {
  const [form, setForm] = useState<CreateCommentPayload>({
    name: "",
    email: "",
    body: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (prop: keyof CreateCommentPayload) => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [prop]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(form);
    setLoading(false);
    setForm({ name: "", email: "", body: "" }); // limpiar
  };

  return (
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
        onSubmit={handleSubmit}
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
          fullWidth
          size="small"
          value={form.name}
          onChange={handleChange("name")}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />

        <TextField
          label="Email"
          fullWidth
          size="small"
          value={form.email}
          onChange={handleChange("email")}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />

        <TextField
          label="Comentario"
          fullWidth
          multiline
          rows={3}
          size="small"
          value={form.body}
          onChange={handleChange("body")}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            width: "fit-content",
            px: 3,
            py: 1,
            mt: 1,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            backgroundColor: "#1E1743",
            ":hover": {
              backgroundColor: "#140f30",
            },
            transition: "0.2s ease",
          }}
        >
          {loading ? "Enviando..." : "Publicar"}
        </Button>
      </Box>
    </Paper>


  );
}
