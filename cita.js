export default class Cita{
    constructor({fecha, hora, doctor, paciente}){
        this._fechas = fecha
        this._horas = hora
        this._doctores = doctor
        this._pacientes = paciente
    }
    getCita(){
        return `${this._fechas.getFecha()}, ${this._horas.getFormato24()}, Dr. ${this._doctores.getApellidoPaternoDoc()}, ${this._pacientes.getNombreCompletoPac()}`
    }
}