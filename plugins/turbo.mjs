import turbo from "eslint-plugin-turbo";

const plugin = turbo.default ?? turbo;

export default {
  meta: { name: "turbo" },
  rules: plugin.rules,
};
