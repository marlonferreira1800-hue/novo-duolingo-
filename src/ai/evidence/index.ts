import 'server-only';
import { cardiovascularEvidence } from './cardiovascular';
import { cardiacCycleEvidence } from './cardiac-cycle';
import { heartElectricalEvidence } from './heart-electrical';

export const allEvidence = [cardiovascularEvidence, cardiacCycleEvidence, heartElectricalEvidence] as const;
export { cardiovascularEvidence, cardiacCycleEvidence, heartElectricalEvidence };
