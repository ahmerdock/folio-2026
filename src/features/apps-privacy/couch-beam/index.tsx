import { PrivacyPolicyPage } from "../components";
import { COUCH_BEAM_POLICY } from "./privacy-policy.data";

export default function CouchBeamPrivacy() {
  return <PrivacyPolicyPage policy={COUCH_BEAM_POLICY} />;
}
