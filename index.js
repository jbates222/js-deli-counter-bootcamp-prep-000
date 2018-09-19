
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var order = katzDeliLine.length + 1;
  return "Welcome, " + name + ". You are number " + order + " in line.";
}