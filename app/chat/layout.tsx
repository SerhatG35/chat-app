import { Stack } from "@mui/material";

type Props = {
  navbar: React.ReactNode;
  channels: React.ReactNode;
  window: React.ReactNode;
  children: React.ReactNode;
};

const ChatLayout = async ({ navbar, channels, window, children }: Props) => {
  return (
    <Stack gap={2} height="100%" alignItems="center">
      {navbar}
      <Stack
        justifyContent="space-between"
        gap={2}
        direction="row"
        width="100%"
        flexGrow={1}
      >
        {children}
        {channels}
        {window}
      </Stack>
    </Stack>
  );
};

export default ChatLayout;
