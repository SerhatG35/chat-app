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
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

export default function Channels() {
  const [data, setData] = useState<Array<Type.Channel> | undefined>(undefined);

  const retriveAllChannels = async () => {
    setData(await getAllChannels());
  };

  useEffect(() => {
    retriveAllChannels();
  }, []);

  const setChannel = useSetAtom(channel);

  return (
    <Stack bgcolor="#323232" width="20%">
      <List disablePadding>
        {data?.map((_channel) => (
          <ListItem
            onClick={() => setChannel(_channel)}
            disablePadding
            key={_channel.id}
          >
            <ListItemButton>
              <ListItemText primary={_channel.slug} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
