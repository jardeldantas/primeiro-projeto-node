import AppointmentRepository from '../repositories/AppointmentRepository';

import AppointmentDTO from '../dto/AppointmentDTO';
import { startOfHour } from 'date-fns';

/**
 * Classe para controlar as regras de negocio da aplicacao
 * para a criacao de agendamento.
 */
class CreateAppointmentService {

  private appointmentRepository: AppointmentRepository;

  /**
   * Dependency Inversion (SOLID)
   */
  constructor(appointmentRepository: AppointmentRepository){
    this.appointmentRepository = appointmentRepository;
  }

  /**
   * Metodo para realizar um agendameto
   *
   * @param request
   */
  public execute(request: AppointmentDTO) : AppointmentDTO{
    const appointmentDate = startOfHour(request.getDate());

    /** Verifica se já possui um agendamento marcado */
    const findAppointmentInSameDate = this.appointmentRepository.findByDate(
      appointmentDate,
    );

    /**Validando se o agendamento já existe e sobe uma exceção(erro 400)  */
    if(findAppointmentInSameDate){
      throw Error('This appointment is already booked.');
    }

    /** Preenchendo um objeto */
    const appointmentDTO = new AppointmentDTO();
    appointmentDTO.setProvider(request.getProvider());
    appointmentDTO.setDate(appointmentDate);


    /**Adicionando um agendamento no Array*/
    return this.appointmentRepository.create(appointmentDTO);
  }

}

export default CreateAppointmentService;
