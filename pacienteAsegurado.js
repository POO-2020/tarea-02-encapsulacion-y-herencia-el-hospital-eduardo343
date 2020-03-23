import Paciente from "./paciente.js";

export default class PacienteAsegurado extends Paciente{

    constructor({nombre, fecha, telefono, numberPoliz, fechVigencia, compa}){
        super({nombre, fecha, telefono})
        this._numberPoliz = numberPoliz
        this._fechVigencia = fechVigencia
        this._compa = compa
    }   

    getPerfil(){
        console.log(`${this._nombre.getNombreCompleto()}, ${this._fechas.getFecha()}, ${this._telefonos}, ${this._numberPoliz}, ${this._fechVigencia.getFecha()}, ${this._compa}`)
    }
}