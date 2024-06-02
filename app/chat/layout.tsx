"use client";
import { channel } from "@jotai/jotaiStore";
import { Stack } from "@mui/material";
import { useAtomValue } from "jotai";

type Props = {
  navbar: React.ReactNode;
  channels: React.ReactNode;
  window: React.ReactNode;
  children: React.ReactNode;
};

const ChatLayout = ({ navbar, channels, window, children }: Props) => {
  const selectedChannel = useAtomValue(channel);
  return (
    <Stack gap={2} 
    height="100%" 
    alignItems="center">
      {navbar}
      <Stack
        justifyContent="space-between"
        gap={2}
        direction="row"
        width="100%"
        flexGrow={1}
      >
        {children}
        {selectedChannel ? null : channels}
        {window}
      </Stack>
    </Stack>
  );
};

export default ChatLayout;
