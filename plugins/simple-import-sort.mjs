import simpleImportSort from "eslint-plugin-simple-import-sort";

const plugin = simpleImportSort.default ?? simpleImportSort;

export default {
  meta: { name: "simple-import-sort" },
  rules: plugin.rules,
};
