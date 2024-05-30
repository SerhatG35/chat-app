"use server";
import { createClient } from "./client";

export const getChat = async (channelId: number) => {
  const { data }: { data: Array<Type.Chat> | null } = await createClient()
    .from("messages")
    .select("*")
    .eq("channel_id", channelId);

  if (data) {
    return data;
  }
  return undefined;
};
