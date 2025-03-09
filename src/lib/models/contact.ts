export enum ContactStatus {
  Pending = "Pendiente",
  Accepted = "Aceptado",
}

export interface Contact {
  cedula: string;
  estado: ContactStatus;
}
