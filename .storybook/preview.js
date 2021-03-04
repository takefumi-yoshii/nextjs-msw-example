if (typeof global.process === "undefined") {
  const { worker } = require("../.mocks/browser");
  worker.start();
}
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
