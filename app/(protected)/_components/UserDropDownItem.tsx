"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

export default function UserDropDown() {
  const user = useCurrentUser();
  return (
    <li>
      <a>{user?.name || "User"}</a>
    </li>
  );
}
