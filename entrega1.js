/**
 * Punto 1
 * Declarar una clase Usuario
 */
class Usuario {
    constructor(nombre, apellido) {
        /**
         * Punto 2
         * Hacer que el usuario cuente con los atributos
         */
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = []
        this.mascotas = []

    }
    /**
     * Punto 3
     * Metodos del Usuario
     */
    /**
 * punto 3 a
 */
    getFullName() {
        console.log('Retorna nombre y apellido', `${this.nombre} ${this.apellido}`)
        return `${this.nombre} ${this.apellido}`
    }

    /**
     * punto 3 b 
     */

    addMascota(mascota) {
        this.mascotas.push(mascota)
        console.log('Array de mascotas', this.mascotas)
        return this.mascotas
    }
    /**punto 3 c*/
    countMascotas() {
        console.log('cantidad de mascotas', this.mascotas.length)
        return this.mascotas.length
    }
    /**
 * punto 3 d
 */
    addBook(nombre, autor) {
        this.libros.push({
            nombre,
            autor
        })
        console.log('libros', this.libros)
    }

    /**
     * punto 3 e
     */
    getBookNames() {
        const onlyNameBook = []
        for (let i = 0; i < this.libros.length; i++) {
            onlyNameBook.push(this.libros[i].nombre)
        }
        console.log('solo nombre de libros', onlyNameBook)
        return onlyNameBook
    }
}
/**
 * Punto 4
 */
const pedroMartinez = new Usuario('Pedro', 'Martinez')
pedroMartinez.getFullName()
pedroMartinez.addMascota('chimuelo')
pedroMartinez.addMascota('firulais')
pedroMartinez.addMascota('tom')
pedroMartinez.countMascotas()
pedroMartinez.addBook('Harry potter', 'J.K.Rowling')
pedroMartinez.addBook('Señor de los anillos', 'Tolkien')
pedroMartinez.getBookNames()

