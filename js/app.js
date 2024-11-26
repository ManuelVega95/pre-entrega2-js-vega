import { Clubes } from './club.js';  // importamos la clase Clubes - para la creación de clubes

// Ejercicio 1 - Agregar clubes de rugby //

const club = prompt("Ingresá el nombre del club"); // en los ejemplos que hice, usé clubes del torneo de la URBA. Ejemplo: Newman
const ubicacion = prompt("Ingresá la ubicacion del club"); // ejemplo: Benavídez
const categoria = prompt("Ingresá la categoria del club"); // ejemplo: Top 12

const nuevoClub = new Clubes(club, ubicacion, categoria);
console.log(nuevoClub); 
alert(`Se ha agregado el club ${nuevoClub.club}`);

// Ejercicio 2 - Agregar y eliminar clubes //

const top12 = ["Newman", "SIC", "Alumni", "Belgrano", "CASI", "Hindú", "San Luis", "CUBA", "Buenos Aires", "Regatas", "Champagnat", "Atlético del Rosario"]

console.log(`Tabla de posiciones del URBA Top 12 en 2024: ${top12.join(", ")}`);
alert(`Tabla de posiciones del URBA Top 12 en 2024: ${top12.join(", ")}`); // simple mensaje con la tabla de la temporada del Top 12 previo a la modificación que vamos a hacer.

const clubesDescendidos = top12.slice(10); // va a eliminar de la lista a los dos clubes que descendieron esta temporada, es decir a Champagnat y Atlético del Rosario. Lo ideal sería UNO seleccionar los clubes que descendieron, pero quería usar el slice de esta forma sólo para este ejemplo.
console.log("Clubes después de eliminar a los descendidos:", top12); // debería devolver al resto sin los 2 descendidos.

top12.splice(10, 2); // eliminamos a los dos clubes descendidos de la lista

alert(`Los clubes que descendieron son: ${clubesDescendidos.join(" y ")}`); // Debería devolver un cartel que contenga que descendieron Champagnat y Atlético del Rosario

const campeonPrimeraA = prompt("Escribí al campeón de la Primera 'A' 2024"); // La Plata
const subCampeonPrimeraA = prompt("Escribí al subcampeón de la Primera 'A' 2024"); // Los Tilos

const ascenso = [campeonPrimeraA, subCampeonPrimeraA];

console.log(`Felicitaciones por el ascenso a la máxima categoría de la URBA a ${ascenso.join(" y ")}`);
alert(`Felicitaciones por el ascenso a la máxima categoría de la URBA a ${ascenso.join(" y ")}`); // cartel felicitando a los dos ascendidos al Top 12

top12.push(campeonPrimeraA, subCampeonPrimeraA); // para agregar a los dos ascendidos

top12.sort(); // para que se ordenen los clubes en orden alfabético antes de que salte el cartel con los clubes.
console.log("Los equipos que van a disputar el Top 12 del 2025 son los siguientes:", top12);
alert(`Los equipos que van a disputar el Top 12 del 2025 son: ${top12.join(", ")}`); // me va a mostrar cómo queda compuesto finalmente el Top 12 del 2025.

const primeraA = ["Los Matreros", "Deportiva Francesa", "Olivos", "Curupayti", "Pucara", "San Cirano", 
    "Lomas", "Hurling", "Pueyrredon", "San Albano", "San Andres", "Universitario de la Plata"];

primeraA.push(...clubesDescendidos); // agrego a los dos clubes descendidos del Top 12 a la Array creada recientemente con los 12 clubes restantes de esa categoría.

primeraA.sort(); // para que se ordenen los clubes en orden alfabético antes de que salte el cartel con los clubes.
console.log("Los clubes que van a disputar la Primera A en 2025 son:", primeraA);
alert(`Los clubes que van a disputar la Primera A en 2025 son: ${primeraA.join(", ")}`) // me va a devolver con una alerta a los 14 equipos que van a jugar esa categoría. Y así lo haría con todas las categorías del torneo de la URBA 2025 en un caso hipotético.

// Ejercicio 3 - Utilización de For Each //

// Lista completa con los clubes del Top 12 y Primera A de la URBA 2025

