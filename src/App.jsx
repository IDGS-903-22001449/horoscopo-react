import { useState } from 'react';
import { Formulario } from './components/formulario';
import { Resultado } from './components/Resultado';
import './App.css';

function getSigno(fecha) {
  const d = new Date(fecha);
  const dia = d.getUTCDate();
  const mes = d.getUTCMonth() + 1;

  const signos = [
    { signo: "Capricornio", inicio: [12, 22], fin: [1, 19], img: "/zodiaco/capricornio.png" },
    { signo: "Acuario", inicio: [1, 20], fin: [2, 18], img: "/zodiaco/acuario.png" },
    { signo: "Piscis", inicio: [2, 19], fin: [3, 20], img: "/zodiaco/piscis.png" },
    { signo: "Aries", inicio: [3, 21], fin: [4, 19], img: "/zodiaco/aries.png" },
    { signo: "Tauro", inicio: [4, 20], fin: [5, 20], img: "/zodiaco/taurus.png" },
    { signo: "Géminis", inicio: [5, 21], fin: [6, 20], img: "/zodiaco/gemini.png" },
    { signo: "Cáncer", inicio: [6, 21], fin: [7, 22], img: "/zodiaco/cancer.png" },
    { signo: "Leo", inicio: [7, 23], fin: [8, 22], img: "/zodiaco/leo.png" },
    { signo: "Virgo", inicio: [8, 23], fin: [9, 22], img: "/zodiaco/virgo.png" },
    { signo: "Libra", inicio: [9, 23], fin: [10, 22], img: "/zodiaco/libra.png" },
    { signo: "Escorpio", inicio: [10, 23], fin: [11, 21], img: "/zodiaco/scorpio.png" },
    { signo: "Sagitario", inicio: [11, 22], fin: [12, 21], img: "/zodiaco/sagitario.png" },
  ];

  return signos.find(s => {
    const [mesInicio, diaInicio] = s.inicio;
    const [mesFin, diaFin] = s.fin;

    return (mes === mesInicio && dia >= diaInicio) ||
           (mes === mesFin && dia <= diaFin);
  });
}

const horoscopos = {
  "Aries": "Hoy Aries, tu energía y determinación te llevarán a cumplir metas importantes. ",
  "Tauro": "Tauro, la paciencia será tu mejor aliada hoy; evita decisiones impulsivas.",
  "Géminis": "Géminis, la comunicación será clave. Comparte tus ideas y escucha atentamente.",
  "Cáncer": "Cáncer, dedica tiempo a tu hogar y a las personas que amas.",
  "Leo": "Leo, hoy brillarás con tu creatividad y tu carisma. No tengas miedo de destacar.",
  "Virgo": "Virgo, presta atención a los detalles; la organización traerá buenos resultados.",
  "Libra": "Libra, busca equilibrio en tus relaciones y toma decisiones justas.",
  "Escorpio": "Escorpio, tu intuición estará muy aguda. Confía en tu instinto.",
  "Sagitario": "Sagitario, nuevas aventuras te esperan; mantén tu mente abierta.",
  "Capricornio": "Capricornio, tu esfuerzo y disciplina te acercan a tus metas.",
  "Acuario": "Acuario, ideas innovadoras surgirán hoy; comparte tu visión.",
  "Piscis": "Piscis, conecta con tus emociones y deja fluir tu creatividad."
};

function App() {
  const [resultado, setResultado] = useState(null);

  const handleFormSubmit = ({ nombre, fNacimiento }) => {
    const signoData = getSigno(fNacimiento);
    if (!signoData) return;

    const horoscopo = horoscopos[signoData.signo];

    setResultado({
      nombre,
      signo: signoData.signo,
      imagen: signoData.img,
      horoscopo,
    });
  };

  return (
    <div className="app">
      <div className="columna">
        <Formulario onSubmit={handleFormSubmit} />
      </div>
      <div className="columna">
        {resultado && <Resultado {...resultado} />}
      </div>
    </div>
  );
}

export default App;
