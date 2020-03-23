import Nombre from "./nombre.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Cita from "./cita.js"
import Tiempo from "./tiempo.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./pacienteAsegurado.js"

class Main{//${this.}

    constructor(){
        this.testPepe = new Nombre("Pepe","Hernandez","Rodrigo")
        this.testGarcia = new Nombre("Garcia", "Correas", "Flores")
        this.testTiempo = new Tiempo(7,53,"pm")

        let datosPaciente = {
            nombre: this.testPepe,
            fechaNacimiento: new Fecha(new Date(2002,5,20)),
            telefono: "312-526-2456"
        }
        let datosPacienteAsegurado = {
            nombre: new Nombre("Leonardo","Isordia","Avila"),
            fechaNacimiento: new Fecha(new Date(2009,7,11)),
            telefono: "312-526-2456",
            numeroPoliza: 1578,
            fechaFinVigencia: new Fecha(new Date(2015,4,5)),
            compañia: "Telcel"
        }
        let datosDoct = {
            nombre: this.testGarcia,
            especialidad: "Oftalmologia",
            telefono: "312-457-3641",
            cedula: "105413587"
        }
        let datosHospital = {
            nombre: "Hospital Chido",
            direccion: "Calle manzanas, Num #674"
        }
        this.testHosp = new Hospital(datosHospital)
        this.paciente = new Paciente(datosPaciente)
        this.testDoct = new Doctor(datosDoct)
        this.pacienteAsegurado = new PacienteAsegurado(datosPacienteAsegurado)

        let datosCita = {
            fecha: new Fecha(new Date(2002,5,20)),
            hora: this.testTiempo,
            doctor: this.testDoct,
            paciente: this.paciente
        }

        this.testCitaa = new Cita(datosCita)
    }

    testNombre(){
        
        console.log(this.testPepe.getNombreCompleto())
        console.log(this.testPepe.getApellidoNombre())
        console.log(this.testPepe.getIniciales())

    }

    testDoc(){
        console.log(this.testDoct.getPerfil())
    }

    testPac(){
        console.log(this.paciente.getPerfil())
        //testPaciente Asegurado
        console.log(this.pacienteAsegurado.getPerfil())
    }
    testCita(){
        console.log(this.testCitaa.getCita())
    }

    testHospital(){
        //tests 1
        console.log(this.testHosp.buscarDoctor(this.testDoct))
        console.log(this.testHosp.buscarCita(this.testCitaa))
        console.log(this.testHosp.eliminarDoctor(this.testDoct))
        console.log(this.testHosp.eliminarCita(this.testCitaa))

        this.testHosp.registrarDoctor(this.testDoct)
        this.testHosp.registrarCita(this.testCitaa)

        //tests 2
        console.log(this.testHosp.buscarDoctor(this.testDoct))
        console.log(this.testHosp.buscarCita(this.testCitaa))
        console.log(this.testHosp.eliminarDoctor(this.testDoct))
        console.log(this.testHosp.eliminarCita(this.testCitaa))

        this.testHosp.listarDoctores()
        this.testHosp.listarCitas()

        //tests 3
        console.log(this.testHosp.registrarDoctor(this.testDoct))
        console.log(this.testHosp.registrarCita(this.testCitaa))
        console.log(this.testHosp.registrarDoctor(this.testDoct))
        console.log(this.testHosp.registrarCita(this.testCitaa))

        console.log(this.testHosp.modificarDoctor(this.testDoct, this.testDoct))
        console.log(this.testHosp.modificarCita(this.testCitaa, this.testCitaa))
        this.testHosp.listarDoctores()
        this.testHosp.listarCitas()
    }
}

let test = new Main();
test.testNombre();
test.testDoc();
test.testPac();
test.testCita();
test.testHospital();