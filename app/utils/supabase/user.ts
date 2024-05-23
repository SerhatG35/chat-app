"use server";
import { createClient } from "./client";

export default async function getUser() {
  const { data } = await createClient().auth.getUser();

  if (data) {
    return data;
  }
  return undefined;
}
