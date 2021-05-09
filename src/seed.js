export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */
  // Documentaries

  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Marvel Studios LEGENDS',
    description:
      'A refresher on various Marvel Cinematic Universe heroes and villains.',
    genre: 'documentaries',
    maturity: '14',
    slug: 'marvel-studios-legends',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Marvel Studios ASSEMBLED',
    description:
      'A behind-the-scenes look at the series and movies of the Marvel Cinematic Universe, including "WandaVision," The Falcon and the Winter Soldier" and "Loki."',
    genre: 'documentaries',
    maturity: '14',
    slug: 'marvel-studios-assembled',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: '616',
    description:
      "Helmed by filmmakers, documentaries explore Marvel's rich legacy of characters, creators and stories, showcasing the intersections of storytelling, pop culture and fandom within the Marvel Universe.",
    genre: 'documentaries',
    maturity: '14',
    slug: '616',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Right Stuff',
    description:
      'Astronauts and their families become instant celebrities in a competition that will either kill them or make them immortal in the quest to be a part of Project Mercury.',
    genre: 'documentaries',
    maturity: '14',
    slug: 'the-right-stuff',
  });

  // Comedies
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Diary of a Future President',
    description:
      'Twelve-year-old Elena, a Cuban-American girl, navigates the ups and downs of middle school and begins her journey to become the future president of the United States.',
    genre: 'comedies',
    maturity: '15',
    slug: 'diary-of-a-future-president',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Simpsons',
    description:
      'Working-class father Homer Simpson and his dysfunctional family deal with comical situations and the ups-and-downs of life in the town of Springfield.',
    genre: 'comedies',
    maturity: '18',
    slug: 'the-simpsons',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Muppets',
    description:
      "A fantastic medley of sweet and mischievous, Jim Henson's Muppets, including Kermit the Frog and Miss Piggy, produce a weekly variety show with a range of famous guests. Along for the ride are Gonzo, Fozzie the bear and Scooter -- who is the closest thing to a human puppet this series has.",
    genre: 'comedies',
    maturity: '15',
    slug: 'the-muppets',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Boy Meets World',
    description:
      'With the help of true love Topanga, best friend Shawn and teacher Mr. Feeny, Cory Matthews juggles school, friends and romance. The series, a popular Friday night staple on ABC for seven seasons, began with Cory in the sixth grade and follows him and his entourage through their college years.',
    genre: 'comedies',
    maturity: '15',
    slug: 'boy-meets-world',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Gravity Falls',
    description:
      'Twins Dipper and Mabel travel to the mysterious town of Gravity Falls in Oregon for their summer vacations but are shocked after they discover some strange occurrences.',
    genre: 'comedies',
    maturity: '15',
    slug: 'gravity-falls',
  });

  // Children
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Kim Possible',
    description:
      'Kim Possible looks like an average high-school cheerleader, but in her spare time, she saves the world from supervillains. Her buddy, Ron Stoppable, his pet Rufus, and a resourceful webmaster named Wade collabotrate on secret missions and can do anything.',
    genre: 'children',
    maturity: '0',
    slug: 'kim-possible',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Recess',
    description:
      'Six brave fourth-graders at Third Street School make it their mission to protect the other kids on the playground. Despite the rule of King Bob and his minions, who enforce his unwritten laws, T.J, Ashley, Vince, Gus, Gretchen and Mikey seek a rational balance between conformity and individuality.',
    genre: 'children',
    maturity: '0',
    slug: 'recess',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Ultimate Spider-Man',
    description:
      'Spider-Man, whose real name is Peter Parker when not fighting crime, is an iconic comic book character that has been featured in a number of feature films and TV shows through the years.',
    genre: 'children',
    maturity: '0',
    slug: 'ultimate-spider-man',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Puppy Dog Pals',
    description:
      'Puppy brothers Bingo and Rolly like to be around Bob, their owner, and help him do various activities. While he is away, they travel across the neighbourhood and complete exciting missions.',
    genre: 'children',
    maturity: '0',
    slug: 'puppy-dog-pals',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Mickey Mouse Clubhouse',
    description:
      'Mickey, Minnie, Pluto, Goofy, Daisy, Donald and many other clubhouse friends go on educational adventures and impart important lessons in a fun way.',
    genre: 'children',
    maturity: '0',
    slug: 'mickey-mouse-clubhouse',
  });

  // Crime
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Queen of the South',
    description:
      "Teresa flees to the United States after her drug-peddling boyfriend is murdered by a cartel boss. There, she sets out to become a drug lord and vows to avenge her lover's death.",
    genre: 'crime',
    maturity: '18',
    slug: 'queen-of-the-south',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'True Detective',
    description:
      'Police officers and detectives around the USA are forced to face dark secrets about themselves and the people around them while investigating homicides.',
    genre: 'crime',
    maturity: '18',
    slug: 'true-detective',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Most Dangerous Animal of All',
    description:
      "Based on The New York Times best-selling book of the same name, The Most Dangerous Animal of All is a four-part documentary series that explores one man's search for the father who abandoned him, only to uncover the worst: he believes his father is the Zodiac killer",
    genre: 'crime',
    maturity: '18',
    slug: 'the-most-dangerous-animal-of-all',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Twin Peaks',
    description:
      'A crime drama mixed with healthy doses of the surreal, this series is about FBI Agent Dale Cooper, who travels to the small logging town of Twin Peaks to solve the murder of seemingly innocent high schooler Laura Palmer.',
    genre: 'crime',
    maturity: '18',
    slug: 'twin-peaks',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Wilderness of Error',
    description:
      'A Wilderness of Error: The Trials of Jeffrey MacDonald is a book by Errol Morris, published in September 2012. It reexamines the case of Jeffrey MacDonald, the Green Beret physician accused of killing his wife and two daughters in their home on Fort Bragg on February 17, 1970, and convicted of the crime on August 29, 1979.',
    genre: 'crime',
    maturity: '18',
    slug: 'the-wilderness-of-error',
  });

  // Feel-good
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Modern Family',
    description:
      'Three modern-day families from California try to deal with their kids, quirky spouses and jobs in their own unique ways, often falling into hilarious situations.',
    genre: 'feel-good',
    maturity: '14',
    slug: 'good-will-hunting',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'How I Met Your Mother',
    description:
      'Ted Mosby, an architect, recounts to his children the events that led him to meet their mother. His journey is made more eventful by the presence of his friends Lily, Marshall, Robin and Barney.',
    genre: 'feel-good',
    maturity: '14',
    slug: 'how-i-met-your-mother',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'This Is Us ',
    description:
      'Kevin, Kate and Randall, three siblings, go through unique personal struggles at different intervals of life as they try to find happiness and get over a tragedy in their past.',
    genre: 'feel-good',
    maturity: '14',
    slug: 'this-is-us',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Suite Life of Zack & Cody',
    description:
      "Zack and Cody, who are identical twin brothers, find their lives taking a hilarious turn when their mother starts working at one of Boston's finest hotels, the Tipton.",
    genre: 'feel-good',
    maturity: '12',
    slug: 'the-suite-life-of-zack-and-cody',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Gifted',
    description:
      'A couple lives happily with their children. When they realise that their children possess mutant abilities, they are forced to run and join a community that will help them.',
    genre: 'feel-good',
    maturity: '12',
    slug: 'school-of-rock',
  });

  //Action
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Mandalorian',
    description:
      'After the defeat of the Empire at the hands of Rebel forces, a lone bounty hunter operating in the Outer Rim, away from the dominion of the New Republic, goes on many surprising and risky adventures.',
    genre: 'action',
    maturity: '14',
    slug: 'the-mandalorian',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Westworld',
    description:
      'In a futuristic Western-themed amusement park, Westworld, the visitors interact with automatons. However, all hell breaks loose when the robots begin malfunctioning.',
    genre: 'action',
    maturity: '18',
    slug: 'westworld',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Sopranos',
    description:
      'Tony Soprano, an Italian-American mafia head based in New Jersey, struggles to manage his family and criminal life and confides his affairs to his psychiatrist Jennifer Melfi.',
    genre: 'action',
    maturity: '16',
    slug: 'the-sopranos',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: '24',
    description:
      'Counterterrorism agent Jack Bauer fights the bad guys of the world, a day at a time. With each weeks episode unfolding in real time, 24 covers a single day in the life of Bauer each season.',
    genre: 'action',
    maturity: '16',
    slug: '24',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Game of Thrones',
    description:
      'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
    genre: 'action',
    maturity: '18',
    slug: 'game-of-thrones',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Falcon and The Winter Soldier',
    description:
      'The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on the Marvel Comics characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.',
    genre: 'action',
    maturity: '14',
    slug: 'the-falcon-and-the-winter-soldier',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Prison Break',
    description:
      'An engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence.',
    genre: 'action',
    maturity: '16',
    slug: 'prison-break',
  });

  /* Films
    ============================================ */
  // Drama
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Martian',
    description:
      'The Martian is a space-drama that shows a stranded astronaut on Mars trying to survive with very few supplies by using all his wit and grit. While NASA tries to come up with a plan to rescue him, his crewmates also try a daring escape plan.',
    genre: 'drama',
    maturity: '16',
    slug: 'the-martian',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Ford Vs. Ferrari',
    description:
      'Ford vs Ferrari is a sports movie based on true incidents that are so dramatic that they will give fictional movies a run for their money. The movie sheds light on the incredible rivalry that brewed in the late 60s between two automobile giants.',
    genre: 'drama',
    maturity: '16',
    slug: 'ford-vs-ferrari',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Life of Pi',
    description:
      'Pi Patel finds a way to survive in a lifeboat that is adrift in the middle of nowhere. His fight against the odds is heightened by the company of a hyena and a male Bengal tiger.',
    genre: 'drama',
    maturity: '14',
    slug: 'life-of-pi',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Nomadland',
    description:
      'A woman in her sixties who, after losing everything in the Great Recession, embarks on a journey through the American West, living as a van-dwelling modern-day nomad.',
    genre: 'drama',
    maturity: '16',
    slug: 'nomadland',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'John Carter',
    description:
      'John Carter finds himself transported to Mars, where he learns about his superhuman capabilities. Things take a turn when he rescues a princess who is on the run.',
    genre: 'drama',
    maturity: '12',
    slug: 'john-carter',
  });

  // Suspense
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Shutter Island',
    description:
      'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
    genre: 'suspense',
    maturity: '16',
    slug: 'shutter-island',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Inception',
    description:
      "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    genre: 'suspense',
    maturity: '15',
    slug: 'inception',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Departed',
    description:
      'An undercover agent and a spy constantly try to counter-attack each other in order to save themselves from being exposed in front of the authorities. Meanwhile, both try to infiltrate an Irish gang',
    genre: 'suspense',
    maturity: '16',
    slug: 'the-departed',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Gone Girl',
    description:
      'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.',
    genre: 'suspense',
    maturity: '16',
    slug: 'gone-girl',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Drive',
    description:
      'A stuntman and getaway driver falls in love with Irene who is married to a criminal. In a bid to protect her from her husband and some gangsters, he decides to cross over to the other side of the law.',
    genre: 'suspense',
    maturity: '16',
    slug: 'drive',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Fight Club',
    description:
      'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
    genre: 'suspense',
    maturity: '18',
    slug: 'fight-club',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: "Gerald's Game",
    description:
      'A woman accidentally kills her husband during a kinky game. Handcuffed to her bed with no hope of rescue, she begins hearing voices and seeing strange visions.',
    genre: 'suspense',
    maturity: '18',
    slug: 'geralds-game',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Bird Box',
    description:
      'When a mysterious force decimates the population, only one thing is certain -- if you see it, you die. The survivors must now avoid coming face to face with an entity that takes the form of their worst fears.',
    genre: 'suspense',
    maturity: '16',
    slug: 'bird-box',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Nightcrawler',
    description:
      'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
    genre: 'suspense',
    maturity: '16',
    slug: 'nightcrawler',
  });

  // Marvel
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Avengers: Endgame',
    description:
      'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.',
    genre: 'marvel',
    maturity: '14',
    slug: 'avengers-endgame',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Captain Marvel',
    description:
      'Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.',
    genre: 'marvel',
    maturity: '14',
    slug: 'captain-marvel',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Thor: Ragnarok',
    description:
      'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.',
    genre: 'marvel',
    maturity: '14',
    slug: 'thor-ragnarok',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Spider-Man: Homecoming',
    description:
      'Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.',
    genre: 'marvel',
    maturity: '12',
    slug: 'spiderman-homecoming',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Doctor Strange',
    description:
      'In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.',
    genre: 'marvel',
    maturity: '14',
    slug: 'doctor-strange',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Captain America: Civil War',
    description:
      "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it",
    genre: 'marvel',
    maturity: '14',
    slug: 'captain-america-civil-war',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Black Panther',
    description:
      "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
    genre: 'marvel',
    maturity: '14',
    slug: 'black-panther',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Ant-Man',
    description:
      'Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements',
    genre: 'marvel',
    maturity: '16',
    slug: 'ant-man',
  });

  // Star Wars
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode I - The Phantom Menace',
    description:
      'Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.',
    genre: 'starwars',
    maturity: '14',
    slug: 'starwars-1',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode II - Attack of the Clones',
    description:
      'Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.',
    genre: 'starwars',
    maturity: '14',
    slug: 'starwars-2',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode III - Revenge of the Sith',
    description:
      'Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.',
    genre: 'starwars',
    maturity: '14',
    slug: 'starwars-3',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode IV - A New Hope',
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    genre: 'starwars',
    maturity: '12',
    slug: 'starwars-4',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    description:
      'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.',
    genre: 'starwars',
    maturity: '14',
    slug: 'starwars-5',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode VI - Return of the Jedi',
    description:
      "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    genre: 'starwars',
    maturity: '14',
    slug: 'starwars-6',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode VII - The Force Awakens',
    description:
      'As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.',
    genre: 'starwars',
    maturity: '14',
    slug: 'starwars-7',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode VIII - The Last Jedi',
    description:
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.',
    genre: 'starwars',
    maturity: '14',
    slug: 'starwars-8',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Star Wars: Episode IX - The Rise of Skywalker',
    description:
      'The surviving members of the Resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak, bringing the Skywalker saga to its end.',
    genre: 'starwars',
    maturity: '14',
    slug: 'starwars-9',
  });

  // Children
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Coco',
    description:
      "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer.",
    genre: 'children',
    maturity: '0',
    slug: 'coco',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Brave',
    description:
      'Merida, an independent archer, disobeys an ancient custom which unleashes a dark force. After meeting an elderly witch, as she journeys to reverse the curse, she discovers the real meaning of bravery.',
    genre: 'children',
    maturity: '0',
    slug: 'brave',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Frozen',
    description:
      'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
    genre: 'children',
    maturity: '0',
    slug: 'frozen',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Spirited Away',
    description:
      'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
    genre: 'children',
    maturity: '0',
    slug: 'spirited-away',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Up',
    description:
      "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
    genre: 'children',
    maturity: '0',
    slug: 'up',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Bolt',
    description:
      'Bolt is a dog who stars in a superhit television show in which he possesses superpowers. However, things change when he believes his powers are real and embarks on a purposeful mission.',
    genre: 'children',
    maturity: '0',
    slug: 'bolt',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Inside Out',
    description:
      'Eleven-year-old Riley moves to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life.',
    genre: 'children',
    maturity: '0',
    slug: 'inside-out',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Cars',
    description:
      'Lightning McQueen, a racing car, learns a hard lesson in life when he damages a lot of property in Radiator Springs. His task is to repair the damage done before he can get back on the road.',
    genre: 'children',
    maturity: '0',
    slug: 'cars',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Tangled',
    description:
      'Rapunzel, a naive and young girl, is locked up by her overly protective mother. Her wish to escape into the world outside finally comes true when she meets the good-hearted thief, Flynn.',
    genre: 'children',
    maturity: '0',
    slug: 'tangled',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Zootropolis',
    description:
      'When Judy Hopps, a rookie officer in the Zootopia Police Department, sniffs out a sinister plot, she enlists the help of a con artist to solve the case in order to prove her abilities to Chief Bogo.',
    genre: 'children',
    maturity: '0',
    slug: 'zootropolis',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Frozen 2',
    description:
      'Queen Elsa starts hearing a mysterious melodic voice calling to her. Unsettled, she answers it and that awakens the elemental spirits that lead her to a quest to restore an old injustice.',
    genre: 'children',
    maturity: '0',
    slug: 'frozen-2',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Incredibles',
    description:
      'Forced to adopt a civilian identity and stuck in a white-collar job, Mr Incredible itches to get back into action. When he is lured into a trap by the evil Syndrome, his family contrives to save him.',
    genre: 'children',
    maturity: '0',
    slug: 'the-incredibles',
  });

  // Thriller
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Intern',
    description:
      'Ben Whittaker, a 70-year-old widower, realises that he is not cut out for retirement. He then applies to become a senior intern for a sceptical boss at an online fashion site.',
    genre: 'comedy',
    maturity: '14',
    slug: 'the-intern',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Baywatch',
    description:
      'Lifeguard Mitch Buchannon and his team discover a drug racket involving businesswoman Victoria Leeds and decide to unearth the truth and bring the perpetrators to justice.',
    genre: 'comedy',
    maturity: '16',
    slug: 'baywatch',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Deadpool',
    description:
      'Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.',
    genre: 'comedy',
    maturity: '18',
    slug: 'deadpool',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Ted',
    description:
      "When John Bennett (Mark Wahlberg) was a little boy, he made a wish that Ted (Seth MacFarlane), his beloved teddy bear, would come alive. Thirty years later, foul-mouthed Ted is still John's constant companion, much to the chagrin of Lori (Mila Kunis), John's girlfriend.",
    genre: 'comedy',
    maturity: '18',
    slug: 'ted',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Dictator',
    description:
      'Aladeen, a brutal dictator, travels to New York in order to address the United Nations Security Council. However, his plans go south when a hitman hired by his uncle, Tamir, kidnaps him.',
    genre: 'comedy',
    maturity: '18',
    slug: 'the-dictator',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Jumanji: The Next Level',
    description:
      "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
    genre: 'comedy',
    maturity: '13',
    slug: 'jumanji-the-next-level',
  });
  // Romance
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Me Before You',
    description:
      'After becoming unemployed, Louisa Clark is forced to accept one which requires her to take care of Will Traynor, a paralysed man. The two of them soon bond with each other.',
    genre: 'romance',
    maturity: '13',
    slug: 'me-before-you',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Crazy, Stupid, Love',
    description:
      'Cal, a middle-aged man, is heartbroken when his wife asks for a divorce. However, to get over his loss, he starts picking up women at a bar on the insistence of his new-found friend, Jacob.',
    genre: 'romance',
    maturity: '13',
    slug: 'crazy-stupid-love',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La La Land',
    description:
      'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...',
    genre: 'romance',
    maturity: '13',
    slug: 'la-la-land',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Notebook',
    description:
      "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.",
    genre: 'romance',
    maturity: '13',
    slug: 'the-notebook',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Perks of Being a Wallflower',
    description:
      "Charlie, a 15-year-old introvert, enters high school and is nervous about his new life. When he befriends his seniors, he learns to cope with his friend's suicide and his tumultuous past.",
    genre: 'romance',
    maturity: '13',
    slug: 'the-perks-of-being-a-wallflower',
  });
}
