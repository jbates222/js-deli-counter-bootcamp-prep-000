
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var order = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + order + " in line.";
}
function nowServing(katzDeliLine) {
  var line = katzDeliLine.length;
  var str;
  if (line === 0) {
    str = "There is nobody waiting to be served!";
  }
  else {
    str = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }
  return str;
}