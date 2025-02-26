const cofre = {
    ubicacion: "Templo",
    contenido: {
        arma: "Arco Encantado",
        armadura: "Casco de netherite",
        Obsidiana: 64
    }
};

const { ubicacion, contenido: { arma } } = cofre;
console.log(`El cofre en el ${ubicacion} contiene un ${arma}.`);

const NuevoObjeto = "Pico de Diamante";
const NuevoCofre = { ...cofre.contenido, NuevoObjeto };
console.log(NuevoCofre);