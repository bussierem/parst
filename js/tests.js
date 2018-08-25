const parst = require('./index');


// Not enough octects
console.log(parst.match.ipv4('42.42.42')); // FALSE
// first octect out of range
console.log(parst.match.ipv4('256.124.53.1')); // FALSE
// third octect out of range
console.log(parst.match.ipv4('1.125.-63.22')); // FALSE
// Valid
console.log(parst.match.ipv4('192.168.1.2')); // TRUE
// Valid
console.log(parst.match.ipv4('127.0.0.1')); // TRUE


// Hex is allowed
console.log(parst.match.ipv6('1200:0000:AB00:1234:0000:2552:7777:1313')); // TRUE
// Cannot have repeating ::
console.log(parst.match.ipv6('1200::AB00:1234::2552:7777:1313')); // FALSE
// Leading 0's can be dropped
console.log(parst.match.ipv6('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A')); // TRUE
// Invalid "O" in a set of "0"s
console.log(parst.match.ipv6('1200:0000:AB00:1234:O000:2552:7777:1313')); // FALSE
