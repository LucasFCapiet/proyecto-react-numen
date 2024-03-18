import CardA from "./components/molecules/Card/CardA";

import Promotional from "./components/molecules/Promotional/Promotional";
import NavBar from "./components/molecules/NavBar/NavBar";





const products = [
  {
    imgUrl: "/imgs/NOTEBOOK-GFAST-N°-550W-01.jpg",
    productName: "NOTEBOOK GFAST N-550W",
    desc: [
      "Procesador:Intel Core i5 1035G4",
      "Batería:4000 mAh",
      "Memoria de almacenamiento:480 Gb",
      "Puertos Usb: 2 x USB 3.0 1 x Type C",
      "Tamaño de pantalla: 15.6” FHD IPS (1920 x1080)",
      "Pantalla Táctil:NO",
      "Puertos Hdmi:1",
      "Puerto Ethernet: NO",
      "Cámara:SI 2MP",
      "Teclado Numérico:Retroiluminado + Pad Numerico",
      "Entradas USB: 3",
    ],
    price1: 599500,
    price2: 610100,
  },

  {
    imgUrl: "/imgs/MOTO-G13.webp",
    productName: "MOTO G13 128 GB ROSE GOLD 4 GB RAM",
    desc: [
      "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
      "Pantalla IPS de 6.5'",
      "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
      "Cámara delantera de 8Mpx.",
      "Procesador MediaTek Helio G85 Octa-Core de 2GHz con 4GB de RAM.",
      "Batería de 5000mAh.",
      "Memoria interna de 128GB.",
      "Resistente a las salpicaduras.",
      "Con reconocimiento facial y sensor de huella dactilar.",
    ],
    price1: 189999,
    price2: 259999,
  },

  {
    imgUrl: "/imgs/CONSOLA-FAMILY-PORTATIL.jpg",
    productName: "CONSOLA FAMILY PORTATIL SUPREME",
    desc: [
      "Incluye 400 juegos.",
      "Tamaño de la pantalla 2.8'.",
      "Capacidad de la batería 600 mAh",
      "Procesador 8 bits",
      "Control de volumen lateral",
    ],
    price1: 15400,
    price2: 17000,
  },

  {
    imgUrl: "/imgs/PARLANTE-JBL-FLIP-5.jpg",
    productName: "PARLANTE BT JBL FLIP 5",
    desc: [
      "Colores: Consultar disponibilidad",
      "Potencia de salida (RMS): 20 W",
      "Autonomía de la batería: 12 h",
      "Incluye batería recargable: Sí",
      "Con Bluetooth: Sí",
      "Conectores de entrada: USB-C",
    ],
    price1: 209000,
    price2: 251200,
  },
];

export default function Home() {
  return (
    <main>
      <Promotional />

      <NavBar />

      <div className="h-96 w-3/4  flex flex-col items-left justify-center mx-auto bg-cover bg-[url('https://geektime.es/wp-content/uploads/2020/12/mavic-air_flame-red_-1-e1542646586211.jpg')]">
        <h1 className="text-xl font-bold text-white ">Titulo</h1>
        <h2 className="text-lg font-semibold text-orange-200">Subtitulo</h2>
        <button className="border rounded bg-orange-500 text-white font-semibold w-1/4">
          Explora nuestro catálogo
        </button>
      </div>

      <div>
        <h1 className="text-center text-xl font-semibold">Titulo</h1>
        <div className="flex flex-row justify-center space-x-10">
          {products.map((el) => (
            <CardA
              imgUrl={el.imgUrl}
              productName={el.productName}
              price1={el.price1}
              price2={el.price2}
            />
          ))}
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
      </div>
     

      <div className="bg-blue-300">
        cuadro con distinto color de Tell a friend y debajo redes: face, insta,
        twitter, whatsapp, messenger y telegram
      </div>

      <footer>
        6 columnas: 1- logo 2-occasions y debajo todas sus subcategorias 3-all
        categories y sus subs 4-gifts...etc.
      </footer>
    </main>
  );
}
