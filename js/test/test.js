var assert = require('assert');
var parst = require('../index');

describe('Methods', () => {
  // MATCH
  describe('match()', () => {
    it('Should return true if the regex matches the string exactly', () => {
      assert.equal(parst.match.email('foo@bar.com'), true);
    });
    it('Should return false if the string has more than just what the regex looks for', () => {
      assert.equal(parst.match.email('this contains foo@bar.com'), false);
    });
    it('Should return false if the regex does not match the string', () => {
      assert.equal(parst.match.email('this is not an email'), false);
    });
    // Exceptions
    it('Should throw a TypeError if a string is not provided to compare', () => {
      assert.throws(
        function() { parst.match.email(123); },
        TypeError
      );
    });
  });
  // FIND
  describe('find()', () => {
    it('Should return the index of a match for the regex in the string', () => {
      assert.equal(parst.find.email('this contains foo@bar.com'), 14);
    });
    it('Should return the index of the first match for the regex if the string has multiple matches', () => {
      assert.equal(parst.find.email('this has foo@bar.com and baz@bat.com'), 9);
    });
    it('Should return -1 if the regex finds no matches in the string', () => {
      assert.equal(parst.find.email('this has no email addresses'), -1);
    });
    // Exceptions
    it('Should throw a TypeError if a string is not provided to compare', () => {
      assert.throws(
        function() { parst.find.email(123); },
        TypeError
      );
    });
  });
  // FIND_MULTI
  describe('findMulti()', () => {
    it('Should return the specified number of matches if the string contains that many', () => {
      assert.deepEqual(
        parst.findMulti.email('there is foo@bar.com and baz@bat.com and hello@mail.net', 3),
        [ [9, 'foo@bar.com'], [25, 'baz@bat.com'], [41, 'hello@mail.net'] ]
      );
    });
    it('Should return all matches in the string if the specified number is less than the total matches', () => {
      assert.deepEqual(
        parst.findMulti.email('there is foo@bar.com and baz@bat.com', 3),
        [ [9, 'foo@bar.com'], [25, 'baz@bat.com'] ]
      );
    });
    it('Should return an empty array if no matches exist in the string', () => {
      assert.deepEqual(parst.findMulti.email('this has no email addresses', 3), []);
    });
    // Exceptions
    it('Should throw a TypeError if a string is not provided to compare', () => {
      assert.throws(
        function() { parst.findMulti.email(123, 1); },
        TypeError
      );
    });
  });
  // FIND_ALL
  describe('findAll()', () => {
    it('Should return all matches of the regex in the string', () => {
      assert.deepEqual(
        parst.findAll.email('there is foo@bar.com and baz@bat.com and hello@mail.net'),
        [ [9, 'foo@bar.com'], [25, 'baz@bat.com'], [41, 'hello@mail.net'] ]
      );
    });
    it('Should return an empty array if no matches exist in the string', () => {
      assert.deepEqual(parst.findAll.email('this has no email addresses'), []);
    });
    // Exceptions
    it('Should throw a TypeError if a string is not provided to compare', () => {
      assert.throws(
        function() { parst.findAll.email(123); },
        TypeError
      );
    });
  });
  // REPLACE
  describe('replace()', () => {
    it('Should return a different string if the entire string is a match', () => {
      assert.equal(parst.replace.email('foo@bar.com', 'baz@bat.com'), 'baz@bat.com');
    });
    it('Should return a changed string if the string contains a match', () => {
      assert.equal(
        parst.replace.email('this has foo@bar.com', 'baz@bat.com'),
        'this has baz@bat.com'
      );
    });
    it('Should return a changed string with the first match changed if the string contains multiple matches', () => {
      assert.equal(
        parst.replace.email('this has foo@bar.com and baz@bat.com', 'hello@world.com'),
        'this has hello@world.com and baz@bat.com'
      );
    });
    it('Should return the original string if the string contains no matches', () => {
      assert.equal(
        parst.replace.email('this has no email addresses', 'hello@world.com'),
        'this has no email addresses'
      );
    });
    // Exceptions
    it('Should throw a TypeError if a string is not provided to compare', () => {
      assert.throws(
        function() { parst.replace.email(123, 'other'); },
        TypeError
      );
    });
    it('Should throw a ValueError if a string is not provided to compare', () => {
      assert.throws(
        function() { parst.replace.email('foo@bar.com', null); },
        Error
      );
    });
  });
  // REPLACE_ALL
  describe('replaceAll()', () => {
    it('Should return a different string if the entire string is a match', () => {
      assert.equal(parst.replaceAll.email('foo@bar.com', 'baz@bat.com'), 'baz@bat.com');
    });
    it('Should return a changed string if the string contains a match', () => {
      assert.equal(
        parst.replaceAll.email('this has foo@bar.com', 'baz@bat.com'),
        'this has baz@bat.com'
      );
    });
    it('Should return a changed string with all matches changed if the string contains multiple matches', () => {
      assert.equal(
        parst.replaceAll.email('this has foo@bar.com and baz@bat.com', 'hello@world.com'),
        'this has hello@world.com and hello@world.com'
      );
    });
    it('Should return the original string if the string contains no matches', () => {
      assert.equal(
        parst.replaceAll.email('this has no email addresses', 'hello@world.com'),
        'this has no email addresses'
      );
    });
    // Exceptions
    it('Should throw a TypeError if a string is not provided to compare', () => {
      assert.throws(
        function() { parst.replaceAll.email(123, 'other'); },
        TypeError
      );
    });
    it('Should throw a ValueError if a string is not provided to compare', () => {
      assert.throws(
        function() { parst.replaceAll.email('foo@bar.com', null); },
        Error
      );
    });
  });
});

