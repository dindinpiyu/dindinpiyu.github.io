
/* =========================================================================
   CONFIG — this is the only part you need to touch.
   Fill in your own names, dates, cities, and messages below.
   ========================================================================= */

const CONFIG = {
  // Names shown in the hero
  nameA: "dindin",
  nameB: "piyu",

  // The date you two got together (2025-12-24T21:31:00) — used for the day counter
  startDate: "2025-12-24T00:00:00",
   
  // Two cities, with IANA timezone names and coordinates (for the clocks + distance)
  cityA: {
    label: "Noida",
    timeZone: "Asia/Kolkata",
    lat: 24.33,
    lon: 93.68,
  },
  cityB: {
    label: "Noida",
    timeZone: "Asia/Kolkata",
    lat: 28.6139,
    lon: 77.2090,

  // Temperature unit: "celsius" or "fahrenheit"
  tempUnit: "celsius",

  // Distance units: "km" or "mi"
  distanceUnit: "km",

  // Gallery photos — add your images to the repo (e.g. in an /images folder) and
  // reference them here. If "src" is left empty, a placeholder card is shown instead.
  gallery: [
    { src: "", caption: "add your photo here" },
    { src: "", caption: "add your photo here" },
    { src: "", caption: "add your photo here" },
    { src: "", caption: "add your photo here" },
  ],

  // Spotify playlist embed. Open your playlist in Spotify -> Share -> Embed playlist,
  // then paste just the src URL from the iframe here (looks like the example below).
  spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator",

  // Timeline of memories — add as many as you like, in order
  timeline: [
    { date: "June 2023", title: "The first message", text: "You still have the screenshot of this somewhere." },
    { date: "August 2023", title: "First video call", text: "Four hours that felt like twenty minutes." },
    { date: "March 2024", title: "First visit", text: "Airport arrivals hall, running the last few steps." },
    { date: "Today", title: "Still going", text: "One more day added to the counter above." },
  ],

  // Flip cards — front is the prompt, back is the reveal
  notes: [
    { front: "why you", back: "because you make ordinary days sound interesting on the phone." },
    { front: "a promise", back: "every distance has an end date, even when it doesn't feel like it." },
    { front: "a fact", back: "you are objectively very easy to love. this is not up for debate." },
    { front: "a small thing", back: "I look at the moon and think of you more than I'll admit." },
  ],

  // Messages shown after pressing the hug button (one is picked at random)
  hugMessages: [
    "sent. it'll get there before the wifi does.",
    "consider yourself hugged, wherever you are.",
    "one hug, deployed across the distance.",
    "there. a little closer now.",
  ],
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
  renderTimeline();
  renderNotes();
  renderGallery();
  renderPlaylist();
  setupHugButton();
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
}

/* ---------- day counter ---------- */
function updateDayCounter() {
  const start = new Date(CONFIG.startDate);
  const now = new Date();
  const diffMs = now - start;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  document.getElementById("days-together").textContent = Math.max(days, 0).toLocaleString();
}

/* ---------- weather ---------- */
/* Uses Open-Meteo (no API key needed, works from static sites). */
const WEATHER_CODES = {
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

async function fetchWeather(key, city) {
  const iconEl = document.getElementById(`weather-icon-${key}`);
  const tempEl = document.getElementById(`weather-temp-${key}`);
  const conditionEl = document.getElementById(`weather-condition-${key}`);

  try {
    const unitParam = CONFIG.tempUnit === "fahrenheit" ? "&temperature_unit=fahrenheit" : "";
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true${unitParam}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("weather request failed");
    const data = await res.json();
    const current = data.current_weather;
    const info = WEATHER_CODES[current.weathercode] || { icon: "🌡️", text: "unknown" };
    const unitSymbol = CONFIG.tempUnit === "fahrenheit" ? "°F" : "°C";

    iconEl.textContent = info.icon;
    tempEl.textContent = `${Math.round(current.temperature)}${unitSymbol}`;
    conditionEl.textContent = info.text;
  } catch (err) {
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
  // Draws a shadow ellipse over the moon circle to approximate its phase.
  const path = document.getElementById("moon-shadow");
  const r = 56;
  const cx = 60;
  const cy = 60;

  // angle 0 = new moon (fully shadowed), 0.5 = full moon (no shadow)
  const angle = fraction * 2 * Math.PI;
  const terminatorX = Math.cos(angle) * r;

  const waxing = fraction < 0.5;
  let d;

  if (fraction < 0.5) {
    // waxing: shadow covers the left side, shrinking
    const sweep = waxing ? 1 : 0;
    d = `M ${cx} ${cy - r}
        A ${Math.abs(terminatorX)} ${r} 0 0 ${terminatorX >= 0 ? 1 : 0} ${cx} ${cy + r}
        A ${r} ${r} 0 0 0 ${cx} ${cy - r} Z`;
  } else {
    d = `M ${cx} ${cy - r}
        A ${Math.abs(terminatorX)} ${r} 0 0 ${terminatorX >= 0 ? 0 : 1} ${cx} ${cy + r}
        A ${r} ${r} 0 0 1 ${cx} ${cy - r} Z`;
  }

  path.setAttribute("d", d);
}

/* ---------- distance ---------- */
function renderDistance() {
  const { lat: lat1, lon: lon1 } = CONFIG.cityA;
  const { lat: lat2, lon: lon2 } = CONFIG.cityB;
  const R_KM = 6371;
  const toRad = (deg) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const km = R_KM * c;

  const value = CONFIG.distanceUnit === "mi" ? km * 0.621371 : km;
  const unit = CONFIG.distanceUnit === "mi" ? "mi" : "km";

  document.getElementById("distance-figure").textContent =
    `${Math.round(value).toLocaleString()} ${unit} apart`;
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

/* ---------- timeline ---------- */
function renderTimeline() {
  const container = document.getElementById("timeline");
  container.innerHTML = "";

  CONFIG.timeline.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <p class="timeline-item__date">${escapeHtml(item.date)}</p>
      <p class="timeline-item__title">${escapeHtml(item.title)}</p>
      <p class="timeline-item__text">${escapeHtml(item.text)}</p>
    `;
    container.appendChild(el);
  });
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

/* ---------- utils ---------- */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
