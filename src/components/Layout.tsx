import type { NextPage } from "next";
// import dynamic from "next/dynamic";
import Footer from "./Footer";
import Menu from "./Menu";

// const Loading = () => {
//   return (
//     <div className="flex h-full items-center justify-center">
//       <div className="h-24 w-24 animate-spin rounded-full border-b-2 border-gray-900"></div>
//     </div>
//   );
// };

// const LazyCharacter = dynamic(() => import("./Character"), {
//   ssr: false,
//   loading: () => <Loading />,
// });

const Layout: NextPage = ({ children }: any) => {
  return (
    <main className="h-full bg-[#232323] md:px-8">
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-between">
        <div className="mx-auto w-full px-4">
          <Menu />
          <div className="w-full px-2 md:px-12">
            {/* <div className="h-80">
              <LazyCharacter />
            </div> */}

            <div className="block">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
