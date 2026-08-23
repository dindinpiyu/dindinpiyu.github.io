/* =========================================================================
   CONFIG — this is the only part you need to touch.
   Fill in your own names, dates, cities, and messages below.
   ========================================================================= */

const CONFIG = {
  nameA: "dindin",
  nameB: "piyu",

  startDate: "2025-12-24T00:00:00",

  timeZone: "Asia/Kolkata",

  cityA: {
    label: "Lamka",
    lat: 24.33,
    lon: 93.68,
  },

  cityB: {
    label: "Noida",
    lat: 28.5355,
    lon: 77.3910,
  },

  tempUnit: "celsius",

  distanceUnit: "km",

  distanceValue: 2427,

  gallery: [
    { src: "1.jpeg", caption: "" },
    { src: "2.webp", caption: "" },
    { src: "3.webp", caption: "" },
    { src: "4.webp", caption: "" },
  ],

  spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/7sQgpDEQvHHD1Mv849huGC?utm_source=generator&si=4293fc7b25414a86",

  notes: [
    { front: "why you", back: "because you make ordinary days sound interesting on the phone." },
    { front: "a promise", back: "every distance has an end date, even when it doesn't feel like it." },
    { front: "a fact", back: "you are objectively very easy to love. this is not up for debate." },
    { front: "a small thing", back: "I look at the moon and think of you more than I'll admit." },
  ],

  hugMessages: [
    "sent. it'll get there before the wifi does.",
    "consider yourself hugged, wherever you are.",
    "one hug, deployed across the distance.",
    "there. a little closer now.",
  ],
};

/* =========================================================================
   ONE YEAR LETTERS
   ========================================================================= */

const ONE_YEAR_UNLOCK_ISO = "2026-12-24T00:00:00+05:30";

const ONE_YEAR_LETTER_A = `
PASTE DINDIN'S LETTER HERE
`;

const ONE_YEAR_LETTER_B = `
PASTE PIYU'S LETTER HERE
`;

/* =========================================================================
   OUR BUCKET LIST
   ========================================================================= */

