
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var order = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + order + " in line.";
}