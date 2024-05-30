declare module Type {
  export type Channel = {
    id: number;
    inserted_at: string;
    slug: string;
    created_by: string;
  };
  export type Chat = {
    id: number;
    channel_id: number;
    inserted_at: string;
    message: string;
    user_id: string;
  };
}
