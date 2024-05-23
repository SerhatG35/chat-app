"use server";
import { createClient } from "./client";

export const getAllChannels = async () => {
  const { data }: { data: Array<Type.Channel> | null } = await createClient()
    .from("channels")
    .select("*");

  if (data) {
    return data;
  }
  return undefined;
};
