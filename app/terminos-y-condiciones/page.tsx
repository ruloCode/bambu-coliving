import React from "react";
import Footer from "../../components/footer";


const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-700">
      <h1 className="text-4xl font-bold text-green-800 mb-6 border-b-2 border-green-300 pb-2">Términos y Condiciones de Membresía de Bambu Coliving</h1>

      <p className="mb-4">El presente documento establece los términos y condiciones (en adelante, los "T&C") que rigen la relación contractual de naturaleza comercial entre Bambu Coliving (en adelante, el "Operador") y la persona que adquiere una membresía (en adelante, el "Residente" o el "Miembro").</p>

      <p className="mb-8">La aceptación de una reserva y el pago de la Tarifa de Membresía por parte del Residente constituyen la aceptación plena e incondicional de los presentes T&C.</p>

      <h2 className="text-3xl font-semibold text-green-700 mb-4">Sección 1: Objeto, Naturaleza del Contrato y Definiciones</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Objeto del Contrato:</span> Regular la adquisición de una membresía que otorga al Residente el derecho a una licencia de uso temporal sobre un Espacio Privado y el acceso a los Espacios Comunes y Servicios ofrecidos por el Operador en sus instalaciones.</li>
        <li><span className="font-bold">Naturaleza Jurídica:</span> Este contrato es de naturaleza atípica y comercial. No constituye un contrato de arrendamiento de vivienda urbana bajo los términos de la Ley 820 de 2003, sino un contrato de prestación de servicios de alojamiento compartido y membresía comunitaria, regido en su totalidad por las normas del Código Civil y el Código de Comercio de Colombia. La vigencia mínima de toda membresía es de un (1) mes, por lo que la normativa de hospedaje turístico no es aplicable a este acuerdo.</li>
        <li><span className="font-bold">Definiciones:</span>
          <ul className="list-circle pl-6">
            <li> <span className="font-bold">Operador:</span>  Bambu Coliving</li>
            <li> <span className="font-bold">Residente/Miembro:</span>Persona natural que adquiere la membresía</li>
            <li><span className="font-bold">Espacio Privado:</span>La habitación individual y su baño privado asiganada al residente para su uso exclusivo</li>
            <li><span className="font-bold">Espacios Comunes:</span> Todas las áreas dentro de las instalaciones del operador que no son Espacios privados, inclyendo, per no limitandose a: Cocina, sala de estar, espacios de coworking y patio.</li>
            <li><span className="font-bold">Tarifa de Membresía:</span> El pago periódico que realiza el Residente a cambio de los derechos otorgados por la membresía</li>
            <li><span className="font-bold">Reglamento Interno:</span> Las normas de convivencia y uso de espacios, que forman parte de este contrato</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 2: Proceso de Admisión y Requisitos del Residente</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Proceso de Admisión:</span>El solicitante deberá completar el formulario de aplicación en línea, proporcionando información veraz y completa. El Operador se reserva el derecho de admisión y podrá verificar la identidad y consultar antecedentes, en la medida permitida por la ley. La decisión del Operador es discrecional y no requiere justificación, siempre que no se base en criterios discriminatorios prohibidos por la Constitución colombiana.</li>
        <li><span className="font-bold">Requisitos de Elegibilidad:</span>
          <ol className="list-circle pl-6">
            <li>Mayor de edad (18 años en Colombia)</li>
            <li>Documento de identidad válido</li>
            <li>Aceptar T&C, Manual de Convivencia, Política de Datos</li>
          </ol>
        </li>
      </ul>


      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 3: Condiciones Económicas.</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Tarifa de Membresía y pagos:</span> El Residente se obliga a pagar una Tarifa de Membresía, cuyo valor se especifica en la confirmación de la reserva. Dicha tarifa es un pago integral que incluye el derecho de uso del Espacio Privado, el acceso a Espacios Comunes y servicios como agua, energía, gas, internet de alta velocidad, limpieza de áreas comunes y acceso a eventos comunitarios .</li>
        <li><span className="font-bold">Descuentos por estancia prolongada:</span> El Operador ofrece tarifas con descuento para membresías con una vigencia inicial de dos (2) y tres (3) meses. El valor final y las condiciones específicas de dichos descuentos se comunicarán y aplicarán en la confirmación de la reserva. La aceptación de esta tarifa con descuento implica un compromiso de permanencia por el término completo seleccionado.</li>
        <li><span className="font-bold">Modalidad de Pago:</span> La Tarifa de Membresía se pagará anticipadamente por el tiempo contratado.</li>
        <li><span className="font-bold">Soporte de seguridad:</span>
          <ul className="list-circle pl-6">
            <li><span className="font-bold">Constitución:</span>Al inicio de la membresía, el Residente deberá constituir un soporte de Seguridad, cuyo monto se especifica en la reserva. Este soporte no es un pago anticipado de la tarifa y no generará intereses.</li>
            <li><span className="font-bold">Finalidad:</span>Su propósito es garantizar el cumplimiento de las obligaciones del Residente, cubriendo daños a la propiedad que excedan el desgaste normal, penalidades adeudadas o costos de limpieza profunda.</li>
            <li><span className="font-bold">Reembolso:</span>El soporte será reembolsado dentro de los treinta (30) días calendario siguientes a la terminación de la membresía, previa inspección y deducción de los valores adeudados, con una liquidación detallada.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 4: Vigencia, Renovación y Terminación</h2>
      <ul className="list-disc pl-6 space-y-2">>
        <li><span className="font-bold">Vigencia y Renovación:</span>La vigencia inicial de la membresía será la establecida en la reserva, con un mínimo de un (1) mes</li>
        <li><span className="font-bold">Terminación por incumplimiento grave (Expulsión):</span>El Operador podrá terminar la membresía de forma inmediata, exigiendo la desocupación en 24 horas, en caso de faltas graves como:
          <ul className="list-circle pl-6">
            <li>Posesión, consumo o distribución de sustancias psicoactivas ilegales.</li>
            <li>Realización de actividades ilegales.</li>
            <li>Agresión física, acoso o comportamiento que ponga en riesgo la seguridad de otros.</li>
            <li>Daños maliciosos a la propiedad.</li>
            <li>Violación reiterada del Reglamento Interno, previa advertencia por escrito.</li>
          </ul>
        </li>
      </ul>

      
      

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 5: Política de Cancelación y Terminación Anticipada</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Cancelación antes del Check-in:</span>
          <ul className="list-circle pl-6">
            <li><span className="font-bold">Mayor a 30 días:</span> Reembolso del 100% de los pagos realizados (menos gastos de envío).</li>
            <li><span className="font-bold">Entre 15 y 30 días:</span> Se aplicará una penalidad equivalente al 50% de la Tarifa de Membresía.</li>
            <li><span className="font-bold">Menor a 15 días:</span> No habrá lugar a reembolso.</li>
          </ul>
        </li>
        <li><span className="font-bold">Terminación Anticipada (Después del Check-in):</span> Esta cláusula regula la decisión del Residente de terminar la membresía antes de la fecha de finalización del período por el cual se comprometió.
          <ul className="list-circle pl-6">
            <li><span className="font-bold">Membresía Mensual:</span>Si el Residente con una membresía de un mes decide irse antes de fin de mes, no tendrá derecho a reembolso por el tiempo no utilizado.</li>
            <li>
              <span className="font-bold">Membresia con Descuento (2 o 3 meses):</span>Si el Residente que ha aceptado una tarifa con descuento por un término prolongado decide terminar su membresía de forma anticipada, se aplicarán las siguientes condiciones:
              <ul>
                <li>1.	El Residente está obligado al pago total del compromiso adquirido por el plazo completo.</li>
                <li>2.	No existirá derecho a reembolso alguno por el tiempo no utilizado del período contratado.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 6: Reglamento Interno y Normas de Convivencia</h2>
      <p className="mb-6">El Residente se obliga a cumplir y hacer cumplir a sus invitados las normas detalladas en el Manual de Convivencia, el cual se entrega al Residente y se entiende como parte integral de estos T&C. Su incumplimiento puede dar lugar a sanciones, incluyendo la terminación de la membresía. Las normas principales incluyen, pero no se limitan a:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Uso de espacios comunes:</span> Limpieza inmediata de la cocina tras su uso; uso rotativo y respetuoso del coworking.</li>
        <li><span className="font-bold">Política de invitados:</span> Los invitados diurnos requieren registro previo. Están estrictamente prohibidos los invitados que pernocten sin registro y pago de la tarifa adicional, lo cual se considera una falta grave.</li>
        <li><span className="font-bold">Ruido y Descanso:</span> Respetar las horas de silencio de 10:00 PM a 8:00 AM.</li>
        <li><span className="font-bold">Prohibiciones:</span> Prohibido fumar o vapear en áreas interiores. Prohibido el consumo, posesión o venta de sustancias ilegales.</li>
        <li><span className="font-bold">Uso aceptable de la red de internet (Wi-Fi):</span> El servicio de internet es proporcionado para uso personal, académico y profesional. Queda estrictamente prohibido el uso de la red de Bambu Coliving para actividades ilegales, incluyendo, pero no limitado a: descarga o distribución de material con derechos de autor, ciberataques, fraude, o acceso a contenido ilícito. Bambu Coliving se reserva el derecho de cooperar con las autoridades en caso de una investigación por actividades ilegales y monitorear el tráfico de red para garantizar la calidad del servicio para todos los residentes.</li>
        <li><span className="font-bold">Política de cero tolerancia:</span> Para garantizar un ambiente seguro y respetuoso, Bambu Coliving mantiene una política de cero tolerancias frente a:
          <ul className="list-circle pl-6">
            <li>Cualquier forma de violencia física o verbal, acoso, intimidación o discriminación</li>
            <li>Hurto o daño intencional a la propiedad de Bambu Coliving o de otros residentes.</li>
            <li>Posesión, consumo o distribución de sustancias ilegales dentro de la propiedad.</li>
            <li>Cualquiera de estas conductas resultará en la terminación inmediata del contrato de alojamiento, el desalojo de la propiedad sin derecho a reembolso y, si corresponde, la notificación a las autoridades policiales.</li>
          </ul>
        </li>
        <li>Cumplimiento del <a href="/manual-de-convivencia" className="font-bold">Manual de Convivencia</a>  de Bambu Coliving</li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 7: Seguridad, Mantenimiento y Responsabilidad</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Seguridad y Acceso:</span> El Residente es corresponsable de la seguridad. A cada residente se le entregará un juego de llaves, tarjeta o código de acceso personal e intransferible para ingresar a la propiedad y a su habitación privada. El residente se compromete a no duplicar, prestar o compartir bajo ninguna circunstancia sus medios de acceso. La pérdida de llaves o tarjetas de acceso deberá ser notificada a la administración de inmediato y tendrá un costo de reposición estipulado en el anexo de tarifas. Compartir los medios de acceso con personas no registradas será considerado una falta grave a los términos del presente contrato. El Operador no se hace responsable por la pérdida o hurto de objetos personales no atribuible a negligencia grave o dolo del Operador. Se recomienda al Residente contratar un seguro personal para sus pertenencias.</li>
        <li><span className="font-bold">Sistemas de Videovigilancia (CCTV): </span> El residente reconoce y acepta que Bambu Coliving utiliza un sistema de videovigilancia (CCTV) en áreas comunes designadas, tales como entradas, pasillos, cocina, y zonas de estar, con el único propósito de garantizar la seguridad de los residentes y proteger la propiedad. Las cámaras no están instaladas en áreas privadas como habitaciones o baños. La firma del presente contrato constituye el consentimiento explícito para ser grabado en dichas áreas comunes.</li>
        <li><span className="font-bold">Mantenimiento y Reparaciones:</span> El Operador es responsable del mantenimiento preventivo y correctivo. El Residente es responsable de las reparaciones menores en su Espacio Privado y de los daños causados por mal uso o negligencia.</li>
        <li><span className="font-bold">Limitación de Responsabilidad:</span> El Residente será responsable por todos los daños que él o sus invitados causen a los bienes del Operador, a otros Residentes o a terceros. El Residente se compromete a mantener indemne al Operador de cualquier reclamación derivada de sus actos.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 8: Protección de Datos, Ley Aplicable y Resolución de Conflictos</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Tratamiento de Datos Personales:</span> El Residente declara que acepta la Política de Tratamiento de Datos Personales de Bambu Coliving, la cual es parte integral de estos T&C. Autoriza expresamente al Operador para procesar sus datos personales para las finalidades descritas en dicha política.</li>
        <li><span className="font-bold">Ley aplicable y Jurisdicción:</span> Este contrato se regirá por las leyes de la República de Colombia, en particular por las normas del Código de Comercio y el Código Civil. Toda controversia será sometida a la jurisdicción de los jueces ordinarios de la República de Colombia, en la ciudad de Bogotá D.C.</li>
        <li><span className="font-bold">Prohibición de domiciliación comercial:</span>La dirección de Bambu Coliving es para uso residencial exclusivo. Queda estrictamente prohibido utilizar la dirección de la propiedad para registrar empresas, recibir correspondencia comercial masiva, o para cualquier otro fin de domiciliación fiscal o comercial. El incumplimiento de esta norma será causal de terminación del contrato.</li>
        <li><span className="font-bold">Mecanismos de Resolución de Conflictos:</span> 
          <ul className="list-circle pl-6">
            <li><span className="font-bold">Arreglo directo:</span> Se espera que los residentes resuelvan disputas menores de manera respetuosa y directa. Si un conflicto entre residentes escala o no puede ser resuelto, deberá ser notificado a la administración. La administración actuará como mediador inicial para facilitar una solución. Si la conducta de un residente perturba continuamente la paz y la sana convivencia de la comunidad, Bambu Coliving se reserva el derecho de tomar medidas, incluyendo la terminación del contrato.</li>
            <li><span className="font-bold">Conciliación:</span>De no lograrse un acuerdo, las partes se comprometen a acudir a un mecanismo de conciliación ante el Centro de Arbitraje y Conciliación de la Cámara de Comercio de Bogotá. Esta etapa es un requisito de procedibilidad para iniciar acciones legales</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 9: Salud y Emergencias</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Declaración de No Responsabilidad Médica:</span>"Bambu Coliving es un proveedor de servicios de alojamiento y no es, bajo ninguna circunstancia, un centro médico, una clínica o un proveedor de servicios de salud. Nuestro personal no está capacitado para ofrecer diagnóstico, tratamiento o asesoría médica."</li>
        <li><span className="font-bold">Obligación del residente de informar y Proporcionar contactos:</span>"Es obligación de cada residente proporcionar, al momento del check-in y mantener actualizada, la información de contacto de al menos una (1) persona de emergencia (familiar o amigo). Así mismo, se recomienda informar a la administración sobre condiciones médicas preexistentes relevantes (ej. alergias graves, epilepsia, diabetes) de forma voluntaria."</li>
        <li><span className="font-bold">Protocolo en caso de emergencia médica grave:</span>"En caso de una emergencia médica que ponga en riesgo la vida (pérdida de conciencia, dificultad respiratoria severa, herida grave, etc.), el personal de Bambu Coliving procederá de inmediato y en este orden a: 1) Contactar a los servicios de emergencia locales (ambulancia, policía). 2) Notificar al contacto de emergencia del residente."</li>
        <li><span className="font-bold">Autorización de ingreso y gastos médicos:</span>"El residente autoriza expresamente al personal de Bambu Coliving a ingresar a su habitación privada, utilizando una llave maestra si fuese necesario, si existen indicios razonables de una emergencia médica en su interior. Todos los costos derivados de la atención médica (transporte en ambulancia, hospitalización, consultas, etc.) serán responsabilidad exclusiva del residente."</li>
        <li><span className="font-bold">Manejo de Enfermedades contagiosas:</span>"El residente se compromete a notificar de inmediato a la administración si es diagnosticado con una enfermedad de fácil transmisión (ej. COVID-19, influenza, varicela). Bambu Coliving se reserva el derecho de implementar medidas para proteger a la comunidad, tales como solicitar al residente que se aísle en su habitación, que utilice mascarilla en áreas comunes o, en casos graves y según la normativa sanitaria local, solicitar la reubicación temporal del residente."</li>
        <li><span className="font-bold">Responsabilidad sobre medicamentos y seguros:</span>"Cada residente es el único responsable de la custodia, administración y refrigeración (si aplica) de sus propios medicamentos. Bambu Coliving no se hace responsable por la pérdida o mal manejo de los mismos. Se recomienda encarecidamente a todos los residentes, especialmente a los extranjeros, contar con un seguro de salud y de viaje con cobertura vigente en Colombia."</li>
        <li><span className="font-bold">Salud Mental:</span>"Reconocemos la importancia de la salud mental. Si un residente experimenta una crisis de salud mental que representa un peligro para sí mismo o para otros, Bambu Coliving tratará la situación como una emergencia médica. Aunque no ofrecemos servicios de apoyo psicológico, la administración puede, a solicitud del residente, facilitar información sobre recursos y profesionales locales de salud mental."</li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 10: Aceptación de Términos y Manual de Convivencia</h2>
      <p className="mb-6">La realización de la reserva, la ejecución del primer pago y/o el proceso de check-in en Bambu Coliving, constituye la aceptación expresa, voluntaria e incondicional por parte del residente de la totalidad de los Términos y Condiciones y del Manual de Convivencia aquí descritos.
        El residente manifiesta haber leído, comprendido y recibido una copia de este documento, comprometiéndose a cumplir con todas las políticas y normativas estipuladas durante el tiempo que dure su estancia. El cumplimiento de estas directrices es esencial para mantener una comunidad segura, respetuosa y enriquecedora para todos.
      </p>

      <p className="text-green-800 font-bold text-lg">¡Le damos una cordial bienvenida a Bambu Coliving! Estamos a su disposición para hacer de su estancia una experiencia excepcional.</p>
    </div>
  );
}

export default TermsAndConditions;