const urba2025 = [
    { nombre: "Newman", categoria: "Top 12" },
    { nombre: "SIC", categoria: "Top 12" },
    { nombre: "Alumni", categoria: "Top 12" },
    { nombre: "Belgrano Athletic", categoria: "Top 12" },
    { nombre: "CASI", categoria: "Top 12" },
    { nombre: "Hindú", categoria: "Top 12" },
    { nombre: "San Luis", categoria: "Top 12" },
    { nombre: "CUBA", categoria: "Top 12" },
    { nombre: "Buenos Aires", categoria: "Top 12" },
    { nombre: "Regatas", categoria: "Top 12" },
    { nombre: "La Plata", categoria: "Top 12" },
    { nombre: "Los Tilos", categoria: "Top 12" },
    { nombre: "Champagnat", categoria: "Primera A" },
    { nombre: "Atlético del Rosario", categoria: "Primera A" },
    { nombre: "Los Matreros", categoria: "Primera A" },
    { nombre: "Deportiva Francesa", categoria: "Primera A" },
    { nombre: "Olivos", categoria: "Primera A" },
    { nombre: "Curupaytí", categoria: "Primera A" },
    { nombre: "Pucará", categoria: "Primera A" },
    { nombre: "San Cirano", categoria: "Primera A" },
    { nombre: "Lomas", categoria: "Primera A" },
    { nombre: "Hurling", categoria: "Primera A" },
    { nombre: "Pueyrredón", categoria: "Primera A" },
    { nombre: "San Albano", categoria: "Primera A" },
    { nombre: "San Andrés", categoria: "Primera A" },
    { nombre: "Universitario de la Plata", categoria: "Primera A" }
]

// búsqueda de un club del Top 12

const clubTop12 = prompt("Por favor, escribí el club que estás buscando") // En este ejemplo podemos poner a Alumni, o cualquier otro club que participe del Top 12.

let encontrado = false;

urba2025.forEach(club => {
    if(club.nombre === clubTop12 && club.categoria === "Top 12") {
        console.log(`El club ${club.nombre} participa en el Top 12 del 2025.`); // si usamos a Alumni en este ejemplo, debería poner un cartel aclarando que Alumni participa en el Top 12
        alert(`El club ${club.nombre} participa en el Top 12 del 2025.`);
        encontrado = true; // acá marcamos que encontramos al club buscado.
    }
});

// Si no encontramos el club, mostramos un mensaje
if (!encontrado) {
    console.log(`El club no participa en el Top 12 del 2025.`);
    alert(`El club no participa en el Top 12 del 2025.`); // si usamos a Champagnat en este ejemplo, debería poner un cartel aclarando que el club buscado no participa del Top 12.
}

// búsqueda de un club de la Primera A, prácticamente lo mismo que en el caso anterior, con la diferencia de categoría

const clubPrimeraA = prompt("Por favor, escribí el club que estás buscando") // En este ejemplo podemos poner de ejemplo a Champagnat, o cualquier otro club que participe de la Primera "A"

let encontrado2 = false;

urba2025.forEach(club => {
    if(club.nombre === clubPrimeraA && club.categoria === "Primera A") {
        console.log(`El club ${club.nombre} participa en la Primera "A" del 2025.`); // si usamos a Champagnat en este ejemplo, debería poner un cartel aclarando que este club participa en la Primera A
        alert(`El club ${club.nombre} participa en la Primera "A" del 2025.`);
        encontrado2 = true; // acá marcamos que encontramos al club buscado.
    }
});

// Si no encontramos el club, mostramos un mensaje
if (!encontrado2) {
    console.log(`El club no participa en la Primera "A" del 2025.`);
    alert(`El club no participa en la Primera "A" del 2025.`); // si usamos a Alumni en este ejemplo, debería poner un cartel aclarando que el club buscado no participa de la Primera A.
}

// Ejercicio 4 - Búsqueda general de clubes dentro de la Array con una función

function buscarClub() {
    const clubUrba = prompt("Por favor, escribí el nombre del club que estás buscando:").trim();

    // Buscar el club
    const club = urba2025.find(c => c.nombre.toLowerCase() === clubUrba.toLowerCase());

    if (club) { // si encuentra al club dentro de la base de datos, que devuelva al club con la categoría en la que juega
        alert(`El club ${club.nombre} participa en la categoría "${club.categoria}" del torneo de la URBA 2025.`);
        console.log(`El club ${club.nombre} participa en la categoría "${club.categoria}" del torneo de la URBA 2025.`);
    } else { // si no encuentra al club dentro de la base de datos, que devuelva un error.
        alert(`El club ${clubUrba} no está registrado en el Torneo de la URBA 2025.`);
        console.log(`El club ${clubUrba} no está registrado en el Torneo de la URBA 2025.`);
    }
}
buscarClub(); // para que se pueda utilizar la función
buscarClub();
buscarClub();
buscarClub();
buscarClub();
buscarClub(); // algunas funciones extras para probar que funciona con los distintos clubes

// Uso del método Sort() para que, una vez quede todo hecho, se organicen los clubes en orden alfabético
urba2025.sort((a, b) => a.nombre.localeCompare(b.nombre));
alert(`Finalizó la operación. Se ordenaron los clubes en orden alfabético.`);
console.log(urba2025);
