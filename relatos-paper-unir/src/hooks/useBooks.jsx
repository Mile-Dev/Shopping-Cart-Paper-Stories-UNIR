import {useEffect, useState} from "react";
import libro1 from "../assets/images/libro-abierto.png"; // Importar la imagen
import libro2 from "../assets/images/libro-cerrado.png"; // Importar la imagen
import libro3 from "../assets/images/libro.png"; // Importar la imagen

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {

        setTimeout(() => {
            setBooks([
                
                    {
                      id: 1,
                      name: "Cien Años de Soledad",
                      Autor: "Gabriel García Márquez",
                      genero: "Realismo Mágico",
                      valor: "$20",
                      tipoRecurso: "Físico",
                      cantidad: 5,
                      imagen: libro1,
                      formato: "Libro físico",
                      editorial: "Editorial Sudamericana",
                      coleccion: "Contemporánea",
                      año: 1967,
                      idioma: "Español",
                      numeroPaginas: 471,
                      encuadernacion: "Tapa Dura",
                      dimensiones: "21 x 13.5 cm",
                      isbn: "987567890",
                      isbn13: "9875678D53",
                      numeroEdicion: 1,
                      categorias: "Literatura",
                      estado: "Disponible",
                      reseña: "Una obra maestra que retrata la historia de la familia Buendía en el mítico pueblo de Macondo, donde lo fantástico y lo real se entrelazan de manera magistral. A través de varias generaciones, Gabriel García Márquez explora temas como el amor, la soledad, la corrupción y la decadencia. Con una prosa rica y poética, el autor crea un universo único lleno de personajes inolvidables. Es un pilar fundamental del realismo mágico y una referencia imprescindible en la literatura universal. Publicada en 1967, sigue cautivando a lectores de todo el mundo."
                    },
                    {
                      id: 2,
                      name: "Don Quijote de la Mancha",
                      autor: "Miguel de Cervantes",
                      genero: "Clásico",
                      valor: "$25",
                      tipoRecurso: "Físico",
                      cantidad: 3,
                      imagen: libro2,
                      formato: "Libro físico",
                      editorial: "Espasa",
                      coleccion: "Clásicos Universales",
                      año: 1605,
                      idioma: "Español",
                      numeroPaginas: 1045,
                      encuadernacion: "Tapa Dura",
                      dimensiones: "24 x 16 cm",
                      isbn: "123456789",
                      isbn13: "1234567QWERTY",
                      numeroEdicion: 3,
                      categorias: "Literatura Clásica",
                      estado: "Disponible",
                      reseña: "Considerada la primera gran novela moderna, esta obra narra las aventuras y desventuras de Don Quijote, un caballero idealista que confunde la realidad con su imaginación. Acompañado por su fiel escudero, Sancho Panza, enfrenta molinos de viento y cuestiona las normas sociales de su tiempo. Cervantes logra combinar humor, drama y una profunda reflexión sobre la condición humana. Publicada en 1605, sigue siendo una obra imprescindible de la literatura mundial. Su legado trasciende generaciones, inspirando a escritores y lectores por igual."
                    },
                    {
                      id: 3,
                      name: "El Principito",
                      autor: "Antoine de Saint-Exupéry",
                      genero: "Fábula",
                      valor: "$15",
                      tipoRecurso: "Físico",
                      cantidad: 10,
                      imagen: libro3,
                      formato: "Libro físico",
                      editorial: "Gallimard",
                      coleccion: "Infantil",
                      año: 1943,
                      idioma: "Español",
                      numeroPaginas: 96,
                      encuadernacion: "Tapa Blanda",
                      dimensiones: "18 x 12 cm",
                      isbn: "456123789",
                      isbn13: "4561237DFGHJK",
                      numeroEdicion: 5,
                      categorias: "Ficción Infantil",
                      estado: "Disponible",
                      reseña: "Un relato atemporal que combina la sencillez de un cuento infantil con la profundidad de una reflexión filosófica. A través de las experiencias de un pequeño príncipe que viaja entre planetas, el autor explora el amor, la amistad y el sentido de la vida. La historia invita a los lectores a redescubrir el mundo con ojos de niño, cuestionando las prioridades del mundo adulto. Publicada en 1943, es uno de los libros más traducidos y leídos de la historia. Ideal para todas las edades, su mensaje sigue siendo profundamente conmovedor."
                    },
                    {
                      id: 4,
                      name: "1984",
                      autor: "George Orwell",
                      genero: "Distopía",
                      valor: "$18",
                      tipoRecurso: "Físico",
                      cantidad: 7,
                      imagen: libro1,
                      formato: "Libro físico",
                      editorial: "Secker & Warburg",
                      coleccion: "Distopías",
                      año: 1949,
                      idioma: "Español",
                      numeroPaginas: 328,
                      encuadernacion: "Tapa Blanda",
                      dimensiones: "19 x 12.5 cm",
                      isbn: "654789321",
                      isbn13: "6547893ZXCVBN",
                      numeroEdicion: 2,
                      categorias: "Ficción Distópica",
                      estado: "Disponible",
                      reseña: "Un clásico distópico que describe un futuro sombrío donde el Gran Hermano y el Partido controlan todos los aspectos de la vida. Orwell presenta un mundo opresivo lleno de vigilancia, propaganda y manipulación de la verdad. La historia de Winston Smith, un hombre que intenta rebelarse contra el sistema, es un poderoso recordatorio de los peligros del totalitarismo. Publicada en 1949, su relevancia sigue siendo alarmante en el mundo contemporáneo. Es una obra que invita a reflexionar sobre la libertad y la resistencia."
                    },
                    {
                      id: 5,
                      name: "Crónica de una Muerte Anunciada",
                      autor: "Gabriel García Márquez",
                      genero: "Realismo Mágico",
                      valor: "$22",
                      tipoRecurso: "Físico",
                      cantidad: 6,
                      imagen: libro2,
                      formato: "Libro físico",
                      editorial: "Plaza & Janés",
                      coleccion: "Latinoamericana",
                      año: 1981,
                      idioma: "Español",
                      numeroPaginas: 120,
                      encuadernacion: "Tapa Blanda",
                      dimensiones: "20 x 13 cm",
                      isbn: "321654987",
                      isbn13: "3216549QWERTY",
                      numeroEdicion: 1,
                      categorias: "Literatura",
                      estado: "Disponible",
                      reseña: "Con un estilo narrativo que mezcla lo periodístico y lo literario, esta novela cuenta la historia del asesinato de Santiago Nasar en un pequeño pueblo caribeño. Aunque el crimen es anunciado con anticipación, las circunstancias y la pasividad de los habitantes hacen que el destino sea inevitable. García Márquez explora temas como la honra, la culpa y la fatalidad en una trama fascinante y cargada de simbolismo. Publicada en 1981, es un ejemplo brillante del talento del autor para combinar lo real y lo ficticio. Su brevedad no resta profundidad a su impacto."
                    },
                    {
                      id: 6,
                      name: "Rayuela",
                      autor: "Julio Cortázar",
                      genero: "Novela",
                      valor: "$30",
                      tipoRecurso: "Físico",
                      cantidad: 4,
                      imagen: libro3,
                      formato: "Libro físico",
                      editorial: "Sudamericana",
                      coleccion: "Clásicos Modernos",
                      año: 1963,
                      idioma: "Español",
                      numeroPaginas: 600,
                      encuadernacion: "Tapa Dura",
                      dimensiones: "22 x 14 cm",
                      isbn: "987123456",
                      isbn13: "9871234HGFDSA",
                      numeroEdicion: 2,
                      categorias: "Literatura",
                      estado: "Disponible",
                      reseña:  "Rayuela desafía las convenciones narrativas al permitir múltiples formas de lectura. A través de la vida de Horacio Oliveira y sus amigos, Cortázar explora temas como el amor, la soledad y la búsqueda de significado. La estructura de la novela invita al lector a ser un participante activo en la construcción de la historia. Publicada en 1963, es un emblema del Boom Latinoamericano. Su riqueza literaria y su originalidad la convierten en una experiencia única para los lectores."
                    }
                  
            ]);
        }, 2000);
    }, []);

    return books;
}