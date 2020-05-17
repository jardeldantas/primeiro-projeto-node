import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentDTO from '../dto/AppointmentDTO';
import AppointmentRepository from '../repositories/AppointmentRepository';
import CreateAppointmentServices from '../services/CreateAppointmentServices';

const appointmentsRouter = Router();

/**Declarando uma variavel */
const appointmentRepository = new AppointmentRepository();

/**
 * Metodo para consultar todos os agendamentos
 */
appointmentsRouter.get('/', (request, response)=> {
  const listAppointment = appointmentRepository.all();

  return response.json(listAppointment);
});

/**
 * Metodo para incluir Agendamento
 * Rota isolada para agendamentos de serviços
*/
appointmentsRouter.post('/', (request, response) => {
  try {
    const {provider, date} = request.body;

    /**Configurando o horário de agendamento para não ficar com horário quebrado */
    const parsedDate = parseISO(date);

    /** Preenchendo um objeto */
    const appointmentDTO = new AppointmentDTO();
    appointmentDTO.setProvider(provider);
    appointmentDTO.setDate(parsedDate);

    const createAppointmentServices = new CreateAppointmentServices(
      appointmentRepository,
    );

    /**Chamada do servico para criacao de agendamento */
    const appointment = createAppointmentServices.execute(appointmentDTO);

    /**Retornando um Agendamento */
    return response.json(appointment)
  } catch (err) {
    /**Lancando excecao */
    return response.status(400).json({error: err.message});
  }
});

export default appointmentsRouter;
