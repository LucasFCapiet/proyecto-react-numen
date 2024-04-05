"use client";
import Promotional from "./components/molecules/Promotional/Promotional";
import NavBar from "./components/molecules/NavBar/NavBar";
import Footer from "./components/molecules/Footer/Footer";
import Slider from "./components/molecules/Carousel/Slider";
import CardDisplayer from "./components/molecules/Card/CardDisplayer";


export default function Home() {


  return (
    <main>
      <Promotional />

      <NavBar />

      <div className="h-96 w-3/4  flex flex-col items-left justify-center mx-auto bg-cover bg-[url('https://geektime.es/wp-content/uploads/2020/12/mavic-air_flame-red_-1-e1542646586211.jpg')]"></div>

      <div>
        <h1 className="text-center text-xl font-semibold text-[#fcfcfc]">
          Nuestros Productos
        </h1>
        <div className="flex flex-row justify-center space-x-10">
          <CardDisplayer />
        </div>
      </div>

      <div>h1 5 tarjetas promocionales: imagen, titulos y explicacion</div>

      <div>h1 h2 5 items ul boton imagen a la derecha</div>

      <div className="bg-red-200">
        cuadro partnership con fondo de color: h1 logo de partnership boton de
        saber mas acerca del partnership
      </div>

      <div>
        imagen a la izquierdaa la derecha: titulo h1, descripcion y boton de
        comprar
      </div>

      <div>
        la pagina con @ de instagram y abajo galeria carrusel de imagenes, se
        ven 5 y boton de desplazamiento lateral derecha
        <Slider />
      </div>

      <div className="bg-blue-300">
        cuadro con distinto color de Tell a friend y debajo redes: face, insta,
        twitter, whatsapp, messenger y telegram
      </div>

      <footer>
        6 columnas: 1- logo 2-occasions y debajo todas sus subcategorias 3-all
        categories y sus subs 4-gifts...etc.
      </footer>
      <Footer />
    </main>
  );
}
