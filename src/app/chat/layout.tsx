import { Box, Stack } from "@mui/material";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      id="serhat"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box>Navbar</Box>
      {children}
    </Stack>
  );
};

export default ChatLayout;
