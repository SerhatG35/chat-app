import { Stack, Typography } from "@mui/material";
import { createClient } from "@supabase/utils/client";

const messages = [
  { name: "Serenity", message: "Hayatın dalgalarında yüz." },
  { name: "Aurora", message: "Işığın güzelliği seninle." },
  { name: "Phoenix", message: "Yeniden doğmanın zamanı geldi." },
  { name: "Luna", message: "Ayın sakinliğiyle uyum içinde ol." },
  { name: "Echo", message: "Sesini dünyaya duyur." },
  { name: "Zephyr", message: "Rüzgarın hafifliğinde uçuş." },
  { name: "Nova", message: "Patlamaya hazır bir yıldızsın." },
  { name: "Aether", message: "Ruhsal bir yolculuğa çık." },
  { name: "Cascade", message: "Sessizlikteki gücü keşfet." },
  { name: "Quasar", message: "Evrenin derinliklerine doğru bir yolculuk." },
];

export default async function Window() {
  const { data } = await createClient().auth.getUser();
  console.log(data);

  return (
    <Stack gap={2} padding={1} borderRadius={1} bgcolor="#FFD54F" height="100%">
      {messages.map(({ message, name }) => (
        <Stack
          bgcolor="#ffe182"
          padding={1}
          maxWidth="30%"
          key={`${name}${message}`}
          borderRadius={1}
        >
          <Typography color="black" fontSize="12px">
            {name}
          </Typography>
          <Typography color="black">{message}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
