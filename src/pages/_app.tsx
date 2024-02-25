import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/Header/header";
import { Source_Sans_3 } from "next/font/google";

import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const source_sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
  	<>
	<link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Barlow+Condensed:wght@300&family=Tilt+Prism&family=Yellowtail&family=Protest+Guerrilla&family=Protest+Riot&family=Dhurjati&family=Rubik+Glitch&family=Roboto+Mono:wght@100&family=Bokor&family=Diphylleia&family=Macondo&family=Comic+Neue:wght@300&family=Akronim&family=Mystery+Quest&family=Margarine&family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />	
    <main className={`${source_sans.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
    </>
  );
}
