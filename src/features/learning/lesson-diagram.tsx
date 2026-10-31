import { ArrowDown, ArrowRight, HeartPulse, Activity, Droplets, Waves, DoorOpen, DoorClosed, AudioLines } from 'lucide-react';
import type { Locale } from '@/contracts/learning';
import { messages } from '@/i18n/messages';

export type DiagramKind = 'pump' | 'equation' | 'calculation' | 'phases' | 'valves' | 'sounds';

export function LessonDiagram({ kind, locale }: { kind: DiagramKind; locale: Locale }) {
  const d = messages[locale];
  const number = new Intl.NumberFormat(locale);
  return <figure className={`lesson-diagram diagram-${kind}`} aria-label={d.diagramTitle}>
    {kind === 'pump' ? <>
      <div className="circuit-row"><div className="circuit-node pulmonary"><HeartPulse size={26} aria-hidden="true"/><strong>{d.rightVentricle}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node lungs"><span className="organ-symbol" aria-hidden="true">⌁</span><strong>{d.lungs}</strong></div></div>
      <ArrowDown className="circuit-down" aria-hidden="true"/>
      <div className="circuit-row"><div className="circuit-node systemic"><HeartPulse size={26} aria-hidden="true"/><strong>{d.leftVentricle}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node body-node"><Activity size={30} aria-hidden="true"/><strong>{d.body}</strong></div></div>
      <figcaption>{d.flowCaption}</figcaption>
    </> : kind === 'equation' || kind === 'calculation' ? <>
      <div className="formula-chips"><div className="formula-chip blue-chip"><Activity size={22} aria-hidden="true"/><span>{d.heartRate}</span><strong>{kind === 'calculation' ? '75' : locale === 'en' ? 'HR' : 'FC'}</strong><small>{d.beatsPerMin}</small></div><span className="operator" aria-hidden="true">×</span><div className="formula-chip green-chip"><Droplets size={22} aria-hidden="true"/><span>{d.strokeVolume}</span><strong>{kind === 'calculation' ? '70' : locale === 'en' ? 'SV' : 'VS'}</strong><small>{d.mlPerBeat}</small></div></div>
      <div className="formula-result"><span>{d.cardiacOutput}</span><strong>{kind === 'calculation' ? `${number.format(5250)} mL/min` : d.formula}</strong>{kind === 'calculation' && <small>= {number.format(5.25)} L/min</small>}</div>
      <figcaption>{d.originalDiagram}</figcaption>
    </> : kind === 'phases' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node phase-node"><Waves size={24} aria-hidden="true"/><strong>{d.phaseDiastole}</strong><small>{d.phaseFilling}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><HeartPulse size={24} aria-hidden="true"/><strong>{d.phaseAtrialSystole}</strong><small>{d.phaseAtrialFilling}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><Activity size={24} aria-hidden="true"/><strong>{d.phaseVentricularSystole}</strong><small>{d.phaseEjection}</small></div></div>
      <figcaption>{d.phasesCaption}</figcaption>
    </> : kind === 'valves' ? <>
      <div className="circuit-row"><div className="circuit-node pulmonary"><DoorClosed size={24} aria-hidden="true"/><strong>{d.avValves}</strong><small>{d.valvesClosed}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node systemic"><DoorOpen size={24} aria-hidden="true"/><strong>{d.semilunarValves}</strong><small>{d.valvesOpenDuringDiastole}</small></div></div>
      <figcaption>{d.valvesCaption}</figcaption>
    </> : <>
      <div className="circuit-row"><div className="circuit-node phase-node"><AudioLines size={24} aria-hidden="true"/><strong>{d.firstSound}</strong><small>{d.soundAvClosure}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><AudioLines size={24} aria-hidden="true"/><strong>{d.secondSound}</strong><small>{d.soundSemilunarClosure}</small></div></div>
      <figcaption>{d.soundsCaption}</figcaption>
    </>}
  </figure>;
}
