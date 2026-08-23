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

// Display names/icons for known categories. Any category not listed here
// still works — the filter button just falls back to a capitalized label.
const CATEGORY_META = {
  "experience": { icon: "✨", label: "Experience" },
  "memory": { icon: "📸", label: "Memories" },
  "memories": { icon: "📸", label: "Memories" },
  "travel": { icon: "✈️", label: "Travel" },
  "food": { icon: "🍜", label: "Food" },
  "little-things": { icon: "🌙", label: "Little things" },
  "us": { icon: "❤️", label: "Us" },
  "adventures": { icon: "🎡", label: "Adventures" },
  "future": { icon: "🏠", label: "Future" },
  "silly": { icon: "🤪", label: "Silly" },
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
  setupBucketListFilters();
  renderBucketList("all");

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
/* Uses Open-Meteo (no API key needed, works from static sites).
   We pull weather_code, cloud_cover, AND is_day, then use cloud_cover to refine
   "clear vs cloudy" calls, and is_day to pick sun vs moon icons after dark. */

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
  96: { icon: "⛈️", text: "thunderstorm, hail" },
  99: { icon: "⛈️", text: "thunderstorm, hail" },
};

// Night versions only differ for the "clear to overcast" family — rain, snow,
// storms etc. look the same regardless of time of day.
const WEATHER_CODES_NIGHT = {
  ...WEATHER_CODES_DAY,
  0: { icon: "🌙", text: "clear sky" },
  1: { icon: "🌙", text: "mostly clear" },
  2: { icon: "☁️", text: "partly cloudy" },
  3: { icon: "☁️", text: "overcast" },
};

// Codes 0-3 are the "clear to overcast" family where weather_code alone is
// unreliable — for these, override using the actual cloud_cover percentage.
const CLEAR_TO_OVERCAST_CODES = new Set([0, 1, 2, 3]);

function refineWeather(weatherCode, cloudCover, isDay) {
  const table = isDay ? WEATHER_CODES_DAY : WEATHER_CODES_NIGHT;

  if (!CLEAR_TO_OVERCAST_CODES.has(weatherCode) || typeof cloudCover !== "number") {
    return table[weatherCode] || { icon: "🌡️", text: "unknown" };
  }

  if (isDay) {
    if (cloudCover < 15) return { icon: "☀️", text: "clear sky" };
    if (cloudCover < 40) return { icon: "🌤️", text: "mostly clear" };
    if (cloudCover < 70) return { icon: "⛅", text: "partly cloudy" };
    return { icon: "☁️", text: "cloudy" };
  }

  if (cloudCover < 15) return { icon: "🌙", text: "clear sky" };
  if (cloudCover < 40) return { icon: "🌙", text: "mostly clear" };
  if (cloudCover < 70) return { icon: "☁️", text: "partly cloudy" };
  return { icon: "☁️", text: "cloudy" };
}

async function fetchWeather(key, city) {
  const iconEl = document.getElementById(`weather-icon-${key}`);
  const tempEl = document.getElementById(`weather-temp-${key}`);
  const conditionEl = document.getElementById(`weather-condition-${key}`);

  try {
    const unitParam = CONFIG.tempUnit === "fahrenheit" ? "&temperature_unit=fahrenheit" : "";
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,weather_code,cloud_cover,is_day${unitParam}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("weather request failed");
    const data = await res.json();
    const current = data.current;
    const info = refineWeather(current.weather_code, current.cloud_cover, current.is_day === 1);
    const unitSymbol = CONFIG.tempUnit === "fahrenheit" ? "°F" : "°C";

    iconEl.textContent = info.icon;
    tempEl.textContent = `${Math.round(current.temperature_2m)}${unitSymbol}`;
    conditionEl.textContent = info.text;
  } catch (err) {
    console.error("Weather fetch failed:", err);
    iconEl.textContent = "—";
    tempEl.textContent = "";
    conditionEl.textContent = "weather unavailable";
  }
}

