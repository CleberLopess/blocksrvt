import { FixedBar } from "components/FixedBar/FixedBar";
import { FooterModule } from "modules/FooterModule/FooterModule";
import { HeaderModule } from "modules/HeaderModule/HeaderModule";
import { ListCards } from "modules/ListCardsModule/ListCards";
import { TitlePageModule } from "modules/TitlePageModule/TitlePageModule";

export default function Home() {
  return (
    <>
      <FixedBar />
      <HeaderModule />
      <TitlePageModule />
      <ListCards />
      <FooterModule />
    </>
  );
}
