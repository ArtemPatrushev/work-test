'use strict';

window.addEventListener('load', () => {
    const banner = document.querySelector('.request_timer-item');
    if (banner !== undefined) {
        let countdown = 30 * 60 * 1000;
        let timerId = setInterval(function () {
            countdown -= 1000;
            let min = Math.floor(countdown / (60 * 1000));
            let sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);

            if (countdown <= 0) {
                alert("30 min!");
                clearInterval(timerId);
            } else {
                banner.innerHTML = `${min} : ${sec}`;
            }

        }, 1000);
    }
});