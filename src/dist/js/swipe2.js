var p1 = document.getElementsByClassName('page1');
var p2 = document.getElementsByClassName('page2');

console.log(p1[0]);

var startingX;


function p1touchStart_1(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_1(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[0].style.left = '-' + change + 'px';
    p2[0].style.display = 'flex';
    p2[0].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_1(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[0].style.left = 0;
        p2[0].style.left = '100%';
        p2[0].style.display = 'none';
    } else {
        p1[0].style.transition = 'all .3s';
        p2[0].style.transition = 'all .3s';
        p1[0].style.left = '-100%';
        p2[0].style.left = '0';
        p2[0].style.display = 'flex';
    }
};

function p2touchStart_1(evt) {
    startingX = evt.touches[0].clientX;
    p1[0].style.transition = '';
    p2[0].style.transition = '';
    p1[0].style.display = "none";
};

function p2touchMove_1(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[0].style.display = 'flex';
    p1[0].style.left = (change - screen.width) + 'px';
    p2[0].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_1(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[0].style.left = '-100%';
        p1[0].style.display = 'none';
        p2[0].style.left = '0';
    } else {
        p1[0].style.transition = 'all .3s';
        p2[0].style.transition = 'all .3s';
        p1[0].style.left = '0';
        p2[0].style.left = '100%';
        // p2.style.display = 'none';
    }
};



// -------------------------------------------

function p1touchStart_2(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_2(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[1].style.left = '-' + change + 'px';
    p2[1].style.display = 'flex';
    p2[1].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_2(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[1].style.left = 0;
        p2[1].style.left = '100%';
        p2[1].style.display = 'none';
    } else {
        p1[1].style.transition = 'all .3s';
        p2[1].style.transition = 'all .3s';
        p1[1].style.left = '-100%';
        p2[1].style.left = '0';
        p2[1].style.display = 'flex';
    }
};

function p2touchStart_2(evt) {
    startingX = evt.touches[0].clientX;
    p1[1].style.transition = '';
    p2[1].style.transition = '';
    p1[1].style.display = "none";
};

function p2touchMove_2(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[1].style.display = 'flex';
    p1[1].style.left = (change - screen.width) + 'px';
    p2[1].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_2(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[1].style.left = '-100%';
        p1[1].style.display = 'none';
        p2[1].style.left = '0';
    } else {
        p1[1].style.transition = 'all .3s';
        p2[1].style.transition = 'all .3s';
        p1[1].style.left = '0';
        p2[1].style.left = '100%';
        // p2.style.display = 'none';
    }
};



// -------------------------------------------

function p1touchStart_3(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_3(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[2].style.left = '-' + change + 'px';
    p2[2].style.display = 'flex';
    p2[2].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_3(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[2].style.left = 0;
        p2[2].style.left = '100%';
        p2[2].style.display = 'none';
    } else {
        p1[2].style.transition = 'all .3s';
        p2[2].style.transition = 'all .3s';
        p1[2].style.left = '-100%';
        p2[2].style.left = '0';
        p2[2].style.display = 'flex';
    }
};

function p2touchStart_3(evt) {
    startingX = evt.touches[0].clientX;
    p1[2].style.transition = '';
    p2[2].style.transition = '';
    p1[2].style.display = "none";
};

function p2touchMove_3(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[2].style.display = 'flex';
    p1[2].style.left = (change - screen.width) + 'px';
    p2[2].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_3(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[2].style.left = '-100%';
        p1[2].style.display = 'none';
        p2[2].style.left = '0';
    } else {
        p1[2].style.transition = 'all .3s';
        p2[2].style.transition = 'all .3s';
        p1[2].style.left = '0';
        p2[2].style.left = '100%';
        // p2.style.display = 'none';
    }
};



// -------------------------------------------

function p1touchStart_3(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_3(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[2].style.left = '-' + change + 'px';
    p2[2].style.display = 'flex';
    p2[2].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_3(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[2].style.left = 0;
        p2[2].style.left = '100%';
        p2[2].style.display = 'none';
    } else {
        p1[2].style.transition = 'all .3s';
        p2[2].style.transition = 'all .3s';
        p1[2].style.left = '-100%';
        p2[2].style.left = '0';
        p2[2].style.display = 'flex';
    }
};

function p2touchStart_3(evt) {
    startingX = evt.touches[0].clientX;
    p1[2].style.transition = '';
    p2[2].style.transition = '';
    p1[2].style.display = "none";
};

function p2touchMove_3(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[2].style.display = 'flex';
    p1[2].style.left = (change - screen.width) + 'px';
    p2[2].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_3(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[2].style.left = '-100%';
        p1[2].style.display = 'none';
        p2[2].style.left = '0';
    } else {
        p1[2].style.transition = 'all .3s';
        p2[2].style.transition = 'all .3s';
        p1[2].style.left = '0';
        p2[2].style.left = '100%';
        // p2.style.display = 'none';
    }
};



// -------------------------------------------

function p1touchStart_4(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_4(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[3].style.left = '-' + change + 'px';
    p2[3].style.display = 'flex';
    p2[3].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_4(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[3].style.left = 0;
        p2[3].style.left = '100%';
        p2[3].style.display = 'none';
    } else {
        p1[3].style.transition = 'all .3s';
        p2[3].style.transition = 'all .3s';
        p1[3].style.left = '-100%';
        p2[3].style.left = '0';
        p2[3].style.display = 'flex';
    }
};

function p2touchStart_4(evt) {
    startingX = evt.touches[0].clientX;
    p1[3].style.transition = '';
    p2[3].style.transition = '';
    p1[3].style.display = "none";
};

function p2touchMove_4(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[3].style.display = 'flex';
    p1[3].style.left = (change - screen.width) + 'px';
    p2[3].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_4(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[3].style.left = '-100%';
        p1[3].style.display = 'none';
        p2[3].style.left = '0';
    } else {
        p1[3].style.transition = 'all .3s';
        p2[3].style.transition = 'all .3s';
        p1[3].style.left = '0';
        p2[3].style.left = '100%';
        // p2.style.display = 'none';
    }
};



// -------------------------------------------

function p1touchStart_4(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_4(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[3].style.left = '-' + change + 'px';
    p2[3].style.display = 'flex';
    p2[3].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_4(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[3].style.left = 0;
        p2[3].style.left = '100%';
        p2[3].style.display = 'none';
    } else {
        p1[3].style.transition = 'all .3s';
        p2[3].style.transition = 'all .3s';
        p1[3].style.left = '-100%';
        p2[3].style.left = '0';
        p2[3].style.display = 'flex';
    }
};

function p2touchStart_4(evt) {
    startingX = evt.touches[0].clientX;
    p1[3].style.transition = '';
    p2[3].style.transition = '';
    p1[3].style.display = "none";
};

function p2touchMove_4(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[3].style.display = 'flex';
    p1[3].style.left = (change - screen.width) + 'px';
    p2[3].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_4(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[3].style.left = '-100%';
        p1[3].style.display = 'none';
        p2[3].style.left = '0';
    } else {
        p1[3].style.transition = 'all .3s';
        p2[3].style.transition = 'all .3s';
        p1[3].style.left = '0';
        p2[3].style.left = '100%';
        // p2.style.display = 'none';
    }
};



// -------------------------------------------

function p1touchStart_5(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_5(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[4].style.left = '-' + change + 'px';
    p2[4].style.display = 'flex';
    p2[4].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_5(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[4].style.left = 0;
        p2[4].style.left = '100%';
        p2[4].style.display = 'none';
    } else {
        p1[4].style.transition = 'all .3s';
        p2[4].style.transition = 'all .3s';
        p1[4].style.left = '-100%';
        p2[4].style.left = '0';
        p2[4].style.display = 'flex';
    }
};

function p2touchStart_5(evt) {
    startingX = evt.touches[0].clientX;
    p1[4].style.transition = '';
    p2[4].style.transition = '';
    p1[4].style.display = "none";
};

function p2touchMove_5(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[4].style.display = 'flex';
    p1[4].style.left = (change - screen.width) + 'px';
    p2[4].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_5(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[4].style.left = '-100%';
        p1[4].style.display = 'none';
        p2[4].style.left = '0';
    } else {
        p1[4].style.transition = 'all .3s';
        p2[4].style.transition = 'all .3s';
        p1[4].style.left = '0';
        p2[4].style.left = '100%';
        // p2.style.display = 'none';
    }
};

// -------------------------------------------

function p1touchStart_6(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_6(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[5].style.left = '-' + change + 'px';
    p2[5].style.display = 'flex';
    p2[5].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_6(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[5].style.left = 0;
        p2[5].style.left = '100%';
        p2[5].style.display = 'none';
    } else {
        p1[5].style.transition = 'all .3s';
        p2[5].style.transition = 'all .3s';
        p1[5].style.left = '-100%';
        p2[5].style.left = '0';
        p2[5].style.display = 'flex';
    }
};

function p2touchStart_6(evt) {
    startingX = evt.touches[0].clientX;
    p1[5].style.transition = '';
    p2[5].style.transition = '';
    p1[5].style.display = "none";
};

function p2touchMove_6(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[5].style.display = 'flex';
    p1[5].style.left = (change - screen.width) + 'px';
    p2[5].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_6(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[5].style.left = '-100%';
        p1[5].style.display = 'none';
        p2[5].style.left = '0';
    } else {
        p1[5].style.transition = 'all .3s';
        p2[5].style.transition = 'all .3s';
        p1[5].style.left = '0';
        p2[5].style.left = '100%';
        // p2.style.display = 'none';
    }
};

// -------------------------------------------

function p1touchStart_7(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_7(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[6].style.left = '-' + change + 'px';
    p2[6].style.display = 'flex';
    p2[6].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_7(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[6].style.left = 0;
        p2[6].style.left = '100%';
        p2[6].style.display = 'none';
    } else {
        p1[6].style.transition = 'all .3s';
        p2[6].style.transition = 'all .3s';
        p1[6].style.left = '-100%';
        p2[6].style.left = '0';
        p2[6].style.display = 'flex';
    }
};

function p2touchStart_7(evt) {
    startingX = evt.touches[0].clientX;
    p1[6].style.transition = '';
    p2[6].style.transition = '';
    p1[6].style.display = "none";
};

function p2touchMove_7(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[6].style.display = 'flex';
    p1[6].style.left = (change - screen.width) + 'px';
    p2[6].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_7(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[6].style.left = '-100%';
        p1[6].style.display = 'none';
        p2[6].style.left = '0';
    } else {
        p1[6].style.transition = 'all .3s';
        p2[6].style.transition = 'all .3s';
        p1[6].style.left = '0';
        p2[6].style.left = '100%';
        // p2.style.display = 'none';
    }
};

// -------------------------------------------

function p1touchStart_8(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_8(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[7].style.left = '-' + change + 'px';
    p2[7].style.display = 'flex';
    p2[7].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_8(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[7].style.left = 0;
        p2[7].style.left = '100%';
        p2[7].style.display = 'none';
    } else {
        p1[7].style.transition = 'all .3s';
        p2[7].style.transition = 'all .3s';
        p1[7].style.left = '-100%';
        p2[7].style.left = '0';
        p2[7].style.display = 'flex';
    }
};

function p2touchStart_8(evt) {
    startingX = evt.touches[0].clientX;
    p1[7].style.transition = '';
    p2[7].style.transition = '';
    p1[7].style.display = "none";
};

function p2touchMove_8(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[7].style.display = 'flex';
    p1[7].style.left = (change - screen.width) + 'px';
    p2[7].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_8(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[7].style.left = '-100%';
        p1[7].style.display = 'none';
        p2[7].style.left = '0';
    } else {
        p1[7].style.transition = 'all .3s';
        p2[7].style.transition = 'all .3s';
        p1[7].style.left = '0';
        p2[7].style.left = '100%';
        // p2.style.display = 'none';
    }
};

// -------------------------------------------

function p1touchStart_9(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_9(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[8].style.left = '-' + change + 'px';
    p2[8].style.display = 'flex';
    p2[8].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_9(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[8].style.left = 0;
        p2[8].style.left = '100%';
        p2[8].style.display = 'none';
    } else {
        p1[8].style.transition = 'all .3s';
        p2[8].style.transition = 'all .3s';
        p1[8].style.left = '-100%';
        p2[8].style.left = '0';
        p2[8].style.display = 'flex';
    }
};

function p2touchStart_9(evt) {
    startingX = evt.touches[0].clientX;
    p1[8].style.transition = '';
    p2[8].style.transition = '';
    p1[8].style.display = "none";
};

function p2touchMove_9(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[8].style.display = 'flex';
    p1[8].style.left = (change - screen.width) + 'px';
    p2[8].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_9(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[8].style.left = '-100%';
        p1[8].style.display = 'none';
        p2[8].style.left = '0';
    } else {
        p1[8].style.transition = 'all .3s';
        p2[8].style.transition = 'all .3s';
        p1[8].style.left = '0';
        p2[8].style.left = '100%';
        // p2.style.display = 'none';
    }
};

// -------------------------------------------

function p1touchStart_10(evt) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove_10(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1[9].style.left = '-' + change + 'px';
    p2[9].style.display = 'flex';
    p2[9].style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd_10(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1[9].style.left = 0;
        p2[9].style.left = '100%';
        p2[9].style.display = 'none';
    } else {
        p1[9].style.transition = 'all .3s';
        p2[9].style.transition = 'all .3s';
        p1[9].style.left = '-100%';
        p2[9].style.left = '0';
        p2[9].style.display = 'flex';
    }
};

function p2touchStart_10(evt) {
    startingX = evt.touches[0].clientX;
    p1[9].style.transition = '';
    p2[9].style.transition = '';
    p1[9].style.display = "none";
};

function p2touchMove_10(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1[9].style.display = 'flex';
    p1[9].style.left = (change - screen.width) + 'px';
    p2[9].style.left = change + 'px';
    evt.preventDefault();
};

function p2touchEnd_10(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1[9].style.left = '-100%';
        p1[9].style.display = 'none';
        p2[9].style.left = '0';
    } else {
        p1[9].style.transition = 'all .3s';
        p2[9].style.transition = 'all .3s';
        p1[9].style.left = '0';
        p2[9].style.left = '100%';
        // p2.style.display = 'none';
    }
};