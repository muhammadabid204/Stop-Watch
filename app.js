var minutes = 0
var second = 0
var msec = 0
var getmin = document.getElementById("mins")
var getsec = document.getElementById("sec")
var getmsec = document.getElementById("milsec")
var interval;
function start() {

    interval = setInterval(function () {
        msec++
        getmsec.innerHTML = msec
        if (msec >= 100) {
            second++
            getsec.innerHTML = second
            msec = 0
        }
        else if (second >= 60) {
            minutes++
            getmin.innerHTML = minutes
            second = 0
        }
    }, 10)
    document.getElementById("disab").disabled = true




}
function stop() {
    clearInterval(interval)
    document.getElementById("disab").disabled = false

}
function rest() {
    minutes = 0
    second = 0
    msec = 0
    getmin.innerHTML = minutes
    getsec.innerHTML = second
    getmsec.innerHTML = msec
}


