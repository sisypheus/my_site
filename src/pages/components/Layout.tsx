import { NextPage } from "next";
import Menu from "./Menu";

const Layout: NextPage = ({ children }: any) => {
  return (
    <main className="min-h-screen bg-[#232323] md:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="container mx-auto px-4">
          <Menu />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
