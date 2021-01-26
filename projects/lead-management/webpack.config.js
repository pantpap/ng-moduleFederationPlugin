const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "leadManagement",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "leadManagement",
      library: { type: "var", name: "leadManagement" },
      filename: "remoteEntry.js",
      exposes: {
        "./Module": "./projects/lead-management/src/app/remote.module.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router", "@ng-select/ng-select"],
    }),
  ],
};
