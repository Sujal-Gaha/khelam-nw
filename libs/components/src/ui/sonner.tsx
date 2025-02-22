import { useTheme } from "../lib/theme-provider";
import { Toaster as Sonner, toast, ToasterProps, Action } from "sonner";

type SonnerProps = Omit<ToasterProps, "position" | "theme" | "expand">;

const Toaster = ({ ...props }: SonnerProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      expand={false}
      position="top-right"
      {...props}
    />
  );
};

type Message = { message: string };

type Description = { description: string };

const ToastSuccess = ({ message }: Message) => {
  return toast.success(message);
};

const ToastError = ({ message }: Message) => {
  return toast.error(message);
};

const ToastInfo = ({ message }: Message) => {
  return toast.info(message);
};

const ToastWarning = ({ message }: Message) => {
  return toast.warning(message);
};

const ToastAction = ({ message, label, onClick }: Action & Message) => {
  return toast(message, { action: { label, onClick } });
};

const ToastDescription = ({ message, description }: Message & Description) => {
  return toast.message(message, { description });
};

export { Toaster, ToastSuccess, ToastError, ToastInfo, ToastWarning, ToastAction, ToastDescription };
