import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./pacienteAsegurado.js"

class Main{
    constructor(){

        this.nombreDoctor = new Nombre("Juan Manuel", "Michel", "Herrera")

        this.horas = new Tiempo(11,30,"AM")

        this.fechas = new Fecha(new Date(2001,4,30))

        this.nombres = new Nombre("José Gabino", "Morales", "González")

        this.fechaVigencia = new Fecha( new Date (2050,6,20) ) 

        let datoDoctor = {
            nombre: this.nombreDoctor,
            especialidad: "Oftalmologo",
            telefono: 3123194899,
            cedula: 10203050
        }
        this.doctor1 = new Doctor(datoDoctor)

        let datoPaciente = {
            nombre: this.nombres,
            fecha: this.fechas, 
            telefono: 3123194899
        }
        this.paciente = new Paciente(datoPaciente)

        let datoDoctor2 = {
            nombre: this.nombres, 
            especialidad: "Oftalmologo", 
            telefono: 3123194899, 
            cedula: 10203050
        }
        this.doctores = new Doctor(datoDoctor2)

        let datoCita = {
            fecha: this.fechas, 
            hora: this.horas, 
            doctor: this.doctor1, 
            paciente: this.paciente
        }
        this.citas = new Cita(datoCita)

        let datoHospital = {
            nombre: "Hospital Gab", 
            direccion: "Av. San Fernando #312"
        }
        this.hospitales = new Hospital(datoHospital)

        let datoPacienteAsegurado = {
            nombre: new Nombre("Laura Elizabeth", "Pacheco", "Larios"),
            fecha: new Fecha( new Date(2001,6,25) ), 
            telefono: 3123194899,
            numberPoliz: "S15482687D240356",
            fechVigencia: this.fechaVigencia,
            compa: "AT&A"
        }
        this.pacienteAsegurado = new PacienteAsegurado(datoPacienteAsegurado)

    }

    getTempo(){
        console.log(`Son las ${this.horas.getFormato12()}`)
        console.log(`Son las ${this.horas.getFormato24()}`)

    }

    getFecha(){
        console.log(`Año ${this.fechas.getAños()}`)
        console.log(`Meses ${this.fechas.getMeses()}`)
        console.log(`Semanas ${this.fechas.getSemanas()}`)
        console.log(`Días ${this.fechas.getDias()}`)
        console.log(`Fecha ${this.fechas.getFecha()}`)
        console.log(`Día ${this.fechas.getDiaFecha()}`)
    }

    getNombre(){
        console.log(`Nombre ${this.nombres.getNombreCompleto()}`)
        console.log(`Nombre ${this.nombres.getApellidoNombre()}`)
        console.log(`Iniciales ${this.nombres.getIniciales()}`)
    }

    getPaciente(){
        console.log(`Perfil ${this.paciente.getPerfil()}`)

        this.pacienteAsegurado.getPerfil()
    }

    getDoctor(){
        console.log(`${this.doctores.getPerfil()}`)
    }

    getCita(){
        console.log(`${this.citas.getCita()}`)
    }

    
    getHospital(){


        // this.hospitales.getRegistrarDoctor(this.doctor1)
        // this.hospitales.getRegistrarCitas(this.citas)

        // console.log(this.hospitales._encontrarDoctor(this.doctor1))
        // console.log(this.hospitales._encontrarIndiceDoctor(this.doctor1))
        



        // this.hospitales.getListarDoctores()
        // this.hospitales.getListarCitas()
    }

}

let app = new Main()
app.getPaciente()