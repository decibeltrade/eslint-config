import noGetAccountResourceRule from "../custom-rules/no-get-account-resource.js";
import noGlobalAccountsStateRule from "../custom-rules/no-global-accounts-state.js";
import noGlobalPerpEngineStateRule from "../custom-rules/no-global-perp-engine-state.js";

export default {
  meta: { name: "custom" },
  rules: {
    "no-get-account-resource": noGetAccountResourceRule,
    "no-global-accounts-state": noGlobalAccountsStateRule,
    "no-global-perp-engine-state": noGlobalPerpEngineStateRule,
  },
};
