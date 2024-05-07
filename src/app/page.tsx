import { Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      spacing={2}
    >
      <Button variant="contained">Sign In</Button>
    </Stack>
  );
}
