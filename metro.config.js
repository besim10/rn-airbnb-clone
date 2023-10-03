const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

// To handle 'cjs' extensions
config.resolver.assetExts.push("cjs");

// To handle SVGs
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

// Exclude SVGs from being treated as an asset
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);

// Include SVGs as a source extension
config.resolver.sourceExts.push("svg");

module.exports = config;
