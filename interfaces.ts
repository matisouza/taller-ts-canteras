// creo una interfaz con atributos para usar de modelo para mis heroes
interface IHero {
    nombre: string;
    poder: number;
}

// Uso una interfaz para definir metodos y su tipo de retorno, pero no puede tener logica
interface IHeroAcciones {
    agregarHero(hero: IHero): void;
    actualizarHero(hero: IHero, newHero: IHero): IHero;
    buscarHero(poder: number): IHero;
}

// Esta clase se encarga de manipular un array
class Heroes implements IHeroAcciones {

    private heroes: IHero[] = []

    agregarHero( hero: IHero ): void {
        this.heroes.push( hero )
    }

    buscarHero( poder: number ): IHero{
       const hero =  this.heroes.find( hero => hero.poder === poder )

       if( !hero ) throw new Error(' no existe el heroe ')

       return hero
    }
    
    actualizarHero( hero: IHero, newHero: IHero ): IHero {

        // si no lo encuentra devuelve -1
        const index = this.heroes.indexOf( hero )

        // que pasa si encuentra -1, debo lanzar un error
        if( index == -1 ) throw new Error( 'Hero no encontrado' )

        /**
         * si lo encuentro entonces, uso el operador
         * spread para esparcir las propiedades deambos objetos,
         * como ambos objetos tienen los mismos atributos entonces 
         * solo actualizamos los valores
         */
        this.heroes[index] = { ...hero, ...newHero }
        
        return this.heroes[index]
    }
}

const ironman: IHero = {
    nombre: "Ironman",
    poder: 500
}
const newIronman: IHero = {
    nombre: "nuevoIronman",
    poder: 600
}


const spiderman: IHero = {
    nombre: "Spiderman",
    poder: 390
}

const elEncargadoDeReclutarHeroes = new Heroes();

elEncargadoDeReclutarHeroes.agregarHero(ironman);
elEncargadoDeReclutarHeroes.agregarHero(spiderman);

// elEncargadoDeReclutarHeroes.actualizarHero( ironman, newIronman )

// elEncargadoDeReclutarHeroes.buscarHero( 390 )

console.log(elEncargadoDeReclutarHeroes.buscarHero( 390 ))
