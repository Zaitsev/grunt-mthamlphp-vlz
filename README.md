# grunt-mthamlphp-vlz

> Using with zaitsev/mthamlphp IDE compiler

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mthamlphp-vlz --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mthamlphp-vlz');
```

## The "haml" task

### Overview
In your project's Gruntfile, add a section named `mthamlphp_vlz` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig(
    {
        haml: {
            compile: {
                options: {
                    haml_options:{options:{enable_escaper:false},filters:['less','coffee','markdown']}
                },            
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.haml'],
                    dest: 'dst/',
                    ext: '.php'
                }]
            }
        }

    }
);
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  haml: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  haml: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### engine options
in this example, haml engine options user to add filters and pass some of MtHaml Enviroment options

`haml_options.options` used to pass MtHaml Enviroment options

`haml_options.filters` used to turn on filters/parsers. These filters have runtime dependencies and are not enabled by default. use `composer require to install them. see more [MtHaml](https://github.com/arnaud-lb/MtHaml).

 
```js
grunt.initConfig(
    {
        haml: {
            compile: {
                options: {
                    haml_options:{options:{enable_escaper:false},filters:['less','coffee','markdown']}
                },            
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.haml'],
                    dest: 'dst/',
                    ext: '.php'
                }]
            }
        }

    }
);
```
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
1.0.0 - initial commit of grunt task to use with [zaitsev/mthamlphp](https://github.com/Zaitsev/MtHamlPHP)  
