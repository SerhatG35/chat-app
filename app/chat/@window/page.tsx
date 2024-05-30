"use client";

import { Stack, Typography } from "@mui/material";
import Action from "../components/Action";
import { useAtomValue } from "jotai";
import { channel } from "@jotai/jotaiStore";
import { useCallback, useEffect, useState } from "react";
import { getChat } from "@supabase/utils/chat";
import dayjs from "dayjs";

export default function Window() {
  const selectedChannel = useAtomValue(channel);
  const [chat, setChat] = useState<Array<Type.Chat> | undefined>(undefined);

  const retriveChannels = useCallback(async () => {
    if (selectedChannel) setChat(await getChat(selectedChannel.id));
  }, [selectedChannel]);

  useEffect(() => {
    retriveChannels();
  }, [retriveChannels]);

  if (!selectedChannel) {
    return null;
  }

  return (
    <Stack
      width="100%"
      height="100%"
      gap={2}
      padding={1}
      borderRadius={1}
      bgcolor="#323232"
      justifyContent="space-between"
    >
      {chat && chat?.length > 0 ? (
        <>
          <Stack position="relative" height="100%" width="100%">
            <Stack
              position="absolute"
              overflow="auto"
              height="100%"
              width="100%"
              gap={2}
            >
              {chat.map(({ message, user_id, inserted_at }) => (
                <Stack
                  bgcolor="#ffe182"
                  padding={1}
                  maxWidth="30%"
                  key={`${user_id}${message}`}
                  borderRadius={1}
                  position="relative"
                >
                  <Typography color="black" fontWeight="700" fontSize="12px">
                    {user_id}
                  </Typography>
                  <Typography paddingTop={1} paddingBottom={1} color="black">
                    {message}
                  </Typography>
                  <Typography
                    position="absolute"
                    bottom={1}
                    right={4}
                    fontSize="12px"
                    fontWeight="700"
                    color="black"
                  >
                    {dayjs(inserted_at).format("HH:mm")}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Action />
        </>
      ) : (
        <Typography>No messages</Typography>
      )}
    </Stack>
  );
}
