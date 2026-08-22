/* =========================================================================
   CONFIG — this is the only part you need to touch.
   Fill in your own names, dates, cities, and messages below.
   ========================================================================= */

const CONFIG = {
  // Names shown in the hero
  nameA: "Her",
  nameB: "Him",

  // The date you two got together (YYYY-MM-DDTHH:mm:ss) — used for the day counter
  startDate: "2023-06-01T00:00:00",

  // The next time you'll physically be together (leave in the future!)
  nextVisit: "2026-12-20T00:00:00",

  // Two cities, with IANA timezone names and coordinates (for the clocks + distance)
  cityA: {
    label: "City A",
    timeZone: "America/New_York",
    lat: 40.7128,
    lon: -74.0060,
  },
  cityB: {
    label: "City B",
    timeZone: "Asia/Kolkata",
    lat: 28.6139,
    lon: 77.2090,
  },

  // Distance units: "km" or "mi"
  distanceUnit: "km",

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
  setupHugButton();

  tick();
  setInterval(tick, 1000);
});

function tick() {
  updateDayCounter();
  updateClocks();
  updateMoon();
  updateCountdown();
}

/* ---------- day counter ---------- */
function updateDayCounter() {
  const start = new Date(CONFIG.startDate);
  const now = new Date();
  const diffMs = now - start;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  document.getElementById("days-together").textContent = Math.max(days, 0).toLocaleString();
}

/* ---------- clocks ---------- */
function updateClocks() {
  const now = new Date();
  const fmt = (tz) =>
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: tz,
    }).format(now);

  document.getElementById("time-a").textContent = fmt(CONFIG.cityA.timeZone);
  document.getElementById("time-b").textContent = fmt(CONFIG.cityB.timeZone);
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

/* ---------- countdown ---------- */
function updateCountdown() {
  const target = new Date(CONFIG.nextVisit).getTime();
  const now = Date.now();
  const diff = target - now;

  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    mins: document.getElementById("cd-mins"),
    secs: document.getElementById("cd-secs"),
  };

  if (diff <= 0) {
    els.days.textContent = "00";
    els.hours.textContent = "00";
    els.mins.textContent = "00";
    els.secs.textContent = "00";
    document.getElementById("countdown-title").textContent = "You made it";
    return;
  }

  const pad = (n) => String(n).padStart(2, "0");
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  els.days.textContent = pad(days);
  els.hours.textContent = pad(hours);
  els.mins.textContent = pad(mins);
  els.secs.textContent = pad(secs);

  document.getElementById("countdown-date").textContent = new Date(
    CONFIG.nextVisit
  ).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
