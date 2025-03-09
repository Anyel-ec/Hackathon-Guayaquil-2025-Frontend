export enum AreaDeConsumo {
  Alimentacion = "Alimentación",
  Vivienda = "Vivienda",
  Transporte = "Transporte",
  Salud = "Salud",
  Educacion = "Educación",
  Ocio = "Ocio",
}

export default interface Expense {
  area: AreaDeConsumo;
  total: number;
}
