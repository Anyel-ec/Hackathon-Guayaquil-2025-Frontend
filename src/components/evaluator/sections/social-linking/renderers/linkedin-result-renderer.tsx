interface LinkedInResultRendererProps {
  result: LinkedInResult;
}

export default function LinkedInResultRenderer({
  result,
}: LinkedInResultRendererProps) {
  return (
    <div>
      <p>
        <strong>Nombre:</strong> {result.resultado.nombre}
      </p>
      <p>
        <strong>Puntaje Profesional:</strong>{" "}
        {result.resultado.puntaje_profesional}
      </p>
      <p>
        <strong>Nivel de Experiencia:</strong>{" "}
        {result.resultado.nivel_experiencia}
      </p>
      <p>
        <strong>Potencial de Crecimiento:</strong>{" "}
        {result.resultado.potencial_de_crecimiento}
      </p>
      <h4 className="mt-2 text-lg font-bold">Indicadores Clave</h4>
      <p>
        <strong>Red de Contactos:</strong>{" "}
        {result.resultado.indicadores_clave.red_contactos}
      </p>
      <p>
        <strong>Habilidades Técnicas:</strong>{" "}
        {result.resultado.indicadores_clave.habilidades_tecnicas}
      </p>
      <p>
        <strong>Nivel Educativo:</strong>{" "}
        {result.resultado.indicadores_clave.nivel_educativo}
      </p>
      <p>
        <strong>Experiencia Laboral:</strong>{" "}
        {result.resultado.indicadores_clave.experiencia_laboral}
      </p>
      <p>
        <strong>Demanda de Mercado:</strong>{" "}
        {result.resultado.indicadores_clave.demanda_de_mercado}
      </p>
      <p>
        <strong>Capacidad de Ahorro:</strong>{" "}
        {result.resultado.indicadores_clave.capacidad_de_ahorro}
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
