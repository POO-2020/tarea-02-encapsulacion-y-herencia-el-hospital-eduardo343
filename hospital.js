import Doctor from "./doctor.js"
import Cita from "./cita.js"

export default class Hospital{
    constructor({nombre, direccion}){
        this._nombres = nombre
        this._direcciones = direccion
        this._doctores = new Array()
        this._citas = new Array()
    }
    getRegistrarDoctor(doctor){
        this._doctores.push(doctor)
    }

    getListarDoctores(){
        this._doctores.forEach((doctor,i) => {
            console.log(`No.- ${i + 1}: ${doctor.getPerfil()}`)
        })
    }

    _encontrarIndiceDoctor(doctor){
        let indice = this._doctores.findIndex((e => e.esIgualA(doctor)))
        return indice
    }

    _encontrarDoctor(doctor){
        let indice = this._doctores.find((e => e.esIgualA(doctor)))
        return indice
    }

    elimanr(doctor){
        let indice = this._encontrarIndiceEstudiante(doctor)

        if(indice < 0){
            return false
        }

        this._doctores.splice(indice, 1)
        return true
    }
    getRegistrarCitas(cita){
        this._citas.push(cita)
    }
    getListarCitas(){
        this._citas.forEach((cita,i) => {
            console.log(`No.- ${i + 1}: ${cita.getCita()}`)
        })
    }
}