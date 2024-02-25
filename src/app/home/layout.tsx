"use client";
import Fragments from "@/components/fragments";
import { Button, ButtonGroup, Container, Stack } from "@mui/material";
import { JSX, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

interface ComponetsFragmentsI {
  type: "copy" | "code";
  content: string;
}

const options: Array<"code" | "copy"> = ["code", "copy"];

const HomePage = (): JSX.Element => {
  const [fragments, setFragments] = useState<ComponetsFragmentsI[]>([])

  const handleSelect = (type: "copy" | "code"): void => {
    setFragments((adata) => ([...adata, { type, content: "" }]))
  }

  return (
    <Stack sx={{ minHeight: "100dvh" }}>
      <Container maxWidth="sm">
        {fragments.map(({ type, content }, index) => (
          <Fragments type={type} content="" key={index} />
        ) )}
        {/* Seleccionar tipo de fragmento */}
        <Stack alignItems="center">
          <ButtonGroup variant="outlined">
            {options.map((button, index) => (
              <Button key={index} startIcon={<AddIcon />} onClick={() => handleSelect(button)} >
                {button}
              </Button>
            ))}
          </ButtonGroup>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomePage;
