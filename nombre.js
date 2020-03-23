export default class Nombre{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this._nombre = nombre
        this._apellidoPaternos = apellidoPaterno
        this._apellidoMaternos = apellidoMaterno
    }

    getNombreCompleto(){
        return `${this._nombre} ${this._apellidoPaternos} ${this._apellidoMaternos}`
    }

    getApellidoNombre(){
        return `${this._apellidoPaternos} ${this._apellidoMaternos} ${this._nombre}`
    }

    getApellidoPaterno(){
        return `${this._apellidoPaternos}`
    }

    getIniciales(){
        return  (`${this._nombre.charAt(0)}${this._apellidoPaterno.charAt(0)}${this._apellidoMaterno.charAt(0)}`)

    }
}
