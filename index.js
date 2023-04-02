function clock() {
  let hr = document.getElementById("hour");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  var am = "AM";

  if (h > 12) {
    h -= 12;
    var am = "PM";
  }

  hr.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  ampm.innerHTML = am;
}
let interval = setInterval(clock, 1000);
