import BannerNavBar from "~/components/banner-nav";
import Header from "~/components/header";

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <BannerNavBar />
    </div>
  );
}
