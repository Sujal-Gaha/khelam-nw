import { type ReactNode, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Settings } from "lucide-react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  useTheme,
  Theme,
  ThemeEnum,
} from "@libs/components";

export const SettingsHotKeyProvider = ({ children }: { children: ReactNode }) => {
  const { setTheme } = useTheme();

  const [isSettingsDialogOpen, setSettingsDialogModal] = useState(false);

  const toggleSettingsModal = () => setSettingsDialogModal((prev) => !prev);

  useHotkeys("ctrl+m", toggleSettingsModal, []);
  useHotkeys("esc", () => setSettingsDialogModal(false), { enabled: isSettingsDialogOpen });

  const [settings, setSettings] = useState({
    theme: "light",
    notifications: true,
  });

  const handleSettingChange = (key: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log("Saving settings:", settings);
    setSettingsDialogModal(false);
  };

  return (
    <>
      {children}
      <Dialog open={isSettingsDialogOpen} onOpenChange={setSettingsDialogModal}>
        <Button variant="outline" size="icon" className="fixed right-8 bottom-8" onClick={toggleSettingsModal}>
          <Settings className="h-4 w-4" />
        </Button>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>User Settings</DialogTitle>
            <DialogDescription>Manage your account settings and preferences.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="theme" className="text-left">
                Theme
              </Label>
              <Select
                onValueChange={(value) => {
                  setTheme(value as Theme);
                }}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ThemeEnum.LIGHT}>Light</SelectItem>
                  <SelectItem value={ThemeEnum.DARK}>Dark</SelectItem>
                  <SelectItem value={ThemeEnum.SYSTEM}>System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notifications" className="text-right">
                Notifications
              </Label>
              <div className="col-span-3">
                <Switch
                  id="notifications"
                  checked={settings.notifications}
                  onCheckedChange={(checked) => handleSettingChange("notifications", checked)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
