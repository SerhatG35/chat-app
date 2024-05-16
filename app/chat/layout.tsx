import { Avatar, Button, Stack, Typography } from "@mui/material";
import { createClient } from "@supabase/utils/client";

const ChatLayout = async ({ children }: { children: React.ReactNode }) => {
  const { data } = await createClient().auth.getUser();

  return (
    <Stack gap={2} height="100%" alignItems="center">
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Button variant="contained">Leave Chat</Button>
        <Stack justifyContent="center" alignItems="center">
          <Typography>Name of the chat room</Typography>
        </Stack>
        <Avatar
          alt="Profile Picture"
          src={data.user?.user_metadata?.avatar_url}
        />
      </Stack>
      {children}
    </Stack>
  );
};

export default ChatLayout;
