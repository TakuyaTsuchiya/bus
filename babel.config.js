module.exports = function (api) {
  return {
    sourceType: "unambiguous",
    presets: [
      [
        "@babel/preset-env",
        {
          targets: api.caller((caller) => caller && caller.target === "node") ? { node: "current" } : undefined,
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      [
        "@babel/preset-typescript",
        {
          allowNamespaces: true,
        },
      ],
    ],
  };
};