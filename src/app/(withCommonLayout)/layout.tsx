import CopyRight from "@/src/components/footer/CopyRight";
import Footer from "@/src/components/footer/Footer";
import TopFooter from "@/src/components/footer/TopFooter";
import MessengerBtn from "@/src/shared/MessengerBtn";
import ScrollToBottomToTop from "@/src/shared/ScrollToBottomToTop";
// import Navbar from "@/src/components/header/Navbar";



export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {/* <Navbar/> */}
      <MessengerBtn/>
      <ScrollToBottomToTop/>
      {children}
       <TopFooter />
      <Footer />
      <CopyRight />
    </div>
  );
}
