import { Button, Stack, TextField } from "@mui/material";

export default function Action() {
  return (
    <Stack gap={1} width="100%" direction="row">
      <TextField variant="filled" placeholder="Type something…" fullWidth />
      <Button variant="contained">Send</Button>
    </Stack>
  );
}
