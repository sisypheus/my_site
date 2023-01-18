import { NextPage } from "next";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout: NextPage = ({ children }: any) => {
  return (
    <main className="h-full bg-[#232323] md:px-8">
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-between">
        <Menu />
        <div className="mx-auto w-full px-4">
          <div className="w-full px-2 md:px-12">
            <div className="h-80">test</div>
            <div className="block">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
