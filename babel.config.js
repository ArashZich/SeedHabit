module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
            "@/components": "./src/components",
            "@/types": "./src/types",
            "@/theme": "./src/theme",
            "@/utils": "./src/utils",
            "@/services": "./src/services",
            "@/hooks": "./src/hooks",
            "@/constants": "./src/constants",
            "@/screens": "./src/screens",
          },
        },
      ],
    ],
  };
};