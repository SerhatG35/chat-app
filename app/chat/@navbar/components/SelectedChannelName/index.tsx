"use client";
import { channel } from "@jotai/jotaiStore";
import { Stack, Typography } from "@mui/material";
import { useAtomValue } from "jotai";

const SelectedChannelName = () => {
  const selectedChannel = useAtomValue(channel);
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography>{selectedChannel?.slug ?? ""}</Typography>
    </Stack>
  );
};

export default SelectedChannelName;