const BUCKET_LIST = [
  {
    id: "visit-museum",
    title: "Visit a museum together",
    description: "Wander around, look at beautiful things, and pretend we understand the really confusing art.",
    icon: "🏛️",
    category: "adventures",
    completed: false
  },
  {
    id: "visit-aquarium",
    title: "Visit an aquarium",
    description: "Go see all the fishies together.",
    icon: "🐠",
    category: "adventures",
    completed: false
  },
  {
    id: "red-string-tattoo",
    title: "Get the red string tattoo",
    description: "Make the red string theory a little more permanent.",
    icon: "🧵",
    category: "us",
    completed: false
  },
  {
    id: "escape-room",
    title: "Play an escape room",
    description: "Get locked in a room together and see if we can actually escape.",
    icon: "🔐",
    category: "adventures",
    completed: false
  },
  {
    id: "build-nest",
    title: "Make a nest and live in it",
    description: "Build the coziest little nest imaginable and simply live there.",
    icon: "🪹",
    category: "future",
    completed: false
  },
  {
    id: "northern-lights",
    title: "Watch the northern lights together",
    description: "Stand somewhere freezing, look up at the sky, and watch the aurora together.",
    icon: "🌌",
    category: "travel",
    completed: false
  },
  {
    id: "badminton",
    title: "Play badminton together",
    description: "A totally serious and completely competitive badminton match.",
    icon: "🏸",
    category: "little-things",
    completed: false
  },
  {
    id: "watch-sunset",
    title: "Watch the sunset together",
    description: "Find somewhere pretty, sit together, and watch the sky change colors.",
    icon: "🌅",
    category: "little-things",
    completed: false
  },
  {
    id: "play-chess",
    title: "Play chess together",
    description: "A peaceful little game that will definitely not turn competitive.",
    icon: "♟️",
    category: "little-things",
    completed: false
  },
  {
    id: "movie-night",
    title: "Watch a movie together",
    description: "Pick a movie, get comfortable, and spend the whole evening together.",
    icon: "🎬",
    category: "little-things",
    completed: false
  },
  {
    id: "ghost-hunting",
    title: "Go ghost hunting",
    description: "Explore an abandoned place together and immediately regret every decision.",
    icon: "👻",
    category: "adventures",
    completed: false
  },
  {
    id: "skydiving",
    title: "Go skydiving together",
    description: "Jump out of a perfectly functional airplane together. For some reason.",
    icon: "🪂",
    category: "adventures",
    completed: false
  },
  {
    id: "big-telescope",
    title: "Get a big telescope",
    description: "Get a ridiculously big telescope and spend nights looking at the sky together.",
    icon: "🔭",
    category: "future",
    completed: false
  },
  {
    id: "mountain-camping",
    title: "Go camping in the mountains",
    description: "Camp somewhere beautiful, get cozy, and wake up surrounded by mountains.",
    icon: "🏕️",
    category: "travel",
    completed: false
  },
  {
    id: "matching-tattoos",
    title: "Get matching tattoos",
    description: "Get something permanent that reminds us of each other.",
    icon: "🖋️",
    category: "us",
    completed: false
  },
  {
    id: "crochet-together",
    title: "Crochet something together",
    description: "Make something with our own hands, even if it turns out completely wonky.",
    icon: "🧶",
    category: "little-things",
    completed: false
  },
  {
    id: "photobooth",
    title: "Take pictures in a photobooth",
    description: "Get a strip of ridiculous little pictures together and keep it forever.",
    icon: "📸",
    category: "memories",
    completed: false
  },
  {
    id: "clay-making",
    title: "Make something out of clay",
    description: "Make little clay creations together and see whose turns out worse.",
    icon: "🏺",
    category: "little-things",
    completed: false
  },
  {
    id: "live-switzerland",
    title: "Live in Switzerland",
    description: "Wake up somewhere beautiful and call Switzerland home, even if only for a while.",
    icon: "🇨🇭",
    category: "future",
    completed: false
  },
  {
    id: "meteor-shower",
    title: "Watch a meteor shower together",
    description: "Lie under the night sky and make wishes every time a meteor passes.",
    icon: "☄️",
    category: "adventures",
    completed: false
  },
  {
    id: "travel-together",
    title: "Travel together",
    description: "Go somewhere neither of us has been and make a whole collection of memories.",
    icon: "✈️",
    category: "travel",
    completed: false
  },
  {
    id: "cook-together",
    title: "Cook something together",
    description: "Pick something we've never made before and figure it out together.",
    icon: "🍳",
    category: "little-things",
    completed: false
  },
  {
    id: "buy-caravan",
    title: "Buy a caravan",
    description: "Get our own little home on wheels and go wherever we feel like going.",
    icon: "🚐",
    category: "future",
    completed: false
  },
  {
    id: "sprite-challenge",
    title: "Try not burping after drinking a bottle of Sprite",
    description: "One bottle. No burping. This is apparently an important life goal.",
    icon: "🥤",
    category: "silly",
    completed: false
  },
  {
    id: "the-kiss",
    title: "See The Kiss and recreate it",
    description: "Go see Klimt's The Kiss in a museum and recreate the painting together.",
    icon: "💋",
    category: "memories",
    completed: false
  },
  {
    id: "libraries",
    title: "Visit libraries together",
    description: "Explore beautiful libraries, get lost between the shelves, and read together.",
    icon: "📚",
    category: "little-things",
    completed: false
  },
  {
    id: "karaoke",
    title: "Go karaoke together",
    description: "Sing our hearts out, regardless of whether either of us can actually sing.",
    icon: "🎤",
    category: "adventures",
    completed: false
  },
  {
    id: "matching-grillz",
    title: "Get matching grillz",
    description: "Because apparently matching tattoos weren't enough.",
    icon: "💎",
    category: "us",
    completed: false
  },
  {
    id: "late-night-drives",
    title: "Go on late-night drives",
    description: "Drive around at night with the windows down and our music playing.",
    icon: "🚗",
    category: "little-things",
    completed: false
  },
  {
    id: "seven-wonders",
    title: "Visit all 7 wonders together",
    description: "See all seven wonders of the world together and collect memories from every one.",
    icon: "🌍",
    category: "travel",
    completed: false
  },
  {
    id: "concert",
    title: "Go to a concert together",
    description: "Stand in a crowd, scream the lyrics, and experience our favorite music together.",
    icon: "🎶",
    category: "adventures",
    completed: false
  },
  {
    id: "eiffel-tower",
    title: "See the Eiffel Tower",
    description: "Go to Paris and see the Eiffel Tower together.",
    icon: "🗼",
    category: "travel",
    completed: false
  },
  {
    id: "thrifting",
    title: "Go thrifting together",
    description: "Spend hours looking through random clothes and find something ridiculous we love.",
    icon: "👕",
    category: "little-things",
    completed: false
  },
  {
    id: "taj-mahal",
    title: "See the Taj Mahal",
    description: "Stand in front of one of the world's most iconic symbols of love together.",
    icon: "🕌",
    category: "travel",
    completed: false
  },
  {
    id: "build-lego",
    title: "Build LEGO together",
    description: "Pick a LEGO set, build it together, and absolutely refuse to lose any pieces.",
    icon: "🧱",
    category: "little-things",
    completed: false
  },
  {
    id: "matching-mugs",
    title: "Get matching mugs",
    description: "Have matching mugs that are unnecessarily cute and become our everyday mugs.",
    icon: "☕",
    category: "us",
    completed: false
  },
  {
    id: "draw-each-other",
    title: "Draw each other",
    description: "Draw portraits of each other and try very hard not to offend one another.",
    icon: "🎨",
    category: "little-things",
    completed: false
  }
];

