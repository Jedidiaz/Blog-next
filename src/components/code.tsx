import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";

const Code = () => {
  return (
    <Stack spacing={2}>
      <TextField placeholder="Escribe tu codigo aquí" multiline rows={10} variant="standard" label="Codigo" />
      <Stack alignItems="flex-end">
        <Button variant="contained" startIcon={<SaveIcon />}>
          Guardar
        </Button>
      </Stack>
    </Stack>
  );
};

export default Code;
