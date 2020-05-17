import {uuid} from 'uuidv4';
import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment'
import AppointmentDTO from '../dto/AppointmentDTO';

/**
 * @author Jatdel.Dantas
*/
class AppointmentRepository{

  private appointments: Appointment[];

  /**
   * Construtor da Classe
   */
  constructor(){
    this.appointments = [];
  }

   /**
   * Criar um agendamento
   */
  public create(agendamento: AppointmentDTO): AppointmentDTO{
    const appointment = new Appointment();
    let id: string = uuid();
    appointment.setId(id)
    appointment.setProvider(agendamento.getProvider());
    appointment.setDate(agendamento.getDate());

    this.appointments.push(appointment);

    return this.converterAppointmentToAppointmentDTO(appointment);
  }

  /**
   * Converte o agendamento para retorno, para nao expor a entidade
  */
  private converterAppointmentToAppointmentDTO(appointment:Appointment): AppointmentDTO{
    const appointmentDTO = new AppointmentDTO();
    appointmentDTO.setId(appointment.getId());
    appointmentDTO.setProvider(appointment.getProvider());
    appointmentDTO.setDate(appointment.getDate());
    return appointmentDTO;
  }

  /**
   * Retorna todos os agendamentos
   */
  public all():Array<AppointmentDTO>{
    const listAgendamento = new Array<AppointmentDTO>();

    if(this.appointments !== null && this.appointments.length > 0){
      this.appointments.forEach(element => {
        listAgendamento.push(this.converterAppointmentToAppointmentDTO(element));
      });
    }

    return listAgendamento;
  }

  /**
   * Obter agendamento por data
   */
  public findByDate(date: Date): Appointment | null{
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.getDate()),
    );

    return findAppointment || null;
  }

}

export default AppointmentRepository;