/* ---------- moon phase ----------
   Reference new moon: 2000-01-06 18:14 UTC. Synodic month ~29.53058867 days.
*/
function updateMoon() {
  const synodicMonth = 29.53058867;
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14, 0);
  const now = Date.now();
  const daysSince = (now - knownNewMoon) / (1000 * 60 * 60 * 24);
  const phase = ((daysSince % synodicMonth) + synodicMonth) % synodicMonth;
  const fraction = phase / synodicMonth; // 0 = new, 0.5 = full, 1 = new again

  const label = moonPhaseLabel(fraction);
  document.getElementById("moon-label").textContent = label;
  drawMoon(fraction);
}

function moonPhaseLabel(fraction) {
  if (fraction < 0.03 || fraction > 0.97) return "new moon";
  if (fraction < 0.22) return "waxing crescent";
  if (fraction < 0.28) return "first quarter";
  if (fraction < 0.47) return "waxing gibbous";
  if (fraction < 0.53) return "full moon";
  if (fraction < 0.72) return "waning gibbous";
  if (fraction < 0.78) return "last quarter";
  return "waning crescent";
}

function drawMoon(fraction) {
  // Draws the dark shadow shape over the moon circle to match its current phase.
  const path = document.getElementById("moon-shadow");
  const r = 56;
  const cx = 60;
  const cy = 60;

  const angle = fraction * 2 * Math.PI;
  const rx = Math.abs(Math.cos(angle)) * r; // terminator ellipse width, 0 (quarter) to r (new/full)

  // Which side of the disk is permanently in shadow for this half of the cycle:
  // waxing (fraction < 0.5) -> shadow anchored on the left; waning -> anchored on the right.
  const limbSweep = fraction < 0.5 ? 1 : 0;

  // Whether the terminator curve bulges toward the anchored shadow side (gibbous,
  // carving a thin dark crescent out of it) or away from it (crescent, most of the disk dark).
  const terminatorSweep = (fraction % 0.5) < 0.25 ? 1 : 0;

  const d = `M ${cx} ${cy - r}
    A ${rx} ${r} 0 0 ${terminatorSweep} ${cx} ${cy + r}
    A ${r} ${r} 0 0 ${limbSweep} ${cx} ${cy - r} Z`;

  path.setAttribute("d", d);
}

/* ---------- distance ---------- */
function renderDistance() {
  const unit = CONFIG.distanceUnit === "mi" ? "mi" : "km";
  document.getElementById("distance-figure").textContent =
    `${CONFIG.distanceValue.toLocaleString()} ${unit} apart`;
}

/* ---------- gallery ---------- */
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";

  CONFIG.gallery.forEach((item) => {
    const el = document.createElement("div");
    el.className = "gallery-item";

    if (item.src) {
      el.innerHTML = `
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.caption || "")}">
        ${item.caption ? `<p class="gallery-item__caption">${escapeHtml(item.caption)}</p>` : ""}
      `;
    } else {
      el.innerHTML = `<p class="gallery-item__placeholder">${escapeHtml(item.caption || "add a photo")}</p>`;
    }

    grid.appendChild(el);
  });
}

/* ---------- playlist ---------- */
function renderPlaylist() {
  const container = document.getElementById("playlist-embed");

  if (!CONFIG.spotifyEmbedUrl) {
    container.innerHTML = `<p class="playlist-embed__placeholder">add a spotifyEmbedUrl in the config to show your playlist here</p>`;
    return;
  }

  container.innerHTML = `
    <iframe
      src="${escapeHtml(CONFIG.spotifyEmbedUrl)}"
      width="100%"
      height="352"
      frameborder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  `;
}

/* ---------- flip note cards ---------- */
function renderNotes() {
  const grid = document.getElementById("notes-grid");
  grid.innerHTML = "";

  CONFIG.notes.forEach((note) => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Tap to reveal");

    card.innerHTML = `
      <div class="note-card__inner">
        <div class="note-card__face note-card__face--front">${escapeHtml(note.front)}</div>
        <div class="note-card__face note-card__face--back">${escapeHtml(note.back)}</div>
      </div>
    `;

    const toggle = () => card.classList.toggle("flipped");
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    grid.appendChild(card);
  });
}

/* ---------- hug button ---------- */
function setupHugButton() {
  const button = document.getElementById("hug-button");
  const message = document.getElementById("hug-message");

  button.addEventListener("click", () => {
    const pick = CONFIG.hugMessages[Math.floor(Math.random() * CONFIG.hugMessages.length)];
    message.textContent = pick;
  });
}

