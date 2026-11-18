import { IAppPolicyLink } from "@/interfaces";
import { COUCH_BEAM_POLICY } from "./couch-beam";
import { PAY_SLICE_POLICY } from "./pay-slice";
import { SIMPLI_NOTI_POLICY } from "./simpli-noti";

export const APP_POLICIES: IAppPolicyLink[] = [
  {
    slug: "pay-slice",
    name: "Pay Slice",
    description: "Expense planning app. Your budget stays on your device.",
    lastUpdated: PAY_SLICE_POLICY.lastUpdated,
  },
  {
    slug: "couch-beam",
    name: "Couch Beam",
    description: "Remote control for Android TV and Google TV.",
    lastUpdated: COUCH_BEAM_POLICY.lastUpdated,
  },
  {
    slug: "simpli-noti",
    name: "Simpli Noti",
    description: "Reminder app. Reminders are stored only on your device.",
    lastUpdated: SIMPLI_NOTI_POLICY.lastUpdated,
  },
];
