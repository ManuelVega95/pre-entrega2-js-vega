import { Clubes } from './club.js';  // clase Clubes - para la creación de clubes

// Ejercicio 1 - Agregar clubes de rugby desde la consola //

const club = prompt("Ingresá el nombre del club"); // en los ejemplos que hice, usé clubes del torneo de la URBA. Ejemplo: Newman
const ubicacion = prompt("Ingresá la ubicacion del club"); // ejemplo: Benavídez
const categoria = prompt("Ingresá la categoria del club"); // ejemplo: Top 12

const nuevoClub = new Clubes(club, ubicacion, categoria);
console.log(nuevoClub); 
alert(`Se ha agregado el club ${nuevoClub.club}`);

// Ejercicio 2 - Agregar y eliminar clubes desde la consola //

const top12 = ["Newman", "SIC", "Alumni", "Belgrano", "CASI", "Hindú", "San Luis", "CUBA", "Buenos Aires", "Regatas", "Champagnat", "Atlético del Rosario"]
const clubesDescendidos = top12.slice(10); // va a eliminar de la lista a los dos clubes que descendieron esta temporada, es decir a Champagnat y Atlético del Rosario.
console.log("Clubes después de eliminar a los descendidos:", top12); // debería devolver al resto

top12.splice(10, 2); // eliminamos a los dos clubes descendidos de la lista

alert(`Los clubes que descendieron son: ${clubesDescendidos.join(" y ")}`); // Debería devolver que descendieron Champagnat y Atlético del Rosario

const campeonPrimeraA = prompt("Escribí al campeón de la Primera 'A' 2024"); // La Plata
const subCampeonPrimeraA = prompt("Escribí al subcampeón de la Primera 'A' 2024"); // Los Tilos

top12.push(campeonPrimeraA, subCampeonPrimeraA);

console.log("Los equipos que van a disputar el Top 12 del 2025 son los siguientes:", top12);
alert(`Los equipos que van a disputar el Top 12 del 2025 son: ${top12.join(", ")}`); // me va a mostrar cómo queda compuesto finalmente el Top 12 del 2025.

const primeraA = ["Los Matreros", "Deportiva Francesa", "Olivos", "Curupayti", "Pucara", "San Cirano", 
    "Lomas", "Hurling", "Pueyrredon", "San Albano", "San Andres", "U. de la Plata"];

primeraA.push(...clubesDescendidos); // agrego a los dos clubes descendidos del Top 12 a la Array creada recientemente con los 12 clubes restantes de esa categoría.

console.log("Los equipos que van a disputar la Primera A en 2025 son:", primeraA);
alert(`Los clubes que van a disputar la Primera A en 2025 son: ${primeraA.join(", ")}`) // me va a devolver con una alerta a los 14 equipos que van a jugar esa categoría. Y así lo haría con todas las categorías del torneo de la URBA 2025.


// Ejercicio 3 - Utilización de métodos de búsqueda //

const top12Urba2025 = [
    { nombre: "Newman", categoria: "Top 12" },
    { nombre: "SIC", categoria: "Top 12" },
    { nombre: "Alumni", categoria: "Top 12" },
    { nombre: "Belgrano", categoria: "Top 12" },
    { nombre: "CASI", categoria: "Top 12" },
    { nombre: "Hindú", categoria: "Top 12" },
    { nombre: "San Luis", categoria: "Top 12" },
    { nombre: "CUBA", categoria: "Top 12" },
    { nombre: "Buenos Aires", categoria: "Top 12" },
    { nombre: "Regatas", categoria: "Top 12" },
    { nombre: "Champagnat", categoria: "Primera A" },
    { nombre: "Atlético del Rosario", categoria: "Primera A" }
]

const clubBuscado = prompt("Por favor, escribí el club que estás buscando")

let encontrado = false;

top12.forEach(club => {
    if(club.nombre === clubBuscado && club.categoria === "Top 12") {
        console.log(`El club ${club.nombre} participa en el Top 12 del 2025.`);
        alert(`El club ${club.nombre} participa en el Top 12 del 2025.`);
        encontrado = true; // Marcamos que encontramos el club
    }
});

// Si no encontramos el club, mostramos un mensaje
if (!encontrado) {
    console.log("El club no participa en el Top 12 esta temporada.");
    alert("El club no participa en el Top 12 esta temporada.");
}

/*
---
*/
