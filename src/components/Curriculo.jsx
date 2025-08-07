import { useState } from 'react';
import { Linkedin, Download, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Award, Briefcase, Lightbulb, Wrench } from 'lucide-react'; // Añadido Wrench para habilidades técnicas

export default function Curriculo() {
  // URLs directas - REEMPLAZA con URLs reales si tienes
  const portadaImg = "/portada (3).jpg"; // Imagen de fondo de la cabecera
  // CORRECCIÓN: Las rutas de la carpeta public no necesitan "/public"
  const perfilImg = "/perfil.png"; // Asumiendo que perfil.png está directamente en la carpeta public
  
  // Datos para el carrusel de diplomas
  const diplomas = [
    // CORRECCIÓN: Las rutas de la carpeta public no necesitan "/public"
    "/diplomas/diploma (2).png", // Asumiendo que tus diplomas están en public/diplomas/
    "/diplomas/diploma (1).png",
    "/diplomas/diploma (3).png",
    "/diplomas/diploma (4).png",
    // Agrega más URLs de diplomas aquí
  ];

  // Datos para las habilidades
  const habilidadesTecnicas = [
    "Microsoft Office Suite",
    "Microsoft Excel Avanzado",
    "Sistemas GxP (GMP, GLP, GCP)",
    "Cromatografía HPLC",
    "Validación de Procesos",
    "Control de Calidad Farmacéutico",
  ];

  const habilidadesProfesionales = [
    "Pensamiento Analítico",
    "Resolución de Problemas Complejos",
    "Liderazgo de Equipos",
    "Comunicación Efectiva",
    "Innovación y Creatividad",
    "Adaptabilidad y Flexibilidad",
    "Gestión de Proyectos",
  ];

  const [currentDiplomaIndex, setCurrentDiplomaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  // NUEVO ESTADO: Para manejar el estado del formulario de contacto
  const [formStatus, setFormStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'
  const [formMessage, setFormMessage] = useState('');

  const nextDiploma = () => {
    setCurrentDiplomaIndex((prevIndex) =>
      prevIndex === diplomas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevDiploma = () => {
    setCurrentDiplomaIndex((prevIndex) =>
      prevIndex === 0 ? diplomas.length - 1 : prevIndex - 1
    );
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  // NUEVA FUNCIÓN: Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene la recarga de la página
    setFormStatus('submitting');
    setFormMessage('Enviando mensaje...');

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormMessage('¡Mensaje enviado con éxito! Te responderé pronto.');
        event.target.reset(); // Limpia el formulario
      } else {
        setFormStatus('error');
        setFormMessage(`Error al enviar el mensaje: ${result.message || 'Inténtalo de nuevo.'}`);
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Hubo un problema de conexión. Por favor, inténtalo de nuevo más tarde.');
      console.error('Error al enviar el formulario:', error);
    } finally {
      // Opcional: Ocultar el mensaje después de un tiempo
      setTimeout(() => {
        setFormStatus('');
        setFormMessage('');
      }, 5000); // El mensaje desaparece después de 5 segundos
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0E6FA] to-white flex flex-col font-['Montserrat',sans-serif] text-gray-800 w-screen overflow-x-hidden">
      {/* Google Font - Montserrat */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Sección de Cabecera (Portada y Perfil) */}
      <header className="w-full relative bg-[#2A2438] text-white min-h-[300px] md:min-h-[350px] pb-32 pt-16 md:pt-24 flex flex-col items-center justify-center overflow-hidden">
        {/* Imagen de portada como fondo */}
        <div className="absolute inset-0">
          <img
            src={portadaImg || "/placeholder.svg?height=300&width=1200&query=Abstract purple background"}
            alt="Portada CV"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A2438] to-transparent"></div>
        </div>

        {/* Contenido de la cabecera */}
        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          {/* Avatar */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 transform transition-transform duration-300 hover:scale-105 ring-4 ring-[#8B5CF6] ring-offset-4 ring-offset-[#2A2438]">
            <img
              src={perfilImg || "/placeholder.svg?height=160&width=160&query=Paola Valentina Morales Orozco profile"}
              alt="Paola Valentina Morales Orozco"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Datos personales */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">
            Paola Valentina Morales Orozco
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 mb-2">
            Ingeniera en Procesos Químicos
          </p>
          <p className="text-lg md:text-xl text-[#C084FC] font-medium flex items-center gap-2 mb-6">
            <Award size={20} /> Especialista en Control de Calidad & Validación
          </p>

          {/* Contacto básico */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-gray-300 text-base md:text-lg mb-8">
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-[#C084FC]" /> paolavmoraleso@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-[#C084FC]" /> +58 412-5194333
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-[#C084FC]" /> San Felipe, Yaracuy. Venezuela
            </p>
          </div>

          {/* Enlaces */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="/curriculo-paola.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#C084FC] text-[#C084FC] font-semibold hover:bg-[#C084FC] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              download
            >
              <Download size={20} /> Descargar PDF
            </a>
          </div>
        </div>
      </header>

      {/* Contenedor principal de secciones */}
      <main className="w-full max-w-4xl mt-16 px-2 md:px-8 space-y-8 md:space-y-10 z-20 mx-auto">
        {/* Formación Académica */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[#8B5CF6] mb-6 text-center">Formación Académica</h2>
          {/* Tarjeta 1: Ingeniería */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Ingeniería en Procesos Químicos</h3>
              <p className="text-[#8B5CF6] text-base mt-1">Universidad Politécnica Territorial de Yaracuy "Arístides Bastidas"</p>
              <p className="text-gray-600 text-sm mt-1">PNF en Procesos Químicos - Especialización en Control de Calidad y Validación</p>
            </div>
            <span className="mt-3 md:mt-0 px-4 py-1 bg-[#E9D5FF] text-[#8B5CF6] text-xs font-medium rounded-full">2022 - 2024</span>
          </div>

          {/* Tarjeta 2: TSU */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">TSU en Procesos Químicos</h3>
              <p className="text-[#8B5CF6] text-base mt-1">Universidad Politécnica Territorial de Yaracuy "Arístides Bastidas"</p>
              <p className="text-gray-600 text-sm mt-1">Técnico Superior Universitario con enfoque en análisis químico</p>
            </div>
            <span className="mt-3 md:mt-0 px-4 py-1 bg-[#E9D5FF] text-[#8B5CF6] text-xs font-medium rounded-full">2019 - 2022</span>
          </div>

          {/* Tarjeta 3: Bachiller */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Bachiller en Ciencias</h3>
              <p className="text-[#8B5CF6] text-base mt-1">U.E "Arístides Rojas"</p>
              <p className="text-gray-600 text-sm mt-1">Educación Media con mención en Ciencias</p>
            </div>
            <span className="mt-3 md:mt-0 px-4 py-1 bg-[#E9D5FF] text-[#8B5CF6] text-xs font-medium rounded-full">2014 - 2019</span>
          </div>
        </section>

        {/* Cursos Realizados */}
        <section className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <h2 className="text-3xl font-bold text-[#8B5CF6] mb-4">Cursos Realizados</h2>
          <ul className="text-gray-700 text-base list-disc list-inside space-y-2">
            <li>Formulación y evaluación de proyectos socio productivos (Fundacite Yaracuy, 2022)</li>
            <li>Buenas prácticas de manufactura (Laboratorio Pifano, C.A., 2023)</li>
            <li>Microsoft Excel (CUAM- Academia Valencia, 2024)</li>
            <li>Escuela Básica de Cromatografía Líquida de Alta Eficiencia HPLC (Grupo Intelcon P26, 2025)</li>
            <li>Escuela Intermedia de Cromatografía Líquida de Alta Eficiencia HPLC (Grupo Intelcon P26, 2025)</li>
          </ul>
        </section>

        {/* Carrusel de Diplomas */}
        <section className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <h2 className="text-3xl font-bold text-[#8B5CF6] mb-6 text-center">Mis Diplomas</h2>
          <div className="relative w-full max-w-xl mx-auto bg-gray-50 rounded-lg shadow-inner p-4">
            <img
              src={diplomas[currentDiplomaIndex] || "/placeholder.svg?height=400&width=600&query=Diploma certificate"}
              alt={`Diploma ${currentDiplomaIndex + 1}`}
              className="w-full h-auto object-contain rounded-md shadow-md cursor-pointer transition-opacity duration-300 ease-in-out"
              style={{ aspectRatio: '4/3' }}
              onClick={() => openModal(diplomas[currentDiplomaIndex])}
            />
            <button
              onClick={prevDiploma}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              aria-label="Diploma anterior"
            >
              <ChevronLeft size={24} className="text-[#8B5CF6]" />
            </button>
            <button
              onClick={nextDiploma}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              aria-label="Siguiente diploma"
            >
              <ChevronRight size={24} className="text-[#8B5CF6]" />
            </button>
            <div className="text-center text-sm text-gray-600 mt-3">
              {currentDiplomaIndex + 1} / {diplomas.length}
            </div>
          </div>
        </section>

        {/* Experiencia Laboral */}
        <section className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <h2 className="text-3xl font-bold text-[#8B5CF6] mb-4 flex items-center gap-2">
            <Briefcase size={28} /> Experiencia Laboral
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-2">
            <strong>Analista de Aseguramiento de la Calidad / Validación</strong> (Laboratorio Pifano, C.A., 2024)
          </p>
          <ul className="text-gray-700 text-base list-disc list-inside space-y-2">
            <li>Manejo de la documentación legal y regulatoria, POEs, registros de control de calidad.</li>
            <li>Detección de errores, fallas y desviaciones en estándares de calidad.</li>
            <li>Aseguramiento del cumplimiento de estándares de calidad.</li>
            <li>Calificación de equipos y validación de sistemas de apoyo crítico.</li>
          </ul>
        </section>

        {/* Habilidades Destacadas */}
        <section className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <h2 className="text-3xl font-bold text-[#8B5CF6] mb-6 flex items-center gap-2">
            <Lightbulb size={28} /> Habilidades Destacadas
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Wrench size={20} className="text-[#8B5CF6]" /> Habilidades Técnicas
              </h3>
              <div className="flex flex-wrap gap-3">
                {habilidadesTecnicas.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C084FC] to-[#8B5CF6] text-white text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Award size={20} className="text-[#8B5CF6]" /> Habilidades Profesionales
              </h3>
              <div className="flex flex-wrap gap-3">
                {habilidadesProfesionales.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C084FC] to-[#8B5CF6] text-white text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de contacto */}
        <section className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <h2 className="text-3xl font-bold text-[#8B5CF6] mb-4">Contacto</h2>
          <p className="text-gray-600 text-base mb-6">
            ¿Interesado en colaborar o conocer más sobre mi experiencia? ¡Escríbeme!
          </p>
          {/* CAMBIO: Eliminado 'action' y 'method', añadido 'onSubmit' */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value="87f0389d-cb3d-4c58-a53d-4151ae29bb44" />
            {/* ELIMINADO: <input type="hidden" name="redirect" value="https://www.paolamorales.online/gracias.html" /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] text-sm"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] text-sm"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                Asunto
              </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] text-sm"
              placeholder="Motivo del contacto"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] text-sm resize-vertical"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <button
              type="submit"
              // DESHABILITAR botón mientras se envía
              disabled={formStatus === 'submitting'}
              className="w-full sm:w-auto bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] hover:from-[#C084FC] hover:to-[#8B5CF6] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* CAMBIAR TEXTO del botón según el estado */}
              {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            <span className="text-gray-500 text-sm">
              o escríbeme directamente a{' '}
              <a
                href="mailto:paolavmoraleso@gmail.com"
                className="text-[#8B5CF6] hover:underline"
              >
                paolavmoraleso@gmail.com
              </a>
            </span>
          </div>
          {/* NUEVO: Mostrar mensaje de estado del formulario */}
          {formMessage && (
            <div
              className={`mt-4 p-3 rounded-md text-center ${
                formStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
              role="alert"
            >
              {formMessage}
            </div>
          )}
        </form>
      </section>

      <footer className="text-center pt-8 pb-12">
        <p className="text-sm font-medium text-gray-600">
          Hecho con <span className="text-[#8B5CF6]">❤</span> por Maurizio Caballero
        </p>
      </footer>
    </main>

    {/* Modal para ver diplomas en grande */}
    {isModalOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={closeModal}
      >
        {/* CORRECCIÓN: Modal transparente y la imagen se ajusta directamente al viewport */}
        <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 text-gray-600 z-10"
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          {/* La imagen ocupa el máximo espacio posible sin desbordarse */}
          <img src={modalImage || "/placeholder.svg"} alt="Diploma en grande" className="max-w-[95vw] max-h-[95vh] object-contain rounded-md shadow-xl" />
        </div>
      </div>
    )}
  </div>
);
}
