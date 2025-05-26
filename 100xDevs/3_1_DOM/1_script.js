// Updating Elements

let ctr = 0;
function callback() {
    const el = document.querySelectorAll("h2")[1]
    el.innerHTML = ctr;
    ctr = ctr + 1;
}

// will call callback every 1 second.
setInterval(callback, 1000);