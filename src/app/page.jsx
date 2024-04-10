"use client";
import Promotional from "./components/molecules/Promotional/Promotional";
import NavBar from "./components/molecules/NavBar/NavBar";
import Footer from "./components/molecules/Footer/Footer";
import Slider from "./components/molecules/Carousel/Slider";

import DivImg from "./components/molecules/DivsMain/DivImg";
import DivH1 from "./components/molecules/DivsMain/DivH1";

import ThemeContextProvider from "./components/molecules/NavBar/DarkMode";

export default function Home() {


  return (


    <main>


      <ThemeContextProvider>

        <Promotional />

        <NavBar />

        <DivImg />
        <DivH1 />


        <Slider />


        <Footer />

      </ThemeContextProvider>

    </main>
  );
}
