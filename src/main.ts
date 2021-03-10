import App from './App.svelte';

type questionsData = {
  question: string;
  answer: string | string[];
  response: string;
  type: 'choice' | 'text' | 'egList' | 'boolean';
  choice?: string[];
};

const app = new App({
  target: document.body,
  props: {
    questions: <questionsData[]>[
      {
        question: 'Describe the lithosphere',
        answer: '{any} "The rigid outer part of the earth"',
        response: '',
        type: 'text',
      },
      {
        question: 'Describe the asthenosphere',
        answer: '{any} "the upper layer of the earth\'s mantle"',
        response: '',
        type: 'text',
      },
      {
        question: 'What is a tectonic plate?',
        answer: '{any} "large piece of land making up the earth"',
        response: '',
        type: 'text',
      },
      {
        question: 'What is one thing tectonic activity may causes?',
        answer: ['mountains', 'volcanoes', 'earthquakes', 'tsunamis'],
        response: '',
        choice: ['mountains', 'tsunamis', 'destroy', 'things', 'volcanoes', 'hurricanes', 'earthquakes', 'tropical cyclone', 'limnic eruptions'],
        type: 'choice',
      },
      {
        question: 'Why do tectonic plats move?',
        answer: '{any} "The main cause is the convection currents in the asthenosphere."',
        response: '',
        type: 'text',
      },
      {
        question: 'How do you know plate move?',
        answer: '{any} "Evidence shows continents weree conce one large supercontinent."',
        response: '',
        type: 'text',
      },
      {
        question: 'What are 4 pieces of evidence that Alfred Wegener used to help support his theory?',
        answer: ['fossils', 'continental fit', 'georagic similarities', 'glaciers'],
        response: '',
        type: 'egList',
      },
      {
        question: 'What are supercontinents?',
        answer: '{any} "A landform consisting of mostly all continents"',
        response: '',
        type: 'text',
      },
      {
        question: 'The asthenosphere is where the tectonic plates are located.',
        answer: 'true',
        response: '',
        type: 'boolean',
      },
      {
        question: 'Alfred Wegener is credited with devepoping the theory of plate tectonics.',
        answer: 'true',
        response: '',
        type: 'boolean',
      },
      {
        question: 'The volcanoes on the west coast of the US are the result of the subduction of the nazca plate.',
        answer: 'true',
        response: '',
        type: 'boolean',
      },
      {
        question: 'Tranform boundaries occur where two plates are moving towards each other.',
        answer: 'false',
        response: '',
        type: 'boolean',
      },
      {
        question: 'Oceans currents are the driving force behind the movement of the tectonic plates',
        answer: 'true',
        response: '',
        type: 'boolean',
      },
    ],
  },
});

export default app;
