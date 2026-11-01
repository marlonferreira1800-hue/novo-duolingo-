import { ArrowDown, ArrowRight, HeartPulse, Activity, Droplets, Waves, DoorOpen, DoorClosed, AudioLines, Layers, FlaskConical, Grid2x2, Bone, Wind, Droplet, Zap, Flame, Landmark, Baby, Dna, ShieldCheck, Virus, UtensilsCrossed, Dumbbell, Gauge, Pill, Users, Bug, Brain, Ribbon, Skull, BarChart3 } from 'lucide-react';
import type { Locale } from '@/contracts/learning';
import { messages } from '@/i18n/messages';

export type DiagramKind = 'pump' | 'equation' | 'calculation' | 'phases' | 'valves' | 'sounds' | 'membrane' | 'mitochondria' | 'tissue' | 'bone' | 'lung' | 'kidney' | 'neuron' | 'inflammation' | 'endocrine' | 'embryo' | 'dna' | 'immune' | 'microbe' | 'intestine' | 'sarcomere' | 'ecg' | 'pressure' | 'adme' | 'incidence' | 'parasite' | 'brain' | 'chest' | 'neoplasia' | 'stats';

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
    </> : kind === 'sounds' ? <>
      <div className="circuit-row"><div className="circuit-node phase-node"><AudioLines size={24} aria-hidden="true"/><strong>{d.firstSound}</strong><small>{d.soundAvClosure}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><AudioLines size={24} aria-hidden="true"/><strong>{d.secondSound}</strong><small>{d.soundSemilunarClosure}</small></div></div>
      <figcaption>{d.soundsCaption}</figcaption>
    </> : kind === 'membrane' ? <>
      <div className="circuit-row"><div className="circuit-node blue-node"><Layers size={24} aria-hidden="true"/><strong>{d.membraneLayers}</strong></div><div className="circuit-node green-node"><FlaskConical size={24} aria-hidden="true"/><strong>{d.membraneProteins}</strong></div><div className="circuit-node systemic"><ArrowRight size={24} aria-hidden="true"/><strong>{d.membraneTransport}</strong></div></div>
      <figcaption>{d.membraneCaption}</figcaption>
    </> : kind === 'mitochondria' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node phase-node"><FlaskConical size={24} aria-hidden="true"/><strong>{d.glycolysisCytosol}</strong><small>2 ATP</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><Activity size={24} aria-hidden="true"/><strong>{d.krebsMatrix}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><Zap size={24} aria-hidden="true"/><strong>{d.etcChain}</strong></div></div>
      <div className="formula-result"><span>{d.atpNet}</span><strong>~30–32 ATP</strong></div>
      <figcaption>{d.mitoCaption}</figcaption>
    </> : kind === 'tissue' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node phase-node"><Grid2x2 size={24} aria-hidden="true"/><strong>{d.tissueEpithelial}</strong></div><div className="circuit-node phase-node"><Layers size={24} aria-hidden="true"/><strong>{d.tissueConnective}</strong></div><div className="circuit-node phase-node"><Activity size={24} aria-hidden="true"/><strong>{d.tissueMuscle}</strong></div><div className="circuit-node phase-node"><Zap size={24} aria-hidden="true"/><strong>{d.tissueNervous}</strong></div></div>
      <figcaption>{d.tissueCaption}</figcaption>
    </> : kind === 'bone' ? <>
      <div className="circuit-row"><div className="circuit-node phase-node"><Bone size={24} aria-hidden="true"/><strong>{d.boneEpiphysis}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node systemic"><Bone size={28} aria-hidden="true"/><strong>{d.boneDiaphysis}</strong><small>{d.boneMarrow}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><Bone size={24} aria-hidden="true"/><strong>{d.boneEpiphysis}</strong></div></div>
      <figcaption>{d.boneCaption}</figcaption>
    </> : kind === 'lung' ? <>
      <div className="circuit-row"><div className="circuit-node lungs"><Wind size={26} aria-hidden="true"/><strong>{d.alveolus}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node pulmonary"><Droplet size={26} aria-hidden="true"/><strong>{d.capillary}</strong></div></div>
      <div className="formula-result"><span>{d.o2In}</span><strong>O₂ →</strong><small>{d.co2Out} ← CO₂</small></div>
      <figcaption>{d.lungCaption}</figcaption>
    </> : kind === 'kidney' ? <>
      <div className="circuit-row"><div className="circuit-node pulmonary"><Droplets size={24} aria-hidden="true"/><strong>{d.glomerulus}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node green-node"><Droplet size={24} aria-hidden="true"/><strong>{d.tubule}</strong><small>{d.filtrate}</small></div></div>
      <figcaption>{d.kidneyCaption}</figcaption>
    </> : kind === 'neuron' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node phase-node"><Zap size={24} aria-hidden="true"/><strong>{d.neuronRest}</strong><small>−70 mV</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><Zap size={24} aria-hidden="true"/><strong>{d.neuronDepolarization}</strong><small>Na⁺ in</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><Zap size={24} aria-hidden="true"/><strong>{d.neuronRepolarization}</strong><small>K⁺ out</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><Zap size={24} aria-hidden="true"/><strong>{d.neuronHyperpolarization}</strong></div></div>
      <figcaption>{d.neuronCaption}</figcaption>
    </> : kind === 'inflammation' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node systemic"><Flame size={24} aria-hidden="true"/><strong>{d.inflammationSigns}</strong></div></div>
      <figcaption>{d.inflammationCaption}</figcaption>
    </> : kind === 'endocrine' ? <>
      <div className="circuit-row"><div className="circuit-node blue-node"><Landmark size={24} aria-hidden="true"/><strong>{d.endocrineHypothalamus}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node pulmonary"><Landmark size={24} aria-hidden="true"/><strong>{d.endocrinePituitary}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node green-node"><Landmark size={24} aria-hidden="true"/><strong>{d.endocrineTarget}</strong></div></div>
      <figcaption>{d.endocrineCaption}</figcaption>
    </> : kind === 'embryo' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node blue-node"><Baby size={24} aria-hidden="true"/><strong>{d.embryoEctoderm}</strong><small>{d.embryoEctodermDesc}</small></div><div className="circuit-node systemic"><Baby size={24} aria-hidden="true"/><strong>{d.embryoMesoderm}</strong><small>{d.embryoMesodermDesc}</small></div><div className="circuit-node green-node"><Baby size={24} aria-hidden="true"/><strong>{d.embryoEndoderm}</strong><small>{d.embryoEndodermDesc}</small></div></div>
      <figcaption>{d.embryoCaption}</figcaption>
    </> : kind === 'dna' ? <>
      <div className="circuit-row"><div className="circuit-node blue-node"><Dna size={24} aria-hidden="true"/><strong>{d.dnaDominant}</strong></div><span className="operator" aria-hidden="true">×</span><div className="circuit-node systemic"><Dna size={24} aria-hidden="true"/><strong>{d.dnaRecessive}</strong></div></div>
      <div className="formula-result"><span>{d.dnaOffspring}</span><strong>AA · Aa · Aa · aa</strong><small>{d.dnaRatio}</small></div>
      <figcaption>{d.dnaCaption}</figcaption>
    </> : kind === 'immune' ? <>
      <div className="circuit-row"><div className="circuit-node blue-node"><ShieldCheck size={24} aria-hidden="true"/><strong>{d.immuneInnate}</strong><small>{d.immuneFast}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node green-node"><ShieldCheck size={24} aria-hidden="true"/><strong>{d.immuneAdaptive}</strong><small>{d.immuneSpecific}</small></div></div>
      <figcaption>{d.immuneCaption}</figcaption>
    </> : kind === 'microbe' ? <>
      <div className="circuit-row"><div className="circuit-node green-node"><Activity size={24} aria-hidden="true"/><strong>{d.microbeBacteria}</strong><small>{d.microbeOwnMetabolism}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node systemic"><Virus size={24} aria-hidden="true"/><strong>{d.microbeVirus}</strong><small>{d.microbeNeedsHost}</small></div></div>
      <figcaption>{d.microbeCaption}</figcaption>
    </> : kind === 'intestine' ? <>
      <div className="circuit-row"><div className="circuit-node green-node"><UtensilsCrossed size={24} aria-hidden="true"/><strong>{d.intestineVillus}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node blue-node"><Droplet size={24} aria-hidden="true"/><strong>{d.intestineCapillary}</strong><small>{d.intestineNutrients}</small></div></div>
      <figcaption>{d.intestineCaption}</figcaption>
    </> : kind === 'sarcomere' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node phase-node"><Dumbbell size={24} aria-hidden="true"/><strong>{d.sarcomereRelaxed}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node blue-node"><Zap size={24} aria-hidden="true"/><strong>{d.sarcomereCa}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node systemic"><Dumbbell size={24} aria-hidden="true"/><strong>{d.sarcomereContracted}</strong></div></div>
      <figcaption>{d.sarcomereCaption}</figcaption>
    </> : kind === 'ecg' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node blue-node"><Waves size={24} aria-hidden="true"/><strong>{d.ecgP}</strong><small>{d.ecgPAtrial}</small></div><div className="circuit-node systemic"><Activity size={24} aria-hidden="true"/><strong>{d.ecgQrs}</strong><small>{d.ecgQrsVentricular}</small></div><div className="circuit-node green-node"><Waves size={24} aria-hidden="true"/><strong>{d.ecgT}</strong><small>{d.ecgTVentricular}</small></div></div>
      <figcaption>{d.ecgCaption}</figcaption>
    </> : kind === 'pressure' ? <>
      <div className="circuit-row"><div className="circuit-node systemic"><Gauge size={24} aria-hidden="true"/><strong>{d.pressureArtery}</strong><small>120/80 mmHg</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node blue-node"><Droplet size={24} aria-hidden="true"/><strong>{d.pressureCapillary}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node green-node"><Gauge size={24} aria-hidden="true"/><strong>{d.pressureVein}</strong><small>~5 mmHg</small></div></div>
      <figcaption>{d.pressureCaption}</figcaption>
    </> : kind === 'adme' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node blue-node"><Pill size={24} aria-hidden="true"/><strong>{d.admeA}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node green-node"><Activity size={24} aria-hidden="true"/><strong>{d.admeD}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node systemic"><FlaskConical size={24} aria-hidden="true"/><strong>{d.admeM}</strong></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node phase-node"><Droplet size={24} aria-hidden="true"/><strong>{d.admeE}</strong></div></div>
      <figcaption>{d.admeCaption}</figcaption>
    </> : kind === 'incidence' ? <>
      <div className="circuit-row"><div className="circuit-node blue-node"><Users size={24} aria-hidden="true"/><strong>{d.incidenceNumerator}</strong></div><span className="operator" aria-hidden="true">÷</span><div className="circuit-node green-node"><Users size={24} aria-hidden="true"/><strong>{d.incidenceDenominator}</strong></div></div>
      <div className="formula-result"><span>{d.incidenceFormula}</span><strong>incidence</strong></div>
      <figcaption>{d.incidenceCaption}</figcaption>
    </> : kind === 'parasite' ? <>
      <div className="circuit-row"><div className="circuit-node blue-node"><Bug size={24} aria-hidden="true"/><strong>{d.parasiteProtozoa}</strong><small>{d.parasiteUnicellular}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node systemic"><Bug size={24} aria-hidden="true"/><strong>{d.parasiteHelminth}</strong><small>{d.parasiteWorms}</small></div></div>
      <figcaption>{d.parasiteCaption}</figcaption>
    </> : kind === 'brain' ? <>
      <div className="circuit-row"><div className="circuit-node blue-node"><Brain size={26} aria-hidden="true"/><strong>{d.brainCerebrum}</strong><small>{d.brainCerebrumDesc}</small></div><ArrowDown className="circuit-down" aria-hidden="true"/><div className="circuit-row"><div className="circuit-node systemic"><Brain size={24} aria-hidden="true"/><strong>{d.brainCerebellum}</strong><small>{d.brainCerebellumDesc}</small></div><div className="circuit-node green-node"><Brain size={24} aria-hidden="true"/><strong>{d.brainBrainstem}</strong><small>{d.brainBrainstemDesc}</small></div></div></div>
      <figcaption>{d.brainCaption}</figcaption>
    </> : kind === 'chest' ? <>
      <div className="circuit-row phase-row"><div className="circuit-node pulmonary"><Wind size={24} aria-hidden="true"/><strong>{d.chestLungs}</strong></div><div className="circuit-node systemic"><HeartPulse size={24} aria-hidden="true"/><strong>{d.chestHeart}</strong></div><div className="circuit-node blue-node"><Ribbon size={24} aria-hidden="true"/><strong>{d.chestGreatVessels}</strong></div></div>
      <figcaption>{d.chestCaption}</figcaption>
    </> : kind === 'neoplasia' ? <>
      <div className="circuit-row"><div className="circuit-node green-node"><Activity size={24} aria-hidden="true"/><strong>{d.neoBenign}</strong><small>{d.neoBenignDesc}</small></div><ArrowRight className="flow-arrow" aria-hidden="true"/><div className="circuit-node systemic"><Skull size={24} aria-hidden="true"/><strong>{d.neoMalignant}</strong><small>{d.neoMalignantDesc}</small></div></div>
      <figcaption>{d.neoCaption}</figcaption>
    </> : <>
      <div className="circuit-row"><div className="circuit-node blue-node"><BarChart3 size={24} aria-hidden="true"/><strong>{d.statsNull}</strong><small>{d.statsNullDesc}</small></div><span className="operator" aria-hidden="true">vs</span><div className="circuit-node green-node"><BarChart3 size={24} aria-hidden="true"/><strong>{d.statsAlt}</strong><small>{d.statsAltDesc}</small></div></div>
      <div className="formula-result"><span>{d.statsPvalue}</span><strong>p &lt; 0,05</strong></div>
      <figcaption>{d.statsCaption}</figcaption>
    </>}
  </figure>;
}
