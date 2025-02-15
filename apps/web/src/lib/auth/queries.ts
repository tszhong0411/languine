import { headers } from "next/headers";
import { authClient } from "./client";

export async function acceptInvitation(invitationId: string) {
  const { data } = await authClient.organization.acceptInvitation(
    {
      invitationId,
    },
    {
      headers: await headers(),
    },
  );

  return data;
}
