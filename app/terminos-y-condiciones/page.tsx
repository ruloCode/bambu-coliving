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
        <li><span className="font-bold">Naturaleza Jurídica:</span> Este contrato es de naturaleza atípica y comercial. No constituye un contrato de arrendamiento de vivienda urbana bajo los términos de la Ley 820 de 2003.</li>
        <li><span className="font-bold">Definiciones:</span>
          <ul className="list-circle pl-6">
            <li>Operador: Bambu Coliving</li>
            <li>Residente/Miembro: Persona natural que adquiere la membresía</li>
            <li>Espacio Privado: La habitación individual y su baño privado</li>
            <li>Espacios Comunes: Cocina, sala de estar, coworking, patio, etc.</li>
            <li>Tarifa de Membresía: El pago periódico que realiza el Residente</li>
            <li>Reglamento Interno: Las normas de convivencia y uso de espacios</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 2: Proceso de Admisión y Requisitos del Residente</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Proceso de Admisión: Completar el formulario en línea. El Operador se reserva el derecho de admisión.</li>
        <li>Requisitos de Elegibilidad:
          <ul className="list-circle pl-6">
            <li>Mayor de edad (18 años en Colombia)</li>
            <li>Documento de identidad válido</li>
            <li>Aceptar T&C, Manual de Convivencia, Política de Datos</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 3: Condiciones Económicas</h2>
      <p className="mb-4">Incluye tarifa de membresía, pagos, descuentos por estancia prolongada, modalidad de pago, soporte de seguridad, reembolso del soporte, inspecciones y liquidaciones detalladas.</p>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 4: Vigencia, Renovación y Terminación</h2>
      <p className="mb-4">Regula la duración de la membresía, causas de terminación anticipada, y faltas graves como actividades ilegales, violencia, daños maliciosos, violación reiterada del Reglamento Interno.</p>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 5: Política de Cancelación y Terminación Anticipada</h2>
      <p className="mb-4">Define condiciones de cancelación antes del check-in y terminación anticipada después del check-in, aplicable a membresías mensuales y con descuento.</p>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 6: Reglamento Interno y Normas de Convivencia</h2>
      <p className="mb-4">Compromiso del residente con el Manual de Convivencia: uso de espacios comunes, política de invitados, ruido, prohibiciones como fumar, consumo de sustancias ilegales, uso de internet, y política de cero tolerancia.</p>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 7: Seguridad, Mantenimiento y Responsabilidad</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Seguridad y Acceso: Llaves personales, no compartir accesos.</li>
        <li>Sistemas de Videovigilancia: CCTV en áreas comunes.</li>
        <li>Mantenimiento y Reparaciones: Responsabilidad del Operador y del Residente.</li>
        <li>Limitación de Responsabilidad: Daños a la propiedad, a otros residentes o terceros.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 8: Protección de Datos, Ley Aplicable y Resolución de Conflictos</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Tratamiento de Datos Personales</li>
        <li>Ley Aplicable: Legislación colombiana</li>
        <li>Prohibición de Domiciliación Comercial</li>
        <li>Mecanismos de Resolución: Arreglo directo, conciliación</li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 9: Salud y Emergencias</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Declaración de No Responsabilidad Médica</li>
        <li>Información de contacto de emergencia</li>
        <li>Protocolo de emergencia médica</li>
        <li>Autorización de ingreso en caso de emergencia</li>
        <li>Enfermedades contagiosas</li>
        <li>Responsabilidad sobre medicamentos y seguros</li>
        <li>Salud Mental</li>
      </ul>

      <h2 className="text-3xl font-semibold text-green-700 mt-8 mb-4">Sección 10: Aceptación de Términos y Manual de Convivencia</h2>
      <p className="mb-6">La reserva, el primer pago y/o el check-in constituyen aceptación expresa de estos T&C y el Manual de Convivencia. El residente se compromete a cumplirlos para garantizar un ambiente seguro y respetuoso.</p>

      <p className="text-green-800 font-bold text-lg">¡Le damos una cordial bienvenida a Bambu Coliving!</p>
    </div>
  );
}

export default TermsAndConditions;
