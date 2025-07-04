import { Linkedin } from "lucide-react"

// Importar todas las imágenes
import portadaImg from "https://i.imgur.com/WIFfJyW.jpeg"
import logoImg from "../assets/images/logo-st.png"
import perfilImg from "../assets/images/perfil3.jpg"
import antuco5Img from "../assets/images/antuco5.jpg"
import terrenoAntucoImg from "../assets/images/terreno-antuco.jpg"
import antuco3Img from "../assets/images/antuco3.jpg"
import antuco2Img from "../assets/images/antuco2.jpg"

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex flex-col items-center font-['Poppins',sans-serif]">
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

      {/* Portada con logo y perfil */}
      <div className="w-full h-60 relative">
        <img src={portadaImg || "/placeholder.svg"} alt="Portada geológica" className="w-full h-full object-cover" />
        <img
          src={logoImg || "/placeholder.svg"}
          alt="Logo Universidad"
          className="absolute top-4 left-4 w-24 h-24 object-contain z-10"
        />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={perfilImg || "/placeholder.svg"}
              alt="Gladys Daniela Pabón Cortés"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Datos personales */}
      <div className="mt-20 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-rose-700 tracking-wide">Gladys Daniela Pabón Cortés</h1>
        <p className="text-gray-700 text-sm md:text-base mt-1">Estudiante de Geología - 5to año</p>
        <p className="text-gray-600 text-sm md:text-base">Universidad Santo Tomás | Santiago, Chile</p>
      </div>

      {/* Contacto básico */}
      <div className="mt-4 text-center text-gray-500 text-sm md:text-base space-y-1">
        <p>Rut: 25.957.134-0</p>
        <p>Fecha de nacimiento: 4/6/1998</p>
        <p>Correo: g.pabon@alumnos.santotomas.cl</p>
        <p>Teléfono: +56 956864256</p>
      </div>

      {/* Enlaces */}
      <div className="mt-4 flex flex-wrap justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/gladys-pab%C3%B3n-cortes-95031a174/"
          className="flex items-center gap-1 text-rose-600 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
        <a href="/curriculo-gladys.pdf" className="text-rose-600 hover:underline" download>
          Descargar PDF
        </a>
      </div>

      {/* Contenedor principal */}
      <div className="mt-8 w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 space-y-8">
        {/* Perfil profesional */}
        <section>
          <h2 className="text-xl font-medium text-rose-700 mb-2">Perfil profesional</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Estudiante de quinto año de Geología en la Universidad Santo Tomás, con experiencia en la elaboración de
            mapas geológicos y estudios medioambientales. Competente en QGIS y ENVI para procesar imágenes satelitales,
            análisis hidrogeológico y un enfoque técnico-analítico.
          </p>
        </section>

        {/* Educación */}
        <section>
          <h2 className="text-xl font-medium text-rose-700 mb-2">Educación</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Universidad Santo Tomás (Mar 2020 – Dic 2025)
            <br />
            Carrera de Geología
          </p>
        </section>

        {/* Materias destacadas */}
        <section>
          <h2 className="text-xl font-medium text-rose-700 mb-2">Materias destacadas</h2>
          <ul className="text-gray-700 text-sm md:text-base list-disc list-inside space-y-1">
            <li>Geología Estructural</li>
            <li>Sedimentología</li>
            <li>Geomorfología</li>
          </ul>
        </section>

        {/* Experiencia relevante */}
        <section>
          <h2 className="text-xl font-medium text-rose-700 mb-2">Experiencia relevante</h2>
          <ul className="text-gray-700 text-sm md:text-base list-disc list-inside space-y-2">
            <li>
              <strong>Impacto de la minería en el río Loa (2024):</strong> Análisis hidrogeológico y estudio
              ecosistémico.
            </li>
            <li>
              <strong>Manejo de QGIS y ENVI:</strong> Creación de mapas geológicos, procesamiento de ASTER, Landsat y
              Sentinel.
            </li>
          </ul>
        </section>

        {/* Experiencia de campo */}
        <section className="bg-rose-50 border border-rose-200 rounded-lg p-4">
          <h2 className="text-xl font-medium text-rose-700 mb-4">
            Experiencia de campo destacada: <span className="font-semibold">Volcán Antuco</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={antuco5Img || "/placeholder.svg"}
              alt="Terreno en Volcán Antuco"
              className="col-span-1 md:col-span-3 w-full h-64 object-cover rounded-xl shadow-md"
            />
            <img src={terrenoAntucoImg || "/placeholder.svg"} alt="Antuco 2" className="h-64 object-cover rounded-lg" />
            <img src={antuco3Img || "/placeholder.svg"} alt="Antuco 3" className="h-64 object-cover rounded-lg" />
            <img src={antuco2Img || "/placeholder.svg"} alt="Antuco 4" className="h-64 object-cover rounded-lg" />
          </div>
          <p className="mt-3 italic text-gray-600 text-sm md:text-base">
            "Muestreo de depósitos, granulometría y conteo litológico en terreno volcánico, aplicando teoría y
            fortaleciendo mi vocación geológica."
          </p>
        </section>

        {/* Habilidades técnicas */}
        <section>
          <h2 className="text-xl font-medium text-rose-700 mb-2">Habilidades técnicas</h2>
          <ul className="text-gray-700 text-sm md:text-base list-disc list-inside space-y-1">
            <li>Mapas geológicos en QGIS</li>
            <li>Análisis multiespectral en ENVI</li>
            <li>Modelado DEM y análisis de cuencas</li>
            <li>NDVI para monitoreo ambiental</li>
          </ul>
        </section>

        {/* Idiomas */}
        <section>
          <h2 className="text-xl font-medium text-rose-700 mb-2">Idiomas</h2>
          <p className="text-gray-700 text-sm md:text-base">Inglés: Nivel intermedio</p>
        </section>
      </div>
    </div>
  )
}
