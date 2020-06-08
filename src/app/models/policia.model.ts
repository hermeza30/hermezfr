import { Persona } from './persona.model';
export class Policia {
  public _id:string;
  public persona:Persona;
  public jerarquia: string;
  public estado: boolean;
  public cuerpo: string;
  public espalda: string;
  public pecho: string;
  public largomanga: string;
  public cuello: string;
  public cinturapanza: string;
  public largotorso: string;
  public cintura: string;
  public cadera: string;
  public anchopierna: string;
  public tiro: string;
  public largopierna: string;
  public alturarodilla: string;
  public pantorrilla: string;
  public observacion: string;

  constructor(
    _id:string,
    _persona:Persona,
    _jerarquia:string,
    _estado?: boolean,
    _cuerpo?: string,
    _espalda?: string,
    _pecho?: string,
    _largomanga?: string,
    _cuello?: string,
    _cinturapanza?: string,
    _largotorso?: string,
    _cintura?: string,
    _cadera?: string,
    _anchopierna?: string,
    _tiro?: string,
    _largopierna?: string,
    _alturarodilla?: string,
    _pantorrilla?: string,
    _observacion?: string
  ) {
    this._id=_id;
    this.persona=_persona;  
    this.jerarquia = _jerarquia;
    this.estado = _estado;
    this.cuerpo = _cuerpo;
    this.espalda = _espalda;
    this.pecho = _pecho;
    this.largomanga = _largomanga;
    this.cuello = _cuello;
    this.cinturapanza = _cinturapanza;
    this.largotorso = _largotorso;
    this.cintura = _cintura;
    this.cadera = _cadera;
    this.anchopierna = _anchopierna;
    this.tiro = _tiro;
    this.largopierna = _largopierna;
    this.alturarodilla = _alturarodilla;
    this.pantorrilla = _pantorrilla;
    this.observacion = _observacion;
  }
}
