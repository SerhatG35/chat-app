"use client";
import { channel } from "@jotai/jotaiStore";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import { getAllChannels } from "@supabase/utils/channels";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";

export default function Channels() {
  const [data, setData] = useState<Array<Type.Channel> | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const selectedChannel = useAtomValue(channel);

  const retriveAllChannels = async () => {
    setLoading(true);
    setData(await getAllChannels());
    setLoading(false);
  };

  useEffect(() => {
    retriveAllChannels();
  }, []);

  const setChannel = useSetAtom(channel);

  return (
    <Stack
      marginX={selectedChannel ? undefined : "auto"}
      bgcolor="#323232"
      maxWidth="20%"
      maxHeight="50%"
      alignSelf="center"
      overflow="auto"
      padding={2}
      borderRadius={2}
    >
      <List
        subheader={
          <ListSubheader sx={{ background: "transparent" }} component="div">
            Available channels
          </ListSubheader>
        }
        disablePadding
      >
        {loading ? (
          <ListItem sx={{ justifyContent: "center" }}>
            <CircularProgress />
          </ListItem>
        ) : null}
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