/* ---------- one year letters ---------- */
let lettersUnlockedTransitioned = false;

function getOneYearUnlockDate() {
  return new Date(ONE_YEAR_UNLOCK_ISO);
}

function isOneYearUnlocked() {
  return Date.now() >= getOneYearUnlockDate().getTime();
}

function formatUnlockDateLabel() {
  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(getOneYearUnlockDate());
  return `Unlocks ${formatted}`;
}

function setupOneYearLetters() {
  document.getElementById("letters-unlock-date").textContent = formatUnlockDateLabel();

  if (isOneYearUnlocked()) {
    lettersUnlockedTransitioned = true;
    showLettersUnlocked();
  } else {
    showLettersLocked();
  }

  document.getElementById("envelope-locked-a").addEventListener("click", () => shakeLockedEnvelope("envelope-locked-a"));
  document.getElementById("envelope-locked-b").addEventListener("click", () => shakeLockedEnvelope("envelope-locked-b"));
  document.getElementById("envelope-unlocked-a").addEventListener("click", () => openLetter(ONE_YEAR_LETTER_A));
  document.getElementById("envelope-unlocked-b").addEventListener("click", () => openLetter(ONE_YEAR_LETTER_B));
  document.getElementById("letter-close").addEventListener("click", closeLetter);
  document.getElementById("letter-overlay").addEventListener("click", (e) => {
    if (e.target.id === "letter-overlay") closeLetter();
  });
}

function shakeLockedEnvelope(id) {
  const el = document.getElementById(id);
  el.classList.remove("shake");
  void el.offsetWidth; // force reflow so the shake animation can restart on repeat clicks
  el.classList.add("shake");
  document.getElementById("letters-shake-message").textContent = "Not yet. Just a little longer. ❤️";
}

function showLettersLocked() {
  document.getElementById("letters-locked").style.display = "block";
  document.getElementById("letters-unlocked").style.display = "none";
}

function showLettersUnlocked() {
  document.getElementById("letters-locked").style.display = "none";
  document.getElementById("letters-unlocked").style.display = "block";
}

function updateLettersCountdown() {
  if (isOneYearUnlocked()) {
    if (!lettersUnlockedTransitioned) {
      lettersUnlockedTransitioned = true;
      showLettersUnlocked();
    }
    return;
  }

  const diff = getOneYearUnlockDate().getTime() - Date.now();
  const pad = (n) => String(n).padStart(2, "0");
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  document.getElementById("letters-cd-days").textContent = pad(days);
  document.getElementById("letters-cd-hours").textContent = pad(hours);
  document.getElementById("letters-cd-mins").textContent = pad(mins);
  document.getElementById("letters-cd-secs").textContent = pad(secs);
}

function openLetter(text) {
  const overlay = document.getElementById("letter-overlay");
  document.getElementById("letter-text").textContent = text.trim();
  overlay.classList.add("open");
}

function closeLetter() {
  document.getElementById("letter-overlay").classList.remove("open");
}

/* ---------- bucket list (checklist) ---------- */
const BUCKET_STORAGE_KEY = "bucket-list-completed-v1";
let bucketActiveFilter = "all";

