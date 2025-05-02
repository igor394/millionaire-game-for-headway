export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
  prize?: number;
}

export const gameConfig: Question[] = [
  {
    id: '1',
    text: 'What is the capital of France?',
    answers: [
      { id: 'A', text: 'London', isCorrect: false },
      { id: 'B', text: 'Berlin', isCorrect: false },
      { id: 'C', text: 'Paris', isCorrect: true },
      { id: 'D', text: 'Madrid', isCorrect: false },
    ],
  },
  {
    id: '2',
    text: 'Which planet is known as the Red Planet?',
    answers: [
      { id: 'A', text: 'Venus', isCorrect: false },
      { id: 'B', text: 'Mars', isCorrect: true },
      { id: 'C', text: 'Jupiter', isCorrect: false },
      { id: 'D', text: 'Saturn', isCorrect: false },
    ],
  },
  {
    id: '3',
    text: 'What is the largest mammal in the world?',
    answers: [
      { id: 'A', text: 'African Elephant', isCorrect: false },
      { id: 'B', text: 'Blue Whale', isCorrect: true },
      { id: 'C', text: 'Giraffe', isCorrect: false },
      { id: 'D', text: 'Polar Bear', isCorrect: false },
    ],
  },
  {
    id: '4',
    text: 'Who painted the Mona Lisa?',
    answers: [
      { id: 'A', text: 'Vincent van Gogh', isCorrect: false },
      { id: 'B', text: 'Pablo Picasso', isCorrect: false },
      { id: 'C', text: 'Leonardo da Vinci', isCorrect: true },
      { id: 'D', text: 'Michelangelo', isCorrect: false },
    ],
  },
  {
    id: '5',
    text: 'What is the chemical symbol for gold?',
    answers: [
      { id: 'A', text: 'Ag', isCorrect: false },
      { id: 'B', text: 'Fe', isCorrect: false },
      { id: 'C', text: 'Au', isCorrect: true },
      { id: 'D', text: 'Cu', isCorrect: false },
    ],
  },
  {
    id: '6',
    text: 'Which country is home to the kangaroo?',
    answers: [
      { id: 'A', text: 'New Zealand', isCorrect: false },
      { id: 'B', text: 'Australia', isCorrect: true },
      { id: 'C', text: 'South Africa', isCorrect: false },
      { id: 'D', text: 'Brazil', isCorrect: false },
    ],
  },
  {
    id: '7',
    text: 'What is the largest ocean on Earth?',
    answers: [
      { id: 'A', text: 'Atlantic Ocean', isCorrect: false },
      { id: 'B', text: 'Indian Ocean', isCorrect: false },
      { id: 'C', text: 'Arctic Ocean', isCorrect: false },
      { id: 'D', text: 'Pacific Ocean', isCorrect: true },
    ],
  },
  {
    id: '8',
    text: 'Who wrote "Romeo and Juliet"?',
    answers: [
      { id: 'A', text: 'Charles Dickens', isCorrect: false },
      { id: 'B', text: 'William Shakespeare', isCorrect: true },
      { id: 'C', text: 'Jane Austen', isCorrect: false },
      { id: 'D', text: 'Mark Twain', isCorrect: false },
    ],
  },
  {
    id: '9',
    text: 'What is the tallest mountain in the world?',
    answers: [
      { id: 'A', text: 'K2', isCorrect: false },
      { id: 'B', text: 'Mount Everest', isCorrect: true },
      { id: 'C', text: 'Kangchenjunga', isCorrect: false },
      { id: 'D', text: 'Lhotse', isCorrect: false },
    ],
  },
  {
    id: '10',
    text: 'Which element has the atomic number 1?',
    answers: [
      { id: 'A', text: 'Helium', isCorrect: false },
      { id: 'B', text: 'Oxygen', isCorrect: false },
      { id: 'C', text: 'Hydrogen', isCorrect: true },
      { id: 'D', text: 'Carbon', isCorrect: false },
    ],
  },
  {
    id: '11',
    text: 'What is the capital of Japan?',
    answers: [
      { id: 'A', text: 'Seoul', isCorrect: false },
      { id: 'B', text: 'Beijing', isCorrect: false },
      { id: 'C', text: 'Tokyo', isCorrect: true },
      { id: 'D', text: 'Bangkok', isCorrect: false },
    ],
  },
  {
    id: '12',
    text: 'Who was the first person to walk on the moon?',
    answers: [
      { id: 'A', text: 'Buzz Aldrin', isCorrect: false },
      { id: 'B', text: 'Neil Armstrong', isCorrect: true },
      { id: 'C', text: 'Yuri Gagarin', isCorrect: false },
      { id: 'D', text: 'John Glenn', isCorrect: false },
    ],
  },
  {
    id: '13',
    text: 'Which gas do plants absorb from the atmosphere?',
    answers: [
      { id: 'A', text: 'Oxygen', isCorrect: false },
      { id: 'B', text: 'Carbon Dioxide', isCorrect: true },
      { id: 'C', text: 'Nitrogen', isCorrect: false },
      { id: 'D', text: 'Hydrogen', isCorrect: false },
    ],
  },
  {
    id: '14',
    text: 'How many continents are there on Earth?',
    answers: [
      { id: 'A', text: '5', isCorrect: false },
      { id: 'B', text: '6', isCorrect: false },
      { id: 'C', text: '7', isCorrect: true },
      { id: 'D', text: '8', isCorrect: false },
    ],
  },
  {
    id: '15',
    text: 'What is the boiling point of water at sea level?',
    answers: [
      { id: 'A', text: '90°C', isCorrect: false },
      { id: 'B', text: '100°C', isCorrect: true },
      { id: 'C', text: '110°C', isCorrect: false },
      { id: 'D', text: '120°C', isCorrect: false },
    ],
  },
  {
    id: '16',
    text: 'Which language has the most native speakers?',
    answers: [
      { id: 'A', text: 'English', isCorrect: false },
      { id: 'B', text: 'Mandarin Chinese', isCorrect: true },
      { id: 'C', text: 'Spanish', isCorrect: false },
      { id: 'D', text: 'Hindi', isCorrect: false },
    ],
  },
  {
    id: '17',
    text: 'What part of the plant conducts photosynthesis?',
    answers: [
      { id: 'A', text: 'Root', isCorrect: false },
      { id: 'B', text: 'Stem', isCorrect: false },
      { id: 'C', text: 'Leaf', isCorrect: true },
      { id: 'D', text: 'Flower', isCorrect: false },
    ],
  },
];

export const prizeStructure = [
  500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000,
];
