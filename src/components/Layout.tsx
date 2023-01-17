import { NextPage } from "next";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout: NextPage = ({ children }: any) => {
  return (
    <main className="min-h-screen bg-[#232323] md:px-8">
      <div className="mx-auto max-w-3xl">
        <Menu />
        <div className="mx-auto flex min-h-screen flex-col px-4">
          <div className="px-2 md:px-12">
            <div className="h-80">test</div>
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
