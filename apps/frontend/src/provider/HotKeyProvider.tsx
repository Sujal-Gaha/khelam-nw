import { ReactNode } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export const SettingsHotKeyProvider = ({ children }: { children: ReactNode }) => {
  useHotkeys("ctrl+k", () => alert("You pressed ctrl+k!"));

  return children;
};
