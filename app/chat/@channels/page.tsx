"use client";
import { channel } from "@jotai/jotaiStore";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { getAllChannels } from "@supabase/utils/channels";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";

export default function Channels() {
  const [data, setData] = useState<Array<Type.Channel> | undefined>(undefined);
  const selectedChannel = useAtomValue(channel);

  const retriveAllChannels = async () => {
    setData(await getAllChannels());
  };

  useEffect(() => {
    retriveAllChannels();
  }, []);

  const setChannel = useSetAtom(channel);

  return (
    <Stack
      marginX={selectedChannel ? undefined : "auto"}
      bgcolor="#323232"
      width="20%"
      padding={2}
      borderRadius={2}
    >
      <List disablePadding>
        {data?.map((_channel) => (
          <ListItem
            onClick={() => setChannel(_channel)}
            disablePadding
            key={_channel.id}
          >
            <ListItemButton
              sx={{
                borderRadius: 2,
              }}
            >
              <ListItemText primary={_channel.slug} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
