// my solution
function Stopwatch() {
    let duration, stats, start, end = 0;

    this.start = function () {
        if (stats)
            throw new Error("Stopwatch already running!");
        stats = true;
        start = Date.now();
    }

    this.stop = function () {
        if (stats === false)
            throw new Error("Stopwatch already stopped or got reset");
        stats = false;
        end = Date.now();
        duration = end - start;
    }

    this.reset = function () {
        duration = 0;
        stats = false;
        start = 0;
        end = 0;

    }

    Object.defineProperty(this, 'duration', { get: function () { return duration } })
}


//mosh solution
function Stopwatch2() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function () {
        if (!running)
            throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}
