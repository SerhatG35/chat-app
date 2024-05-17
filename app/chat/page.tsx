import { Stack } from "@mui/material";
import Window from "./components/Window";
import Channels from "./components/Channels";

const Chat = () => {
  return (
    <Stack
      justifyContent="space-between"
      gap={2}
      direction="row"
      width="100%"
      flexGrow={1}
    >
      <Channels />
      <Window />
    </Stack>
  );
};

export default Chat;
