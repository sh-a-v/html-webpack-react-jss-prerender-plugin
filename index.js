function ReactJssPrerenderHtmlPlugin(options) {
  // Configure your plugin with options...
}

ReactJssPrerenderHtmlPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-html-processing', function(htmlPluginData, callback) {
      try {
        console.log(htmlPluginData);
        callback(null, htmlPluginData);
      } catch (err) {
        callback(err);
      }
    });
  });

};
