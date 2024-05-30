"use client";
import type { User as _user } from "@supabase/auth-js";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import getUser from "@supabase/utils/user";
import { useAtom, useAtomValue } from "jotai";
import { channel } from "@jotai/jotaiStore";

type User = {
  user: _user | null;
};

export default function Navbar() {
  const [data, setData] = useState<User | undefined>(undefined);
  const [selectedChannel, setSelectedChannel] = useAtom(channel);

  const retriveUser = async () => {
    setData(await getUser());
  };

  useEffect(() => {
    retriveUser();
  }, []);

  return (
    <Stack
      direction="row"
      width="100%"
      height="40px"
      justifyContent={selectedChannel ? "space-between" : "flex-end"}
    >
      {selectedChannel ? (
        <>
          <Button
            variant="contained"
            onClick={() => setSelectedChannel(undefined)}
          >
            Leave Chat
          </Button>
          <Stack justifyContent="center" alignItems="center">
            <Typography>{selectedChannel?.slug ?? ""}</Typography>
          </Stack>
        </>
      ) : null}
      {data?.user?.user_metadata ? (
        <Avatar
          alt="Profile Picture"
          src={data?.user?.user_metadata?.avatar_url}
        />
      ) : null}
    </Stack>
  );
}
