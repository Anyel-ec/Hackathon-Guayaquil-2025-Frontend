interface FacebookResultRendererProps {
  result: FacebookResult;
}

export default function FacebookResultRenderer({
  result,
}: FacebookResultRendererProps) {
  return (
    <div>
      <p>
        <strong>Nombre:</strong> {result.resultado.nombre}
      </p>
      <p>
        <strong>Puntaje Financiero:</strong>{" "}
        {result.resultado.puntaje_financiero}
      </p>
      <p>
        <strong>Nivel Socioeconómico:</strong>{" "}
        {result.resultado.nivel_socioeconomico}
      </p>
      <h4 className="mt-2 text-lg font-bold">Indicadores Clave de Actividad Digital</h4>
      <p>
        <strong>Red de Contactos:</strong>{" "}
        {result.resultado.indicadores_clave.red_contactos}
      </p>
      <p>
        <strong>Movilidad:</strong>{" "}
        {result.resultado.indicadores_clave.movilidad}
      </p>
      <p>
        <strong>Actividad Financiera:</strong>{" "}
        {result.resultado.indicadores_clave.actividad_financiera}
      </p>
      <p>
        <strong>Transacciones Digitales:</strong>{" "}
        {result.resultado.indicadores_clave.transacciones_digitales}
      </p>
      <p>
        <strong>Uso de Tarjetas:</strong>{" "}
        {result.resultado.indicadores_clave.uso_de_tarjetas}
      </p>
      <p>
        <strong>Búsquedas Financieras:</strong>{" "}
        {result.resultado.indicadores_clave.busquedas_financieras}
      </p>
      <p>
        <strong>Interés en Inversiones:</strong>{" "}
        {result.resultado.indicadores_clave.interes_en_inversiones}
      </p>
      <p>
        <strong>Consumo de Contenido Financiero:</strong>{" "}
        {result.resultado.indicadores_clave.consumo_de_contenido_financiero}
      </p>
      <p>
        <strong>Estilo de Vida:</strong>{" "}
        {result.resultado.indicadores_clave.estilo_de_vida}
      </p>
      <p>
        <strong>Riesgo Crediticio:</strong>{" "}
        {result.resultado.indicadores_clave.riesgo_crediticio}
      </p>
      
      <h4 className="mt-2 text-lg font-bold">Recomendaciones</h4>
      <p>{result.resultado.recomendaciones}</p>
    </div>
  );
}
