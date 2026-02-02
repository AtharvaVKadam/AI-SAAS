import { StreamVideoClient } from "@stream-io/video-react-sdk";

let client: StreamVideoClient | null = null;

export function getClient(apiKey: string, user: any) {
  if (client) return client;

  client = StreamVideoClient.getOrCreateInstance({
    apiKey,
    user,
  });

  return client;
}
