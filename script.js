* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    overflow: hidden;
}

.desktop {
    width: 100vw;
    height: 100vh;

    background:
        linear-gradient(
            rgba(20, 10, 30, 0.45),
            rgba(20, 10, 30, 0.45)
        ),
        linear-gradient(135deg, #ff758c, #ff7eb3, #8e54e9);

    color: white;
    position: relative;
}

/* Welcome text */

.welcome {
    position: absolute;
    top: 30px;
    left: 40px;
}

.welcome h1 {
    margin: 0;
    font-size: 36px;
}

.welcome p {
    margin-top: 8px;
    opacity: 0.8;
}

/* Apps */

.apps {
    position: absolute;
    top: 150px;
    left: 40px;

    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 30px;
}

.app {
    width: 90px;
    padding: 10px;

    text-align: center;

    border-radius: 12px;

    cursor: pointer;

    transition: 0.2s;
}

.app:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: scale(1.05);
}

.icon {
    font-size: 45px;
}

.app span {
    display: block;
    margin-top: 7px;
    font-size: 14px;
}

/* Window */

.window {
    display: none;

    position: absolute;

    width: 500px;
    max-width: 90%;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background: rgba(255, 255, 255, 0.96);

    color: #333;

    border-radius: 15px;

    overflow: hidden;

    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}

.window-header {
    height: 50px;

    background: #ff5c8a;

    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 15px;

    font-weight: bold;
}

.window-header button {
    border: none;

    background: rgba(255,255,255,0.2);

    color: white;

    width: 30px;
    height: 30px;

    border-radius: 50%;

    cursor: pointer;
}

.window-content {
    padding: 30px;

    min-height: 250px;
}

/* Taskbar */

.taskbar {
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 55px;

    background: rgba(20, 10, 30, 0.65);

    backdrop-filter: blur(10px);

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 20px;
}

.start {
    font-size: 25px;
}

#clock {
    font-size: 14px;
}
function updateDate() {

    const now = new Date();

    document.getElementById("date").textContent =
        now.toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric"
        });

}

updateDate();
