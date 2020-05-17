/**
 * @author Jatdel.Dantas
*/
class Appointment{

  /** id do Agendamento*/
  private id: string;

  /** nome do provedor do serviço */
  private provider: string;

  /** data do agendamento */
  private date: Date;

  /**
   * Método Construtor
   *
   * @param provider
   * @param date
   */
  constructor(){
    this.id = '';
    this.provider = '';
    this.date = new Date('');
  }

  /** */
  public setProvider(provider: string):void{
    this.provider = provider;
  }

  /** */
  public getProvider(): string{
    return this.provider;
  }

  /** */
  public setDate(date: Date):void{
    this.date = date;
  }

  /** */
  public getDate(): Date{
    return this.date;
  }

  /** */
  public setId(id: string):void{
    this.id = id;
  }

  /** */
  public getId(): string{
    return this.id;
  }

}

export default Appointment;
