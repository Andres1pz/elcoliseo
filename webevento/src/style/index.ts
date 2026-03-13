export function initCountdown(targetDate: Date) {
    const $days = document.getElementById("days");
    const $hours = document.getElementById("hours");
    const $minutes = document.getElementById("minutes");
    const $seconds = document.getElementById("seconds");

    if (!$days || !$hours || !$minutes || !$seconds) return;

    const pad = (value: number) => String(value).padStart(2, "0");

    let intervalId: number | undefined;

    const update = () => {
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();

        if (diff <= 0) {
            $days.textContent = "00";
            $hours.textContent = "00";
            $minutes.textContent = "00";
            $seconds.textContent = "00";
            if (intervalId) window.clearInterval(intervalId);
            return;
        }

        const secondsTotal = Math.floor(diff / 1000);
        const seconds = secondsTotal % 60;
        const minutesTotal = Math.floor(secondsTotal / 60);
        const minutes = minutesTotal % 60;
        const hoursTotal = Math.floor(minutesTotal / 60);
        const hours = hoursTotal % 24;
        const days = Math.floor(hoursTotal / 24);

        $days.textContent = pad(days);
        $hours.textContent = pad(hours);
        $minutes.textContent = pad(minutes);
        $seconds.textContent = pad(seconds);
    };

    update();
    intervalId = window.setInterval(update, 1000);
}

// ---------- Uso (cambia la fecha al evento que quieras contar) ----------
initCountdown(new Date("2026-07-26T15:00:00"));

const boton = document.getElementById("reglamento") as HTMLAnchorElement;
const alerta = document.getElementById("alerta") as HTMLDivElement;

boton.addEventListener("click", (e) => {
  e.preventDefault();

  alerta.style.display = "block";

  setTimeout(() => {
    alerta.style.display = "none";
  }, 3000);
});

