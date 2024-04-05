const persona = {
  nombre: "Miguel Angel",
  edad: 23,
  profesion: "Estudiante",
  pasatiempos: ["Dormir", "Video juegos", "Estudiar"],
  fecha_nacimiento: "01/11/2000",
  signo_zodiacal: "Escorpión",
  hobbies: ["Jugar futbol", "Leer","Dibujar"]
};

function App() {
  return (
    <div>
      <h1>Información personal</h1>
      <hr />

      <ul>
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Profesión: {persona.profesion}</li>
        <li>Fecha de Nacimiento: {persona.fecha_nacimiento}</li>
        <li>Signo Zodiacal: {persona.signo_zodiacal}</li>

        <li>Pasatiempos:
          <ul>
            <li>{persona.pasatiempos[0]}</li>
            <li>{persona.pasatiempos[1]}</li>
            <li>{persona.pasatiempos[2]}</li>
          </ul>
        </li>

        <li>Hobbies:
          <ul>
            <li>{persona.hobbies[0]}</li>
            <li>{persona.hobbies[1]}</li>
            <li>{persona.hobbies[2]}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default App;
