import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
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
<Box
  component="form"
  onSubmit={handleSubmit}
  sx={{
    mt: 3,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    pl: 1, // mismo padding-left que tus títulos con borde
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontWeight: 600,
      mb: 1,
    }}
  >
    Agregar comentario
  </Typography>

  <TextField
    label="Nombre"
    fullWidth
    size="small"
    variant="outlined"
    value={form.name}
    onChange={handleChange("name")}
  />

  <TextField
    label="Email"
    fullWidth
    size="small"
    variant="outlined"
    value={form.email}
    onChange={handleChange("email")}
  />

  <TextField
    label="Comentario"
    fullWidth
    size="small"
    multiline
    rows={3}
    variant="outlined"
    value={form.body}
    onChange={handleChange("body")}
  />

  <Button
    type="submit"
    variant="contained"
    disabled={loading}
    sx={{
      width: "fit-content",
      px: 3,
      mt: 1,
      textTransform: "none",
      fontWeight: 600,
    }}
  >
    {loading ? "Enviando..." : "Enviar comentario"}
  </Button>
</Box>


  );
}
