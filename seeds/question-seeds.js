const { Question } = require('../models');

const questionData = [
    {
        cat_number: 1,
        category: 'Horror',
        question: 'How many times does Count Orlock blink throughout the entirety of his appearance in Nosferatu?',
        correct_answer: 'Once',
        answer1: 'Once',
        answer2: 'Twice',
        answer3: 'Three Times',
        answer4: 'Four Times'
    },
    {
        cat_number: 2,
        category: 'Horror',
        question: 'Which horror film was the first-ever of its genre to be nominated for a Best Picture Oscar?',
        correct_answer: 'The Exorcist',
        answer1: 'Jaws',
        answer2: 'Halloween',
        answer3: 'The Exorcist',
        answer4: 'Rosemarys Baby'
    },
    {
        cat_number: 3,
        category: 'Horror',
        question: 'How many years did it take to get Aliens made?',
        correct_answer: 'Seven',
        answer1: 'Four',
        answer2: 'Five',
        answer3: 'Seven',
        answer4: 'Eight'
    },
    {
        cat_number: 4,
        category: 'Horror',
        question: 'What is the most profitable film series of all time?',
        correct_answer: 'Paranormal Activity',
        answer1: 'Paranormal Activity',
        answer2: 'Scream',
        answer3: 'Nightmare on Elm Street',
        answer4: 'The Purge'
    },
    {
        cat_number: 5,
        category: 'Horror',
        question: 'Which popular horror film was inspired by real events that took place in Gainesville, Florida in the early 90s?',
        correct_answer: 'Scream',
        answer1: 'I Know What You Did Last Summer',
        answer2: 'The Haunting',
        answer3: 'Scream',
        answer4: 'The Faculty'
    },
    {
        cat_number: 6,
        category: 'Horror',
        question: 'How long did it take to film The Blair Witch Project?',
        correct_answer: '8 Days',
        answer1: '3 Days',
        answer2: '8 Days',
        answer3: '4 Weeks',
        answer4: '6 Months'
    },
    {
        cat_number: 7,
        category: 'Horror',
        question: 'What is the name of the demon that possesses Regan MacNeil in The Exorcist?',
        correct_answer: 'Pazuzu',
        answer1: 'Abaddon',
        answer2: 'Amon',
        answer3: 'Drexel',
        answer4: 'Pazuzu'
    },
    {
        cat_number: 8,
        category: 'Horror',
        question: 'What was almost the title of the Friday the 13th movies?',
        correct_answer: 'Long Night at Camp Blood',
        answer1: 'Long Night at Camp Blood',
        answer2: 'Nighttime at Camp Fear',
        answer3: 'Jason',
        answer4: 'Teenage Blood'
    },
    {
        cat_number: 9,
        category: 'Horror',
        question: 'What color is Freddy Kreuger’s sweater?',
        correct_answer: 'Red and Green',
        answer1: 'Red and Purple',
        answer2: 'Red and Yellow',
        answer3: 'Red and White',
        answer4: 'Red and Green'
    },
    {
        cat_number: 10,
        category: 'Horror',
        question: 'How long did it take to film The Blair Witch Project?',
        correct_answer: '8 Days',
        answer1: '3 Days',
        answer2: '8 Days',
        answer3: '4 Weeks',
        answer4: '6 Months'
    },
    {
        cat_number: 1,
        category: 'Comedy',
        question: 'National Lampoons Christmas Vacation was released when?',
        correct_answer: '1989',
        answer1: '1986',
        answer2: '1987',
        answer3: '1988',
        answer4: '1989'
    },
    {
        cat_number: 2,
        category: 'Comedy',
        question: 'In "Scrooged" what is Bill Murrays characters profession?',
        correct_answer: 'TV Executive',
        answer1: 'Vice President of a Bank',
        answer2: 'Lawyer',
        answer3: 'Entrepreneur',
        answer4: 'TV Executive'
    },
    {
        cat_number: 3,
        category: 'Comedy',
        question: 'In the 1978 movie "Animal House", who played Omega pledge Chip Diller?',
        correct_answer: 'Kevin Bacon',
        answer1: 'Tim Matheson',
        answer2: 'John Belushi',
        answer3: 'Kevin Bacon',
        answer4: 'Chevy Chase'
    },
    {
        cat_number: 4,
        category: 'Comedy',
        question: 'In the movie "Ace Ventura: Pet Detective", whose picture does Aces dog sit on?',
        correct_answer: 'Ray Finkle',
        answer1: 'Tom Hanks',
        answer2: 'Ray Finkle',
        answer3: 'Dan Marino',
        answer4: 'Jim Carrey'
    },
    {
        cat_number: 5,
        category: 'Comedy',
        question: 'Where did Elle grow-up in the movie "Legally Blonde"?',
        correct_answer: 'Bel Air',
        answer1: 'Bel Air',
        answer2: 'Newport Beach',
        answer3: 'New York',
        answer4: 'Boston'
    },
    {
        cat_number: 6,
        category: 'Comedy',
        question: 'Paul Rudd has a small role in "Forgetting Sarah Marshall" as what Hawaiian character?',
        correct_answer: 'Surf Instructor',
        answer1: 'Waiter',
        answer2: 'Hotel Patron',
        answer3: 'Surf Instructor',
        answer4: 'Boat Driver'
    },
    {
        cat_number: 7,
        category: 'Comedy',
        question: 'In the 2007 movie "Superbad", who punches Fogell in a liquor store?',
        correct_answer: 'A Robber',
        answer1: 'Officer Slater',
        answer2: 'A Robber',
        answer3: 'A Store Owner',
        answer4: 'Seth'
    },
    {
        cat_number: 8,
        category: 'Comedy',
        question: 'What hotel was used in "Beverly Hills Cop II"?',
        correct_answer: 'Hollywood Roosevelt',
        answer1: 'Hollywood Roosevelt',
        answer2: 'Dream HollyWood',
        answer3: 'W Hollywood',
        answer4: 'Mondrian Los Angeles'
    },
    {
        cat_number: 9,
        category: 'Comedy',
        question: 'What does Dr. Evil name his clone?',
        correct_answer: 'Mini Me',
        answer1: 'Tiny Me',
        answer2: 'Little Evil',
        answer3: 'Mini Me',
        answer4: 'Seth'
    },
    {
        cat_number: 10,
        category: 'Comedy',
        question: 'What toy does Arnold Schwarzeneggers son want in the movie "Jingle All the Way"?',
        correct_answer: 'Turbo Man',
        answer1: 'Tickle Me Elmo',
        answer2: 'Buzz Lightyear',
        answer3: 'Space Invader',
        answer4: 'Turbo Man'
    },
    {
        cat_number: 1,
        category: 'Action',
        question: 'Who directed the 2001 thriller, "Jurassic Park III"?',
        correct_answer: 'Joe Johnston',
        answer1: 'Stephen Spielberg',
        answer2: 'JJ Abrams',
        answer3: 'J.A. Bayona',
        answer4: 'Joe Johnston'
    },
    {
        cat_number: 2,
        category: 'Action',
        question: 'Who played the title character in "Saving Private Ryan"?',
        correct_answer: 'Matt Damon',
        answer1: 'Tom Hanks',
        answer2: 'Edward Burns',
        answer3: 'Matt Damon',
        answer4: 'Vin Diesel'
    },
    {
        cat_number: 3,
        category: 'Action',
        question: 'In which 2000 movie did Tom Cruise play the character Ethan Hunt?',
        correct_answer: 'Mission: Impossible II',
        answer1: 'Mission: Impossible',
        answer2: 'Minority Report',
        answer3: 'Mission: Impossible II',
        answer4: 'Top Gun'
    },
    {
        cat_number: 4,
        category: 'Action',
        question: 'What movie released in the 1990s featured both William Baldwin and Kurt Russell?',
        correct_answer: 'Backdraft',
        answer1: 'Casino',
        answer2: 'Escape From New York',
        answer3: 'Escape From L.A.',
        answer4: 'Backdraft'
    },
    {
        cat_number: 5,
        category: 'Action',
        question: 'In the movie "Top Gun" starring Tom Cruise, in what ocean is the aircraft carrier located?',
        correct_answer: 'Indian',
        answer1: 'Atlantic',
        answer2: 'Indian',
        answer3: 'Pacific',
        answer4: 'Arctic'
    },
    {
        cat_number: 6,
        category: 'Action',
        question: 'The movie, "Gladiator", was directed by whom?',
        correct_answer: 'Ridley Scott',
        answer1: 'Ridley Scott',
        answer2: 'Joe Johnston',
        answer3: 'James Cameron',
        answer4: 'Christopher Nolan'
    },
    {
        cat_number: 7,
        category: 'Action',
        question: 'What does Chris drop at the end of "Platoon"?',
        correct_answer: 'A Hand Grenade',
        answer1: 'A Rifle',
        answer2: 'A Letter',
        answer3: 'A Hand Grenade',
        answer4: 'A Bible'
    },
    {
        cat_number: 8,
        category: 'Action',
        question: 'In the movie "Blade Runner", who saves Deckards life atop of the Bradbury Building?',
        correct_answer: 'Roy',
        answer1: 'Pris',
        answer2: 'Rachael',
        answer3: 'J.F. Sebastian',
        answer4: 'Roy'
    },
    {
        cat_number: 9,
        category: 'Action',
        question: 'What disease is Longshanks dying of in the 1995 movie "Braveheart"?',
        correct_answer: 'Tuberculosis',
        answer1: 'Small Pox',
        answer2: 'Cancer',
        answer3: 'Tuberculosis',
        answer4: 'Polio'
    },
    {
        cat_number: 10,
        category: 'Action',
        question: 'What speed mustnt the bus fall below in the 1994 action-thriller "Speed"?',
        correct_answer: '50mph',
        answer1: '70mph',
        answer2: '55mph',
        answer3: '50mph',
        answer4: '60mph'
    },
    {
        cat_number: 1,
        category: 'Fantasy/Sci-Fi',
        question: 'Anakin Skywalker, better known as Darth Vader, is killed in which Star Wars movie?',
        correct_answer: 'Revenge of the Sith',
        answer1: 'Revenge of the Sith',
        answer2: 'Empire Strikes Back',
        answer3: 'A New Hope',
        answer4: 'Return of the Jedi'
    },
    {
        cat_number: 2,
        category: 'Fantasy/Sci-Fi',
        question: 'John Hammond, the billionaire, is at the center of which film?',
        correct_answer: 'Jurassic Park',
        answer1: 'Iron Man',
        answer2: 'Jurassic Park',
        answer3: 'The Matrix',
        answer4: 'Furious 7'
    },
    {
        cat_number: 3,
        category: 'Fantasy/Sci-Fi',
        question: 'What is the name of the robot that is featured in the 1956 classic science fiction film "Forbidden Planet"?',
        correct_answer: 'Robby the Robot',
        answer1: 'Clank',
        answer2: 'Sojourner',
        answer3: 'Johnny 5',
        answer4: 'Robby the Robot'
    },
    {
        cat_number: 4,
        category: 'Fantasy/Sci-Fi',
        question: 'Which 2005 movie is a spin-off of the TV series "Firefly"?',
        correct_answer: 'Serenity',
        answer1: 'THX 1138',
        answer2: 'Serenity',
        answer3: 'The Chronicles of Riddick',
        answer4: 'Solaris'
    },
    {
        cat_number: 5,
        category: 'Fantasy/Sci-Fi',
        question: 'Played by Roddy Piper, protagonist John Nada finds some special sunglasses that allow him to see that the world is ruled by skull-faced aliens.',
        correct_answer: 'They Live',
        answer1: 'Alien Nation',
        answer2: 'They Live',
        answer3: 'I Come in Peace',
        answer4: 'The Hidden'
    },
    {
        cat_number: 6,
        category: 'Fantasy/Sci-Fi',
        question: 'With what film would you associate the phrase "Ill Be Back"?',
        correct_answer: 'The Terminator',
        answer1: 'The Last Stand',
        answer2: 'Total Recall',
        answer3: 'The Terminator',
        answer4: 'Collateral Damage'
    },
    {
        cat_number: 7,
        category: 'Fantasy/Sci-Fi',
        question: 'Who plays the role of Captain James T. Kirk in the rebooted Star Trek films?',
        correct_answer: 'Chris Pine',
        answer1: 'Benedict Cumberbatch',
        answer2: 'Karl Urban',
        answer3: 'Zachary Quinto',
        answer4: 'Chris Pine'
    },
    {
        cat_number: 8,
        category: 'Fantasy/Sci-Fi',
        question: 'Loosely based on a short story by Philip K. Dick, who directed the 2002 hit "Minority Report"?',
        correct_answer: 'Steven Spielberg',
        answer1: 'George Lucas',
        answer2: 'Steven Spielberg',
        answer3: 'James Cameron',
        answer4: 'Francis Ford Coppola'
    },
    {
        cat_number: 9,
        category: 'Fantasy/Sci-Fi',
        question: 'In what 1985 Sci-Fi classic do we see Dennis Quaid crash-land on a planet with an alien soldier (Louis Gossett Jr.)?',
        correct_answer: 'Enemy Mine',
        answer1: 'Enemy Mine',
        answer2: 'Red Planet',
        answer3: 'Explorers',
        answer4: 'Pitch Black'
    },
    {
        cat_number: 10,
        category: 'Fantasy/Sci-Fi',
        question: 'Which classic Sci Fi film is based on a 1962 Anthony Burgess novel?',
        correct_answer: 'A Clockwork Orange',
        answer1: 'A Clockwork Orange',
        answer2: 'Invasion of the Body Snatcher',
        answer3: 'Cloverfield',
        answer4: 'Metropolis'
    },
    {
        cat_number: 1,
        category: 'Romance',
        question: 'The 1999 romantic comedy film "10 Things I Hate About You" is based on which Shakespearean play?',
        correct_answer: 'The Taming of the Shrew',
        answer1: 'The Winters Tale',
        answer2: 'The Tempest',
        answer3: 'The Taming of the Shrew',
        answer4: 'Romeo and Juliet'
    },
    {
        cat_number: 2,
        category: 'Romance',
        question: 'Winner of eight Teen Choice Awards, in what year was "The Notebook" released?',
        correct_answer: '2004',
        answer1: '2008',
        answer2: '2004',
        answer3: '2002',
        answer4: '2012'
    },
    {
        cat_number: 3,
        category: 'Romance',
        question: 'Jim Carey and Kate Winslet play lovers in which film?',
        correct_answer: 'Eternal Sunshine of the Spotless Mind',
        answer1: 'A Matter of Life and Death',
        answer2: 'Harold and Maude',
        answer3: 'Eternal Sunshine of the Spotless Mind',
        answer4: 'When Harry Met Sally'
    },
    {
        cat_number: 4,
        category: 'Romance',
        question: 'The 1942 classic romantic-drama film "Casablanca" takes place in which country?',
        correct_answer: 'Morocco',
        answer1: 'Syria',
        answer2: 'Morocco',
        answer3: 'Iran',
        answer4: 'South Africa'
    },
    {
        cat_number: 5,
        category: 'Romance',
        question: 'Voiced by Jerry Orbach, what is the name of the candlestick in the 1991 Disney film "Beauty and the Beast"?',
        correct_answer: 'Lumiere',
        answer1: 'Lumiere',
        answer2: 'LeFou',
        answer3: 'Mr. Chips',
        answer4: 'Cogsworth'
    },
    {
        cat_number: 6,
        category: 'Romance',
        question: 'Released in 1990, what is the name of Julia Roberts character in "Pretty Woman"?',
        correct_answer: 'Vivien',
        answer1: 'Mary',
        answer2: 'Vivien',
        answer3: 'Leanne',
        answer4: 'Lulu'
    },
    {
        cat_number: 7,
        category: 'Romance',
        question: 'Who plays Sarah Marshall in the 2008 romantic comedy film "Forgetting Sarah Marshall"?',
        correct_answer: 'Kristen Bell',
        answer1: 'Courtney Cox',
        answer2: 'Kristen Bell',
        answer3: 'Jennifer Aniston',
        answer4: 'Anne Hathaway'
    },
    {
        cat_number: 8,
        category: 'Romance',
        question: 'Which singer stars in the 1992 romantic-thriller film "The Bodyguard"?',
        correct_answer: 'Whitney Houston',
        answer1: 'Tina Turner',
        answer2: 'Mariah Carey',
        answer3: 'Whitney Houston',
        answer4: 'Jennifer Lopez'
    },
    {
        cat_number: 9,
        category: 'Romance',
        question: 'Which of the following is the correct title of a 2009 Steve Martin romance film?',
        correct_answer: 'Its Complicated',
        answer1: 'Its Crazy',
        answer2: 'Its Complicated',
        answer3: 'Its Real',
        answer4: 'Its Love'
    },
    {
        cat_number: 10,
        category: 'Romance',
        question: 'Which of these romance films is set during World War II ? ',
        correct_answer: 'A Matter of Life and Death',
        answer1: 'A Matter of Life and Death',
        answer2: 'Notting Hill',
        answer3: 'Punch Drunk Love',
        answer4: 'The Philadelphia Story'
    }
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;
