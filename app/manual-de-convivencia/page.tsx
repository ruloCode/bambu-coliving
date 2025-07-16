import React from "react";
import Footer from "@/components/footer";

export default function ManualConvivencia() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-700">
      <h1 className="text-4xl font-bold text-green-800 mb-6 border-b-2 border-green-300 pb-2">Manual de Convivencia y Reglamento Interno de Bambu Coliving</h1>
      <p><em>(Un Enfoque Legal, Cultural y Comunitario)</em></p>

      <h2 className="text-2xl font-semibold mt-6">Preámbulo: Nuestro Compromiso con una Comunidad Excepcional</h2>
      <p>Bienvenido(a) a Bambu Coliving. Este documento constituye el acuerdo de convivencia que rige nuestra comunidad. Su propósito es establecer un marco de referencia que, fundamentado en la legislación colombiana y en una filosofía de respeto mutuo, garantice una experiencia residencial segura, enriquecedora y armónica para todos sus miembros.
        Creemos que la libertad individual y una comunidad vibrante coexisten perfectamente cuando se basan en reglas claras y en el respeto por los demás. El cumplimiento de este reglamento no es una opción, sino una parte integral de tu contrato con nosotros y tu compromiso con tus vecinos
      </p>

      <h2 className="text-3xl font-semibold text-green-700 mb-4">Sección 1: Fundamentos de Nuestra Comunidad</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-bold">Nuestra Filosofía: Respeto, Comunidad y Cuidado. </span>Buscamos cultivar una comunidad conectada, equilibrando el espacio personal con un entorno colaborativo. Este manual se basa en una "cultura ciudadana" de respeto por el otro, sentido de pertenencia y cuidado de nuestro hogar compartido.</li>
      </ul>
      <h3 className="font-bold">1.1. Nuestra Filosofía: Respeto, Comunidad y Cuidado</h3>
      <p>Buscamos cultivar una comunidad conectada...</p>

      <h3 className="text-xl font-medium">1.2. Marco Legal Vinculante</h3>
      <ul className="list-disc list-inside">
        <li>Ley 675 de 2001 (Régimen de Propiedad Horizontal)</li>
        <li>Ley 820 de 2003 (Régimen de Arrendamiento)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Sección 2: Normas de Uso de Espacios Comunes</h2>
      {/* Continúa con la misma estructura por cada sección */}
      <h3 className="text-xl font-medium">2.1. Regla de Oro para Todas las Áreas Comunes</h3>
      <p>La norma fundamental es simple: deja cada espacio común igual o mejor de como lo encontraste...</p>

      <h3 className="text-xl font-medium">2.2. Cocina y Comedor</h3>
      <ul className="list-disc list-inside">
        <li><strong>Limpieza Inmediata:</strong> Lavar y guardar los utensilios después de usarlos.</li>
        <li><strong>Almacenamiento Personal:</strong> Uso de locker privado y mininevera personal.</li>
      </ul>

      <h3 className="text-xl font-medium">2.3. Zonas de Estar, Patios y Áreas Sociales</h3>
      <p>Estos espacios son para el disfrute de todos...</p>

      {/* Continua así por cada sección, por ejemplo: */}
      <h2 className="text-2xl font-semibold mt-6">Sección 3: Normas sobre Unidades Privadas</h2>
      <h2 className="text-2xl font-semibold mt-6">Sección 4: Pautas de Convivencia y Respeto Mutuo</h2>
      <h2 className="text-2xl font-semibold mt-6">Sección 5: Seguridad y Operaciones</h2>
      <h2 className="text-2xl font-semibold mt-6">Sección 6: Gestión de Conflictos y Proceso Disciplinario</h2>

      <h3 className="text-xl font-medium">6.2. Tabla de Infracciones y Medidas Correctivas</h3>
      <table className="table-auto w-full border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nivel de Infracción</th>
            <th className="border px-4 py-2">Ejemplos de Comportamiento</th>
            <th className="border px-4 py-2">Medida Correctiva</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Leve</td>
            <td className="border px-4 py-2">Dejar áreas comunes sucias, ruido moderado fuera de horario...</td>
            <td className="border px-4 py-2">Recordatorio verbal o escrito, advertencia formal en reincidencia.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Grave</td>
            <td className="border px-4 py-2">Reunión ruidosa en horario de silencio, fumar en áreas no permitidas...</td>
            <td className="border px-4 py-2">Advertencia formal, posible llamada de atención del Community Manager.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Muy Grave</td>
            <td className="border px-4 py-2">Acoso, discriminación, tráfico de sustancias ilegales, daño intencional a la propiedad...</td>
            <td className="border px-4 py-2">Terminación inmediata de la membresía, notificación a la policía.</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6">Cláusula Final de Aceptación</h2>
      <p>La realización de la reserva, el primer pago y/o el check-in constituyen la aceptación de este Manual de Convivencia...</p>

      <p>¡Te damos una cordial bienvenida a Bambu Coliving! Estamos a tu disposición para hacer de tu estancia una experiencia excepcional.</p>
    </div>
  );
}
