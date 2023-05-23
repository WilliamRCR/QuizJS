const botonInicio = document.getElementById('start-btn')
const botonSiguiente = document.getElementById('next-btn')
const contenedorPregunta = document.getElementById('question-container')
const elementoPregunta = document.getElementById('question')
const botonRespuesta = document.getElementById('answer-buttons')

let mezclaPreguntas, preguntas

botonInicio.addEventListener('click', juegoQuiz)
botonSiguiente.addEventListener('click', () => {
  preguntas++
  siguiente()
})

function juegoQuiz() {
  botonInicio.classList.add('hide')
  mezclaPreguntas = questions.sort(() => Math.random() - .5)
  preguntas = 15
  contenedorPregunta.classList.remove('hide')
  siguiente()
}

function siguiente() {
  reiniciar()
  mostrarPregunta(mezclaPreguntas[preguntas])
}

function mostrarPregunta(preguntas) {
  elementoPregunta.innerText = preguntas.question
  preguntas.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', seleccionarRespuesta)
    botonRespuesta.appendChild(button)
  })
}

function reiniciar() {
  limpiarRespuestas(document.body)
  botonSiguiente.classList.add('hide')
  while (botonRespuesta.firstChild) {
    botonRespuesta.removeChild(botonRespuesta.firstChild)
  }
}

