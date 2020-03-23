import Nombre from "./nombre.js"
export default class Doctor{
    constructor({nombre, especialidad, telefono, cedula}){
        this._nombres = nombre
        this._especialidades = especialidad
        this._telefonos = telefono
        this._cedulas = cedula
    }
    getCedula(){
        return this._cedulas
    }

    getApellidoPaternoDoc(){
        return this._nombres.getApellidoPaterno()
    }

    getPerfil(){
        return `${this._cedulas}, ${this._especialidades}, Dr.${this._nombres.getApellidoPaterno()}, ${this._telefonos}`
    }

    esIgualA(doctor){
        if(doctor.getCedula() === this._cedulas){
            return true
        }else{
            return false
        }
    }
}