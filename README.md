# grunt-doxication

Simple dox grunt plugin to generate JSON or YAML from input files.

This plugin was inspired by [grunt-dox](https://github.com/punkave/grunt-dox) but is trimmed down again to the basics.

## Getting Started
This plugin requires Grunt `~0.4.x`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-doxication --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-doxication');
```

## Documentation
Inside of your grunt file, add:
```javascript
doxication: {
  options: {
    // Can be yaml or json
    format: 'yaml',
    // If ommited this will be used as default.
    fileName: 'doxicated',
    // The yaml default options where inline will be the indention level where YAML will be inlined and spaces is
    // the indentation space count.
    yaml: {
      inline: 99,
      spaces: 2
    }
  },
  files: {
    src: ['js/lib/**/*.js'],
    // Dest can be a folder or a file. If a folder is used then the fileName from the options is used.
    // If a path is specified that does not exist and has no extension it's also assumed to be a directory
    dest: 'dox'
  }
},
```