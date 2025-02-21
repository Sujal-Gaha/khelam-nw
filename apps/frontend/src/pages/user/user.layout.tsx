import { ReactNode } from "react";
import { UserNavbarComponent } from "./user.navbar.component";
import { UserFooterComponent } from "./user.footer.component";

export const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserNavbarComponent />
      {children}
      <UserFooterComponent />
    </>
  );
};
