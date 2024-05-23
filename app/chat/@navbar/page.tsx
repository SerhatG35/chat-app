"use client";
import type { User as _user } from "@supabase/auth-js";
import { Avatar, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import getUser from "@supabase/utils/user";
import SelectedChannelName from "./components/SelectedChannelName";

type User = {
  user: _user | null;
};

export default function Navbar() {
  const [data, setData] = useState<User | undefined>(undefined);

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
      justifyContent="space-between"
    >
      <Button variant="contained">Leave Chat</Button>
      <SelectedChannelName />
      {data?.user?.user_metadata ? (
        <Avatar
          alt="Profile Picture"
          src={data?.user?.user_metadata?.avatar_url}
        />
      ) : null}
    </Stack>
  );
}
