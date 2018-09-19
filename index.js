
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var order = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + order + " in line.";
}
function nowServing(katzDeliLine) {
  var line = katzDeliLine.length;
  if (line === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serveing " + katzDeliLine[0] + ".";
  }
}