function seleccionarRespuesta(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(botonRespuesta.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (mezclaPreguntas.length > preguntas + 1) {
    botonSiguiente.classList.remove('hide')
  } else {
    botonInicio.innerText = 'Restart'
    botonInicio.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  limpiarRespuestas(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function limpiarRespuestas(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


function media(){
  if(index == preguntas.length){
     //calculo de media
     let sumam = 0;
     
     for(i=0; i<preguntas.length; i++){
         sumam += Integer.parseInt( preguntas[i]);
     }
     media = sumam / preguntas.length;
  }

  function varianza(){
     //calculo de varianza
     let sumav=0;
     for(i=0; i<preguntas.length; i++){
         sumav+=Math.pow(Double.parseDouble(preguntas[i]), 2);
     }
     varianza = (float) (sumav / preguntas.length - Math.pow(media, 2));
  }

}


const questions = [
  {
    question: '¿Quién es el máximo goleador del FC Barcelona hasta el 2013?',
    answers: [
      { text: 'Lionel Messi', correct: true },
      { text: 'Samuel Etoo', correct: false },
      { text: 'Gerard Piqué', correct: false },
      { text: 'Andrés Iniesta', correct: false },
    ]
  },
  {
    question: '¿Quién pintó la Mona Lisa?',
    answers: [
      { text: 'Leonardo Da Vinci', correct: true },
      { text: 'Picasso', correct: false },
      { text: 'Miguel Ángel', correct: false },
      { text: 'Monet', correct: false }
    ]
  },
  {
    question: '¿Significado de "El jardín de las delicias"?',
    answers: [
      { text: 'Mejor morir', correct: false },
      { text: 'Mundo terrenal', correct: true },
      { text: 'Dioses del camino', correct: false },
      { text: 'Adán y Eva', correct: false }
    ]
  },
  {
    question: '¿Género al que pertenece la novela "La historia del ojo" de George Bataille?',
    answers: [
      { text: 'Drama', correct: false },
      { text: 'Erótico', correct: true },
      { text: 'Terror', correct: false },
      { text: 'Suspenso', correct: false }
    ]
  },
  {
    question: '¿Cómo despertó el príncipe a la Bella Durmiente?',
    answers: [
      { text: 'Mojándola', correct: false },
      { text: 'Acariciándola', correct: false },
      { text: 'Golpeándola', correct: false },
      { text: 'Besándola', correct: true }
    ]
  },
  {
    question: 'Animal que quería ser domesticado por El Principito',
    answers: [
      { text: 'Perro', correct: false },
      { text: 'Paloma', correct: false },
      { text: 'Zorro', correct: true },
      { text: 'Sapo', correct: false }
    ]
  },
  {
    question: 'Una fábula es un cuento que finaliza con una enseñanza que se llama…',
    answers: [
      { text: 'Moraleja', correct: true },
      { text: 'Conclusión', correct: false },
      { text: 'Desenlace', correct: false },
      { text: 'Nudo', correct: false }
    ]
  },
  {
    question: 'Enfermedad que ataca al hígado.',
    answers: [
      { text: 'Renitis', correct: false },
      { text: 'Onicomicosis', correct: false },
      { text: 'Bulimia', correct: false },
      { text: 'Hepatitis', correct: true }
    ]
  },
  {
    question: '¿Cómo se llama a los electrones que se encuentran en la última capa del átomo?',
    answers: [
      { text: 'Electrones De Valencia', correct: true },
      { text: 'Electrones', correct: false },
      { text: 'Iones', correct: false },
      { text: 'Isótopos', correct: false }
    ]
  },
  {
    question: '¿Cómo debería estar una persona para que le fuera practicada una autopsia?',
    answers: [
      { text: 'Muerta', correct: true },
      { text: 'En coma', correct: false },
      { text: 'Sedada', correct: false },
      { text: 'Dormida', correct: false }
    ]
  },
  {
    question: '¿Qué estudia la ictiología?',
    answers: [
      { text: 'Las rocas', correct: false },
      { text: 'Los Peces', correct: true },
      { text: 'Los insectos', correct: false },
      { text: 'Las erupciones cutáneas', correct: false }
    ]
  },
  {
    question: '¿Cuál de estas redes sociales es de ámbito laboral?',
    answers: [
      { text: 'Tuenti', correct: false },
      { text: 'Jobfire', correct: false },
      { text: 'LinkedIn', correct: true },
      { text: 'Facebook', correct: false }
    ]
  },
  {
    question: '¿Con que parte del cuerpo hacen el zumbido las abejas?',
    answers: [
      { text: 'Boca', correct: false },
      { text: 'Patas', correct: false },
      { text: 'Alas', correct: true },
      { text: 'Antenas', correct: false }
    ]
  },
  {
    question: '¿Cuál es la raíz cuadrada del 169?',
    answers: [
      { text: '13', correct: true },
      { text: '15', correct: false },
      { text: '14', correct: false },
      { text: '17', correct: false }
    ]
  },
  {
    question: '¿Cuántos son los dientes de leche?',
    answers: [
      { text: '15', correct: false },
      { text: '32', correct: false },
      { text: '20', correct: true },
      { text: '10', correct: false }
    ]
  },
  {
    question: '¿Qué animal representa al Sistema Operativo Linux?',
    answers: [
      { text: 'Leopardo', correct: false },
      { text: 'Panda', correct: false },
      { text: 'León', correct: false },
      { text: 'Pingüino', correct: true }
    ]
  },
  {
    question: '¿Cómo se llama la rama de las matemáticas en que los números son representados por letras y símbolos?',
    answers: [
      { text: 'Adición', correct: false },
      { text: 'Álgebra', correct: true },
      { text: 'Geometría', correct: false },
      { text: 'Topología', correct: false }
    ]
  },
  {
    question: '¿Dónde llevan los cocodrilos a sus crías?',
    answers: [
      { text: 'En la boca', correct: true },
      { text: 'En La barriga', correct: false },
      { text: 'En La cabeza', correct: false },
      { text: 'En La espalda', correct: false }
    ]
  },
  {
    question: '¿Quién postuló la ley del principio de inercia?',
    answers: [
      { text: 'Isaac Newton', correct: true },
      { text: 'Albert Einstein', correct: false },
      { text: 'Victor Alvarado', correct: false },
      { text: 'John Kennedy', correct: false }
    ]
  },
  {
    question: '¿En qué año falleció Steve Jobs?',
    answers: [
      { text: '2007', correct: false },
      { text: '2010', correct: false },
      { text: '2009', correct: false },
      { text: '2011', correct: true }
    ]
  }
  
]