const CATEGORY_META = {
  "experience": { icon: "✨", label: "Experience" },
  "memory": { icon: "📸", label: "Memories" },
  "travel": { icon: "✈️", label: "Travel" },
  "food": { icon: "🍜", label: "Food" },
  "little-things": { icon: "🌙", label: "Little things" },
  "us": { icon: "❤️", label: "Us" },
  "adventures": { icon: "🎡", label: "Adventures" },
  "future": { icon: "🏠", label: "Future" },
};

/* =========================================================================
   Everything below this line runs the page — no need to edit it.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("name-a").textContent = CONFIG.nameA;
  document.getElementById("name-b").textContent = CONFIG.nameB;
  document.getElementById("place-a").textContent = CONFIG.cityA.label;
  document.getElementById("place-b").textContent = CONFIG.cityB.label;

  renderDistance();
  renderNotes();
  renderGallery();
  renderPlaylist();
  setupHugButton();
  setupOneYearLetters();
  renderBucketList("all");
  setupBucketListFilters();

  fetchWeather("a", CONFIG.cityA);
  fetchWeather("b", CONFIG.cityB);

  setInterval(() => fetchWeather("a", CONFIG.cityA), 10 * 60 * 1000);
  setInterval(() => fetchWeather("b", CONFIG.cityB), 10 * 60 * 1000);

  tick();
  setInterval(tick, 1000);
});

function tick() {
  updateDayCounter();
  updateMoon();
  updateLettersCountdown();
}

/* ---------- day counter ---------- */

function updateDayCounter() {
  const start = new Date(CONFIG.startDate);
  const now = new Date();
  const diffMs = now - start;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  document.getElementById("days-together").textContent =
    Math.max(days, 0).toLocaleString();
}

/* ---------- weather ---------- */

const WEATHER_CODES_DAY = {
  0: { icon: "☀️", text: "clear sky" },
  1: { icon: "🌤️", text: "mostly clear" },
  2: { icon: "⛅", text: "partly cloudy" },
  3: { icon: "☁️", text: "overcast" },
  45: { icon: "🌫️", text: "foggy" },
  48: { icon: "🌫️", text: "foggy" },
  51: { icon: "🌦️", text: "light drizzle" },
  53: { icon: "🌦️", text: "drizzle" },
  55: { icon: "🌧️", text: "heavy drizzle" },
  61: { icon: "🌧️", text: "light rain" },
  63: { icon: "🌧️", text: "rain" },
  65: { icon: "🌧️", text: "heavy rain" },
  71: { icon: "🌨️", text: "light snow" },
  73: { icon: "🌨️", text: "snow" },
  75: { icon: "❄️", text: "heavy snow" },
  80: { icon: "🌦️", text: "rain showers" },
  81: { icon: "🌧️", text: "rain showers" },
  82: { icon: "⛈️", text: "violent showers" },
  95: { icon: "⛈️", text: "thunderstorm" },
  96: { icon: "⛈️", text: "thunderstorm, hail
