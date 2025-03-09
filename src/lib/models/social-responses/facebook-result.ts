interface FacebookResult {
  message: string;
  resultado: ResultadoEvaluacionActividadDigital;
}

interface ResultadoEvaluacionActividadDigital {
  nombre: string;
  puntaje_financiero: number;
  nivel_socioeconomico: string;
  indicadores_clave: IndicadoresClaveActividadDigital;
  recomendaciones: string;
}

interface IndicadoresClaveActividadDigital {
  red_contactos: string;
  movilidad: string;
  ubicacion_actual: string;
  historial_de_movimiento: string[];
  actividad_financiera: string;
  transacciones_digitales: number;
  gasto_promedio: number;
  uso_de_tarjetas: string;
  busquedas_financieras: string;
  interes_en_inversiones: string;
  consumo_de_contenido_financiero: string;
  estilo_de_vida: string;
  riesgo_crediticio: string;
}