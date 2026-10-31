import { ArrowDown, ArrowRight, HeartPulse, Activity, Droplets } from 'lucide-react';
import type { Locale } from '@/contracts/learning';
import { messages } from '@/i18n/messages';

export function LessonDiagram({ kind, locale }: { kind: 'pump' | 'equation' | 'calculation'; locale: Locale }) {
  const d = messages[locale];
  const number = new Intl.NumberFormat(locale);
  return <figure className={`lesson-diagram diagram-${kind}`} aria-label={d.diagramTitle}>
    {kind === 'pump' ? <>
      <div className="circuit-row"><div className="circuit-node pulmonary"><HeartPulse size={26}/><strong>{d.rightVentricle}</strong></div><ArrowRight className="flow-arrow"/><div className="circuit-node lungs"><span className="organ-symbol">⌁</span><strong>{d.lungs}</strong></div></div>
      <ArrowDown className="circuit-down"/>
      <div className="circuit-row"><div className="circuit-node systemic"><HeartPulse size={26}/><strong>{d.leftVentricle}</strong></div><ArrowRight className="flow-arrow"/><div className="circuit-node body-node"><Activity size={30}/><strong>{d.body}</strong></div></div>
      <figcaption>{d.flowCaption}</figcaption>
    </> : <>
      <div className="formula-chips"><div className="formula-chip blue-chip"><Activity size={22}/><span>{d.heartRate}</span><strong>{kind === 'calculation' ? '75' : locale === 'en' ? 'HR' : 'FC'}</strong><small>{d.beatsPerMin}</small></div><span className="operator">×</span><div className="formula-chip green-chip"><Droplets size={22}/><span>{d.strokeVolume}</span><strong>{kind === 'calculation' ? '70' : locale === 'en' ? 'SV' : 'VS'}</strong><small>{d.mlPerBeat}</small></div></div>
      <div className="formula-result"><span>{d.cardiacOutput}</span><strong>{kind === 'calculation' ? `${number.format(5250)} mL/min` : d.formula}</strong>{kind === 'calculation' && <small>= {number.format(5.25)} L/min</small>}</div>
      <figcaption>{d.originalDiagram}</figcaption>
    </>}
  </figure>;
}