function loadCompletedIds() {
  try {
    const raw = localStorage.getItem(BUCKET_STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) {
    return new Set();
  }
}

function saveCompletedIds(set) {
  try {
    localStorage.setItem(BUCKET_STORAGE_KEY, JSON.stringify([...set]));
  } catch (e) {
    console.warn("Could not save bucket list progress:", e);
  }
}

let bucketCompletedIds = loadCompletedIds();

function isItemCompleted(item) {
  return Boolean(item.completed) || bucketCompletedIds.has(item.id);
}

function toggleItemDone(id) {
  if (bucketCompletedIds.has(id)) {
    bucketCompletedIds.delete(id);
  } else {
    bucketCompletedIds.add(id);
  }
  saveCompletedIds(bucketCompletedIds);
  renderBucketList(bucketActiveFilter);
}

function capitalizeCategory(s) {
  if (!s) return "";
  const spaced = s.replace(/-/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function setupBucketListFilters() {
  const container = document.getElementById("bucket-filters");
  const categories = [...new Set(BUCKET_LIST.map((i) => i.category))];

  const buttons = [
    { key: "all", label: "All" },
    ...categories.map((c) => ({
      key: c,
      label: CATEGORY_META[c] ? `${CATEGORY_META[c].icon} ${CATEGORY_META[c].label}` : capitalizeCategory(c),
    })),
  ];

  container.innerHTML = "";
  buttons.forEach((b) => {
    const btn = document.createElement("button");
    btn.className = "bucket-filter";
    btn.type = "button";
    btn.textContent = b.label;
    btn.dataset.key = b.key;
    btn.setAttribute("aria-pressed", b.key === bucketActiveFilter ? "true" : "false");
    btn.addEventListener("click", () => {
      bucketActiveFilter = b.key;
      container.querySelectorAll(".bucket-filter").forEach((el) => el.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      renderBucketList(bucketActiveFilter);
    });
    container.appendChild(btn);
  });
}

function renderBucketList(filter) {
  const list = document.getElementById("bucket-grid");
  list.innerHTML = "";

  if (BUCKET_LIST.length === 0) {
    list.innerHTML = `<p class="bucket-empty">Nothing here yet.<br>Maybe we should add something.</p>`;
    updateBucketProgress();
    return;
  }

  const items = filter === "all" ? BUCKET_LIST : BUCKET_LIST.filter((i) => i.category === filter);

  if (items.length === 0) {
    list.innerHTML = `<p class="bucket-empty">Nothing here yet.<br>Maybe we should add something.</p>`;
    updateBucketProgress();
    return;
  }

  items.forEach((item) => {
    const completed = isItemCompleted(item);
    const row = document.createElement("div");
    row.className = "bucket-row" + (completed ? " bucket-row--completed" : "");
    row.id = `bucket-row-${item.id}`;

    let metaHtml = "";
    if (item.location || item.date) {
      metaHtml = `<div class="bucket-row__meta">
        ${item.location ? `<span>📍 ${escapeHtml(item.location)}</span>` : ""}
        ${item.date ? `<span>📅 ${escapeHtml(item.date)}</span>` : ""}
      </div>`;
    }

    const descriptionText = completed && item.completedNote ? item.completedNote : item.description;
    const catMeta = CATEGORY_META[item.category];
    const chipLabel = catMeta ? `${catMeta.icon} ${catMeta.label}` : capitalizeCategory(item.category);

    if (item.icon) {
      const iconEl = document.createElement("span");
      iconEl.className = "bucket-row__icon";
      iconEl.textContent = item.icon;
      row.appendChild(iconEl);
    }

    const check = document.createElement("button");
    check.className = "bucket-check";
    check.type = "button";
    check.setAttribute("aria-pressed", completed ? "true" : "false");
    check.setAttribute("aria-label", completed ? `Mark "${item.title}" as not done` : `Mark "${item.title}" as done`);
    check.innerHTML = completed ? "✓" : "";
    check.addEventListener("click", () => toggleItemDone(item.id));
    row.appendChild(check);

    const textWrap = document.createElement("div");
    textWrap.className = "bucket-row__text";
    textWrap.innerHTML = `
      <div class="bucket-row__top">
        <p class="bucket-row__title">${escapeHtml(item.title)}</p>
        ${chipLabel ? `<span class="bucket-row__chip">${escapeHtml(chipLabel)}</span>` : ""}
      </div>
      <p class="bucket-row__desc">${escapeHtml(descriptionText || "")}</p>
      ${metaHtml}
    `;
    row.appendChild(textWrap);

    list.appendChild(row);
  });

  updateBucketProgress();
}

function updateBucketProgress() {
  const total = BUCKET_LIST.length;
  const completed = BUCKET_LIST.filter(isItemCompleted).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  document.getElementById("bucket-progress-label").textContent =
    total === 0 ? "Our little list" : `Our little list — ${completed} of ${total} completed`;
  document.getElementById("bucket-progress-fill").style.width = `${percent}%`;
  document.getElementById("bucket-progress-percent").textContent = total === 0 ? "" : `${percent}% complete`;

  const banner = document.getElementById("bucket-all-done");
  if (banner) {
    banner.style.display = total > 0 && completed === total ? "block" : "none";
  }
}

/* ---------- utils ---------- */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
