var dest = './public';
var src = './src';

module.exports = {
  javascript: {
    src: src + '/app/**/*.js',
    dest: dest + '/js/',
    entryPoint: src + '/webpack-entry.js',
    packedFile: 'packed.js'
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss}',
    dest: dest + '/styles/',
    settings: {
      indentedSyntax: true,
    }
  },
  html: {
    src: src + "/app/**/*.html",
    dest: dest + "/views/",
  },
  server: {
    serverFile: './server.js'
  },
  production: {
    cssSrc: dest + '/styles/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
