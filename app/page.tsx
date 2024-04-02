import Service from "./_components/_body/bodyOne";
import BodyThree from "./_components/_bodyThree/bodyThree";
import BodyTwo from "./_components/_bodyTwo/bodyTwo";
import Footer from "./_components/_footer/footer";
import Header from "./_components/_header/header";
import HeroCard from "./_components/_hero card/heroCard";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroCard/>
      <Service/>
      <BodyTwo/>
      <BodyThree/>
      <Footer/>
    </>
  );
}
