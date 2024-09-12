exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@p5-wrapper\/react/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
