var time_elapsed = 0,
    colors_used = [],
    time_per_interval = 1000,
    total_time = 10000,
    testing = false,
    found_repeat = 0,
    found_unique = 0;

if (testing) {
    time_per_interval = 100; // Speed up when testing
}

function calc_color() {
    var r, g, b, rgb;

    r = parseInt(Math.random() * 255);
    g = parseInt(Math.random() * 255);
    b = parseInt(Math.random() * 255);

    if (testing) {
        r = Math.floor((r) / 50) * 50;
        g = Math.floor((g) / 50) * 50;
        b = Math.floor((b) / 50) * 50;
        window.console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
    }

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

var timer_id = window.setInterval(function() {
    var r, // int value of red
        g, // int value of green
        b, // int value of blue
        rgb = null; // string of RGB value

    if (time_elapsed >= total_time) {
        window.clearInterval(timer_id); // or whatever that function is called
        window.console.log("repeats/uniques @ total: " + found_repeat + "/" + found_unique + ' @ ' + (found_repeat + found_unique));
        return;
    }

    time_elapsed += time_per_interval; // Add time to total time elapsed

    do {
        if (rgb !== null) {
            // This isn't your first pass, so you found a color you already used.
          found_repeat++;
            //window.console.log(rgb);
            window.console.log("Try again, already used color.");
        }
        rgb = calc_color();
    } while (colors_used.indexOf(rgb) !== -1);

  found_unique++;
    colors_used.push(rgb); // Add color to list of colors used

    document.body.style.backgroundColor = rgb; // Set background color

}, time_per_interval);

