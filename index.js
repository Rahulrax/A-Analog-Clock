setInterval(() => {

    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrot = 30 * htime + mtime / 2;
    mrot = 6 * mtime;
    srot = 6 * stime;

    hr.style.transform = `rotate(${hrot}deg)`;
    mi.style.transform = `rotate(${mrot}deg)`;
    sc.style.transform = `rotate(${srot}deg)`;
}, 1000);

// setInterval(() => {

    // d = new Date();
    // htime = d.getHours();
    // mtime = d.getminutes();
    // stime = d.getSeconds();
    // hrot = 30 * htime + mtime / 2;
    // mrot = 6 * mtime;
    // srot = 6 * stime;

// }, 1000);