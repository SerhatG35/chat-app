import { Stack, Typography } from "@mui/material";
import { createClient } from "@supabase/utils/client";
import Action from "../Action";

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
  { name: "Luna", message: "Ayın sakinliğiyle uyum içinde ol." },
  { name: "Echo", message: "Sesini dünyaya duyur." },
  { name: "Zephyr", message: "Rüzgarın hafifliğinde uçuş." },
  { name: "Nova", message: "Patlamaya hazır bir yıldızsın." },
  { name: "Aether", message: "Ruhsal bir yolculuğa çık." },
  { name: "Cascade", message: "Sessizlikteki gücü keşfet." },
  { name: "Quasar", message: "Evrenin derinliklerine doğru bir yolculuk." },
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
    <Stack
      width="80%"
      height="100%"
      gap={2}
      padding={1}
      borderRadius={1}
      bgcolor="#323232"
      justifyContent="space-between"
    >
      <Stack position="relative" height="100%" width="100%">
        <Stack
          position="absolute"
          overflow="auto"
          height="100%"
          width="100%"
          gap={2}
        >
          {messages.map(({ message, name }) => (
            <Stack
              bgcolor="#ffe182"
              padding={1}
              maxWidth="30%"
              key={`${name}${message}`}
              borderRadius={1}
              position="relative"
            >
              <Typography color="black" fontWeight="700" fontSize="12px">
                {name}
              </Typography>
              <Typography color="black">{message}</Typography>
              <Typography
                position="absolute"
                bottom={1}
                right={4}
                fontSize="8px"
                fontWeight="700"
                color="black"
              >
                10:10
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Action />
    </Stack>
  );
}
