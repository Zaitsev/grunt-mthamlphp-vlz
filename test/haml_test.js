'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.haml = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  basic_html: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/basic.html');
    var expected = grunt.file.read('test/expected/basic.html');
    test.equal(actual, expected, 'Should compile haml to html');

    test.done();
  },

  invalidWrite: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/invalidWrite.html');
    var expected = grunt.file.read('test/expected/invalidWrite.html');
    test.equal(actual, expected, 'Should write error to output file');

    test.done();
  },
  php_code: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/php_code.php');
    var expected = grunt.file.read('test/expected/php_code.php');
    test.equal(actual, expected, 'Should compile haml with embedded php');

    test.done();
  },
  unknown_filter: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/unknown_filter.html');
    var expected = grunt.file.read('test/expected/unknown_filter.html');
    test.equal(actual, expected, 'Should write error about unknown filter');

    test.done();
  },
    filter: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/filter.html');
        var expected = grunt.file.read('test/expected/filter.html');
        test.equal(actual, expected, 'Should compile haml with less, markdown, coffee');

        test.done();
    }
};