describe('Regexes', () => {
  describe('Email', () => {
    it('Should match a simple valid email address', () => {
      assert.equal(parst.match.email('simple@email.com'), true);
    });
    it('Should match a more complex email address', () => {
      assert.equal(parst.match.email('comp+lex.email-ad_dr%ess@some-domain.blahblahblah'), true)
    });
    it('Should match an email with a domain of minimum size (2)', () => {
      assert.equal(parst.match.email('me@shortdomain.to'), true);
    });
    it('Should match an email with a domain of maximum size (63)', () => {
      assert.equal(
        parst.match.email('me@longdomain.holycrapthisisalongemaildomainwhyinthenamewouldanyoneusethishah'),
        true
      );
    });
    it('Should fail with an email with a domain above maximum size (64)', () => {
      assert.equal(
        parst.match.email('me@longdomain.holycrapthisisalongemaildomainwhyinthenamewouldanyoneusethishaha'),
        false
      );
    });
    it('Should fail with an email with a domain below minimum size (1)', () => {
      assert.equal(parst.match.email('me@tooshortdomain.t'), false);
    });
    it('Should fail with an email with invalid characters in the username', () => {
      assert.equal(parst.match.email('invalid^&*characters@shortdomain.to'), false);
    });
    it('Should fail with an email with invalid characters in the host', () => {
      assert.equal(parst.match.email('person@invalid+chara*^cters.to'), false);
    });
    it('Should fail with an email with invalid characters in the tld', () => {
      assert.equal(parst.match.email('person@host.oo%ps'), false);
    });
  });
  describe('Phone Number', () => {
    it('Should match against valid 7-digit number formats', () => {
      assert.equal(parst.match.phone('555-5555'), true);
      assert.equal(parst.match.phone('5555555'), true);
      assert.equal(parst.match.phone('555.5555'), true);
      assert.equal(parst.match.phone('555 5555'), true);
    });
    it('Should match against valid 10-digit number formats', () => {
      assert.equal(parst.match.phone('555 555-5555'), true);
      assert.equal(parst.match.phone('555-555-5555'), true);
      assert.equal(parst.match.phone('555.555-5555'), true);
      assert.equal(parst.match.phone('(555) 555-5555'), true);
    });
    it('Should match against valid 10-digit number formats with valid country codes', () => {
      assert.equal(parst.match.phone('+1 555 555-5555'), true);
      assert.equal(parst.match.phone('+11 555 555-5555'), true);
    });
    it('Should fail against invalid phone number formats', () => {
      assert.equal(parst.match.phone('555/5555'), false);
      assert.equal(parst.match.phone('555  5555'), false);
      assert.equal(parst.match.phone('555-55555'), false);
      assert.equal(parst.match.phone('|555|555-5555'), false);
      assert.equal(parst.match.phone('5555 555-5555'), false);
      assert.equal(parst.match.phone('+1 555 5555'), false);
      assert.equal(parst.match.phone('+111 555 5555'), false);
      assert.equal(parst.match.phone('1 555 555 5555'), false);
      assert.equal(parst.match.phone('-1 555 555 5555'), false);
      assert.equal(parst.match.phone('+1-555-555-5555'), false);
    });
  });
  describe('Postal Codes', () => {
    describe('US', () => {
      it('Should match a valid postal code', () => {
        assert.equal(parst.match.postalCode.us('12345'), true);
        assert.equal(parst.match.postalCode.us('00000'), true);
        assert.equal(parst.match.postalCode.us('99999'), true);
      });
      it('Should match a valid postal code with delivery area', () => {
        assert.equal(parst.match.postalCode.us('12345-6789'), true);
        assert.equal(parst.match.postalCode.us('12345-0000'), true);
        assert.equal(parst.match.postalCode.us('12345-9999'), true);
      });
      it('Should fail against invalid postal codes', () => {
        assert.equal(parst.match.postalCode.us('112030'), false);
        assert.equal(parst.match.postalCode.us('0000'), false);
        assert.equal(parst.match.postalCode.us('100A0'), false);
        assert.equal(parst.match.postalCode.us('12345-111'), false);
        assert.equal(parst.match.postalCode.us('12345-11111'), false);
        assert.equal(parst.match.postalCode.us('12345-0000A'), false);
      });
    });
  });
  describe('Credit Cards', () => {
    describe('Visa', () => {
      it('Should match valid Visa card number formats', () => {
        assert.equal(parst.match.creditCard.visa('4111111111111111'), true);
        assert.equal(parst.match.creditCard.visa('4012888888881881'), true);
        assert.equal(parst.match.creditCard.visa('4222222222222'), true);
      });
      it('Should fail against invalid Visa card number formats', () => {
        assert.equal(parst.match.creditCard.visa('5200200202020'), false);
        assert.equal(parst.match.creditCard.visa('2940403029283844'), false);
        assert.equal(parst.match.creditCard.visa('41010259339393'), false);
        assert.equal(parst.match.creditCard.visa('410239368485329'), false);
        assert.equal(parst.match.creditCard.visa('40235683648359255'), false);
        assert.equal(parst.match.creditCard.visa('4111111111111ABC'), false);
      });
    });
    describe('Mastercard', () => {
      it('Should match valid Mastercard number formats', () => {
        assert.equal(parst.match.creditCard.mastercard('5555555555554444'), true);
        assert.equal(parst.match.creditCard.mastercard('5105105105105100'), true);
      });
      it('Should fail against invalid Mastercard number formats formats', () => {
        assert.equal(parst.match.creditCard.mastercard('6253064395920303'), false);
        assert.equal(parst.match.creditCard.mastercard('5025399293929959'), false);
        assert.equal(parst.match.creditCard.mastercard('5620564359364320'), false);
        assert.equal(parst.match.creditCard.mastercard('2220059359202035'), false);
        assert.equal(parst.match.creditCard.mastercard('2723460360963693'), false);
        assert.equal(parst.match.creditCard.mastercard('2793504935293922'), false);
        assert.equal(parst.match.creditCard.mastercard('2853564030669292'), false);
        assert.equal(parst.match.creditCard.mastercard('2721036040063003'), false);
        assert.equal(parst.match.creditCard.mastercard('55555555555544445'), false);
        assert.equal(parst.match.creditCard.mastercard('555555555555444'), false);
      });
    });
    describe('American Express', () => {
      it('Should match valid American Express card number formats', () => {
        assert.equal(parst.match.creditCard.amex('378282246310005'), true);
        assert.equal(parst.match.creditCard.amex('371449635398431'), true);
        assert.equal(parst.match.creditCard.amex('378734493671000'), true);
      });
      it('Should fail against invalid American Express card number formats', () => {
        assert.equal(parst.match.creditCard.amex('420202053959393'), false);
        assert.equal(parst.match.creditCard.amex('335496939649329'), false);
        assert.equal(parst.match.creditCard.amex('383546093992939'), false);
        assert.equal(parst.match.creditCard.amex('354699394693939'), false);
        assert.equal(parst.match.creditCard.amex('363946939696933'), false);
        assert.equal(parst.match.creditCard.amex('3753745586385882'), false);
        assert.equal(parst.match.creditCard.amex('37654866838682'), false);
      });
    });
    describe('Discover', () => {
      it('Should match valid Discover card number formats', () => {
        assert.equal(parst.match.creditCard.discover('6011111111111117'), true);
        assert.equal(parst.match.creditCard.discover('6011000990139424'), true);
        assert.equal(parst.match.creditCard.discover('6502539205932022'), true);
      });
      it('Should fail against invalid Discover card number formats', () => {
        assert.equal(parst.match.creditCard.discover('7205395394683283'), false);
        assert.equal(parst.match.creditCard.discover('6012350469339592'), false);
        assert.equal(parst.match.creditCard.discover('6010359465793293'), false);
        assert.equal(parst.match.creditCard.discover('6435946202025593'), false);
        assert.equal(parst.match.creditCard.discover('6635046939602022'), false);
        assert.equal(parst.match.creditCard.discover('601111111111111'), false);
        assert.equal(parst.match.creditCard.discover('60111111111111177'), false);
      });
    });
  });
  describe('Hex Code', () => {
    it('Should match valid hexcodes', () => {
      assert.equal(parst.match.hexcode('#abc'), true);
      assert.equal(parst.match.hexcode('#def'), true);
      assert.equal(parst.match.hexcode('#ABC'), true);
      assert.equal(parst.match.hexcode('#DEF'), true);
      assert.equal(parst.match.hexcode('#123'), true);
      assert.equal(parst.match.hexcode('#abcdef'), true);
      assert.equal(parst.match.hexcode('#ABCDEF'), true);
      assert.equal(parst.match.hexcode('#012345'), true);
      assert.equal(parst.match.hexcode('#6789AB'), true);
    });
    it('Should fail against invalid hexcodes', () => {
      assert.equal(parst.match.hexcode('ABC123'), false);
      assert.equal(parst.match.hexcode('#BCDEFG'), false);
      assert.equal(parst.match.hexcode('#ABCDEF0'), false);
      assert.equal(parst.match.hexcode('#abcdefg'), false);
      assert.equal(parst.match.hexcode('#abcd-e'), false);
    });
  });
  describe('URL', () => {
    it('Should match valid URL formats', () => {
      assert.equal(parst.match.url('http://www.google.com'), true);
      assert.equal(parst.match.url('https://google.com'), true);
      assert.equal(parst.match.url('https://www.google.com'), true);
      assert.equal(parst.match.url('https://www.google.com/hello'), true);
      assert.equal(parst.match.url('https://www.google.com/hello.php'), true);
      assert.equal(parst.match.url('https://www.google.com/hello.php?query'), true);
      assert.equal(parst.match.url('https://www.google.com/hello.php?query=hello'), true);
      assert.equal(parst.match.url('https://www.google.com/hello.php?query=hello?other=foobar'), true);
    });
    it('Should fail against invalid URL formats', () => {
      assert.equal(parst.match.url('htt://www.google.com'), false);
      assert.equal(parst.match.url('https://w.google'), false);
      assert.equal(parst.match.url('https://www.google.com"'), false);
    });
  });
  describe('IPv4 Address', () => {
    it('Should match valid IPv4 Address formats', () => {
      assert.equal(parst.match.ipv4('255.255.255.255'), true);
      assert.equal(parst.match.ipv4('0.0.0.0'), true);
      assert.equal(parst.match.ipv4('127.0.0.1'), true);
      assert.equal(parst.match.ipv4('1.23.255.255'), true);
    });
    it('Should fail against invalid IPv4 Address formats', () => {
      assert.equal(parst.match.ipv4('256.0.0.0'), false);
      assert.equal(parst.match.ipv4('0.256.0.0'), false);
      assert.equal(parst.match.ipv4('0.0.256.0'), false);
      assert.equal(parst.match.ipv4('0.0.0.256'), false);
      assert.equal(parst.match.ipv4('-10.10.10.10'), false);
      assert.equal(parst.match.ipv4('A.0.0.0'), false);
      assert.equal(parst.match.ipv4('123.123.123'), false);
      assert.equal(parst.match.ipv4('123.123'), false);
      assert.equal(parst.match.ipv4('123'), false);
      assert.equal(parst.match.ipv4('123.123.123.123.'), false);
    });
  });
  describe('IPv6 Address', () => {
    it('Should match valid IPv4 Address formats', () => {
      assert.equal(parst.match.ipv6('1200:0000:AB00:1234:0000:2552:7777:1313'), true);
      assert.equal(parst.match.ipv6('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A'), true);
    });
    it('Should fail against invalid IPv4 Address formats', () => {
      assert.equal(parst.match.ipv6('1200::AB00:1234::2552:7777:1313'), false);
      assert.equal(parst.match.ipv6('1200:0000:AB00:1234:O000:2552:7777:1313'), false);
      assert.equal(parst.match.ipv6('1200:0000:ABCD:EFGH:0000:2552:7777:1313'), false);
    });
  });
});
