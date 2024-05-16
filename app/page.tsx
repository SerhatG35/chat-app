"use client";
import { Button, Stack, Typography } from "@mui/material";
import { login } from "@supabase/utils/login";

export default function Home() {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3">Chat App</Typography>
        <Button fullWidth onClick={() => login()} variant="contained">
          Login with Google
        </Button>
      </Stack>
    </Stack>
  );
}
