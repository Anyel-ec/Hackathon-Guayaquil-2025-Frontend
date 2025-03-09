interface LinkedInResult {
  message: string;
  resultado: ResultadoEvaluacionProfesionalFinanciera;
}

interface ResultadoEvaluacionProfesionalFinanciera {
  nombre: string;
  puntaje_profesional: number;
  nivel_experiencia: string;
  potencial_de_crecimiento: string;
  indicadores_clave: IndicadoresClaveProfesionalFinanciera;
  recomendaciones: string;
}

interface IndicadoresClaveProfesionalFinanciera {
  red_contactos: string;
  habilidades_tecnicas: string;
  nivel_educativo: string;
  experiencia_laboral: string;
  demanda_de_mercado: string;
  estabilidad_laboral: string;
  nivel_ingresos_estimado: string;
  proyeccion_salarial: string;
  capacidad_de_ahorro: string;
  riesgo_crediticio: string;
  historial_crediticio: string;
}
