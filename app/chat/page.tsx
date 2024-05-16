import { Stack } from "@mui/material";
import Action from "./components/Action";
import Window from "./components/Window";

const Chat = () => {
  return (
    <Stack justifyContent="space-between" gap={2} height="100%" width="100%">
      <Window />
      <Action />
    </Stack>
  );
};

export default Chat;
