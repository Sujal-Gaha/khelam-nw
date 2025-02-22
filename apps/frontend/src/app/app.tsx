import { ThemeProvider, Toaster } from "@libs/components";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { HotkeysProvider } from "react-hotkeys-hook";
import { SettingsHotKeyProvider } from "../provider/HotKeyProvider";

export function App() {
  return (
    <HotkeysProvider initiallyActiveScopes={["settings"]}>
      <SettingsHotKeyProvider>
        <ThemeProvider defaultTheme="dark">
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </SettingsHotKeyProvider>
    </HotkeysProvider>
  );
}

export default App;
