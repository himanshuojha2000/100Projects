const generateQuoteBtn = document.getElementById("quotebtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);

const arrayofQuotes = [
  {
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    author: "Isaac Newton",
    quote:
      "If I have seen further it is by standing on the shoulders of Giants.",
  },
  { author: "Yoda", quote: "Do or do not. There is no try." },
  { author: "Steve Jobs", quote: "Stay hungry, stay foolish." },
  { author: "Abraham Lincoln", quote: "Whatever you are, be a good one." },
  {
    author: "Nelson Mandela",
    quote: "It always seems impossible until it's done.",
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Bruce Lee",
    quote:
      "Knowing is not enough, we must apply. Willing is not enough, we must do.",
  },
  {
    author: "Aristotle",
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  },
  {
    author: "Plato",
    quote:
      "Wise men speak because they have something to say; fools because they have to say something.",
  },
  {
    author: "Buddha",
    quote:
      "What you think, you become. What you feel, you attract. What you imagine, you create.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    author: "Helen Keller",
    quote: "Alone we can do so little; together we can do so much.",
  },
  { author: "Oprah Winfrey", quote: "Turn your wounds into wisdom." },
  { author: "Benjamin Franklin", quote: "Well done is better than well said." },
  {
    author: "Elon Musk",
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    author: "Marie Curie",
    quote: "Nothing in life is to be feared, it is only to be understood.",
  },
  {
    author: "Thomas Edison",
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
  },
  {
    author: "Sun Tzu",
    quote: "In the midst of chaos, there is also opportunity.",
  },
  {
    author: "Rumi",
    quote: "Don't grieve. Anything you lose comes round in another form.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Lao Tzu",
    quote: "A journey of a thousand miles begins with a single step.",
  },
  {
    author: "Dr. Seuss",
    quote: "Don't cry because it's over, smile because it happened.",
  },
  {
    author: "Tony Robbins",
    quote: "The only limit to your impact is your imagination and commitment.",
  },
  {
    author: "Shakespeare",
    quote: "To be, or not to be, that is the question.",
  },
  {
    author: "Friedrich Nietzsche",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    author: "Voltaire",
    quote: "Judge a man by his questions rather than his answers.",
  },
  {
    author: "Leonardo da Vinci",
    quote: "Simplicity is the ultimate sophistication.",
  },
  {
    author: "George Bernard Shaw",
    quote:
      "Life isn’t about finding yourself. Life is about creating yourself.",
  },
  {
    author: "Alan Watts",
    quote:
      "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
  },
  {
    author: "Zig Ziglar",
    quote:
      "You don’t have to be great to start, but you have to start to be great.",
  },
  {
    author: "Jim Rohn",
    quote: "Discipline is the bridge between goals and accomplishment.",
  },
  {
    author: "Charlie Chaplin",
    quote: "A day without laughter is a day wasted.",
  },
  { author: "Pablo Picasso", quote: "Everything you can imagine is real." },
  { author: "Stephen King", quote: "Get busy living or get busy dying." },
  {
    author: "J.K. Rowling",
    quote:
      "It is our choices that show what we truly are, far more than our abilities.",
  },
  {
    author: "C.S. Lewis",
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
  },
  {
    author: "Barack Obama",
    quote: "The best way to not feel hopeless is to get up and do something.",
  },
  {
    author: "Malala Yousafzai",
    quote: "One child, one teacher, one book, one pen can change the world.",
  },
  {
    author: "Jeff Bezos",
    quote:
      "If you double the number of experiments you do per year, you’re going to double your inventiveness.",
  },
  {
    author: "Henry Ford",
    quote: "Whether you think you can, or you think you can't – you're right.",
  },
  {
    author: "Stephen Hawking",
    quote:
      "However difficult life may seem, there is always something you can do and succeed at.",
  },
  {
    author: "Bill Gates",
    quote:
      "Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself.",
  },
  {
    author: "Jack Ma",
    quote:
      "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.",
  },
  {
    author: "Michael Jordan",
    quote:
      "I can accept failure, everyone fails at something. But I can’t accept not trying.",
  },
  {
    author: "Serena Williams",
    quote:
      "A champion is defined not by their wins but by how they can recover when they fall.",
  },
  {
    author: "Kobe Bryant",
    quote:
      "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
  },
  { author: "LeBron James", quote: "I like criticism. It makes you strong." },
  {
    author: "Cristiano Ronaldo",
    quote: "Your love makes me strong, your hate makes me unstoppable.",
  },
  {
    author: "Lionel Messi",
    quote:
      "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
  },
  {
    author: "Virat Kohli",
    quote: "Self-belief and hard work will always earn you success.",
  },
  {
    author: "APJ Abdul Kalam",
    quote:
      "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
  },
  { author: "Sundar Pichai", quote: "Wear your failure as a badge of honor." },
  {
    author: "Mark Zuckerberg",
    quote: "The biggest risk is not taking any risk.",
  },
  { author: "Warren Buffet", quote: "The more you learn, the more you earn." },
  {
    author: "Naval Ravikant",
    quote: "Play long-term games with long-term people.",
  },
  {
    author: "Richard Feynman",
    quote:
      "The first principle is that you must not fool yourself—and you are the easiest person to fool.",
  },
  {
    author: "Carl Sagan",
    quote: "Somewhere, something incredible is waiting to be known.",
  },
  {
    author: "Elbert Hubbard",
    quote:
      "Do not take life too seriously. You will never get out of it alive.",
  },
  {
    author: "David Goggins",
    quote:
      "Be more than motivated, be more than driven, become literally obsessed to the point where people think you’re insane.",
  },
  {
    author: "Jordan Peterson",
    quote:
      "Compare yourself to who you were yesterday, not to who someone else is today.",
  },
  {
    author: "Jay Shetty",
    quote: "Don’t let someone else’s opinion of you become your reality.",
  },
  {
    author: "Will Smith",
    quote:
      "If you're not making someone else's life better, then you're wasting your time.",
  },
  {
    author: "Tony Stark",
    quote: "Sometimes you gotta run before you can walk.",
  },
  {
    author: "Master Oogway",
    quote:
      "Yesterday is history, tomorrow is a mystery, and today is a gift. That’s why it is called the present.",
  },
  { author: "Thanos", quote: "I am inevitable." },
  {
    author: "Batman",
    quote: "It's not who I am underneath, but what I do that defines me.",
  },
  {
    author: "Rocky Balboa",
    quote:
      "It ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward.",
  },
  {
    author: "Naruto Uzumaki",
    quote:
      "I’m not gonna run away, I never go back on my word! That’s my nindo: my ninja way!",
  },
  { author: "Goku", quote: "Power comes in response to a need, not a desire." },
  {
    author: "Itachi Uchiha",
    quote:
      "People live their lives bound by what they accept as correct and true.",
  },
  {
    author: "Luffy",
    quote: "If you don’t take risks, you can’t create a future!",
  },
  { author: "Saitama", quote: "I'm just a guy who's a hero for fun." },
  {
    author: "Shoyo Hinata",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  { author: "Light Yagami", quote: "I'll create a new world." },
  {
    author: "L (Death Note)",
    quote: "Being alone is better than being with the wrong person.",
  },
  { author: "Edward Elric", quote: "A lesson without pain is meaningless." },
  {
    author: "Kakashi Hatake",
    quote:
      "In the ninja world, those who break the rules are scum... but those who abandon their friends are worse than scum.",
  },
  {
    author: "Neji Hyuga",
    quote: "Fear is not evil. It tells you what your weakness is.",
  },
  {
    author: "Mob (Shigeo Kageyama)",
    quote: "It’s okay not to be okay sometimes.",
  },
  {
    author: "Gojo Satoru",
    quote: "Throughout heaven and earth, I alone am the honored one.",
  },
  {
    author: "Jiraiya",
    quote:
      "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own.",
  },
];

function generateQuote() {
  let random = Number.parseInt(Math.random() * arrayofQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arrayofQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>${arrayofQuotes[random].author}-</small>`;
}
