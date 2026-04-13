import { cardOnly } from "../../components/cards/cardOnly/cardOnly.js";
import { cardWithImage } from "../../components/cards/cardImage/cardWithImage.js";

const containerDescription = document.querySelector(".container-group");

containerDescription.innerHTML = cardOnly(
    "Vértice Club",
  `Somos un equipo de desarrolladores enfocados en diseñar y desarrollar un aplicativo web para un gimnasio, orientado a la gestión de reservas. Buscamos crear una plataforma intuitiva que permita a los usuarios consultar horarios, reservar sesiones y administrar sus actividades de forma sencilla.

Nuestro objetivo es optimizar la organización del gimnasio y mejorar la experiencia de los clientes mediante una solución eficiente, moderna y fácil de usar.`,
"xl"
);
