import { catalogSchema, type Catalog, type LessonCatalog } from '../src/contracts/learning';
import { cardiacOutputLesson } from './cardiac-output';
import { cardiacCycleLesson } from './cardiac-cycle';
import { cardiacOutputFormulaLesson } from './cardiac-output-formula';
import { histologyEpitheliumLesson } from './histology-epithelium';
import { biochemistryGlycolysisLesson } from './biochemistry-glycolysis';
import { cellMembraneLesson } from './cell-membrane';
import { anatomyBoneLesson } from './anatomy-bone';
import { respiratoryGasExchangeLesson } from './respiratory-gas-exchange';
import { renalFiltrationLesson } from './renal-filtration';
import { neuroActionPotentialLesson } from './neuro-action-potential';
import { pathologyInflammationLesson } from './pathology-inflammation';
import { endocrineAxisLesson } from './endocrine-axis';
import { embryologyGermLayersLesson } from './embryology-germ-layers';
import { geneticsInheritanceLesson } from './genetics-inheritance';
import { immunologyInnateAdaptiveLesson } from './immunology-innate-adaptive';
import { microbiologyVirusBacteriaLesson } from './microbiology-virus-bacteria';
import { digestiveAbsorptionLesson } from './digestive-absorption';
import { muscleContractionLesson } from './muscle-contraction';
import { cardiovascularEcgLesson } from './cardiovascular-ecg';
import { cardiovascularBloodPressureLesson } from './cardiovascular-blood-pressure';
import { pharmacologyAdmeLesson } from './pharmacology-adme';
import { epidemiologyIncidenceLesson } from './epidemiology-incidence';
import { parasitologyProtozoaLesson } from './parasitology-protozoa';
import { biophysicsTransportLesson } from './biophysics-transport';
import { neuroanatomyCnsLesson } from './neuroanatomy-cns';
import { anatomyThoraxLesson } from './anatomy-thorax';
import { renalAcidBaseLesson } from './renal-acid-base';
import { pathologyNeoplasiaLesson } from './pathology-neoplasia';
import { biostatisticsHypothesisLesson } from './biostatistics-hypothesis';
import { endocrinePancreasLesson } from './endocrine-pancreas';

const section = (id: string, pt: string, en: string, lessonIds: string[]) => ({
  id,
  translations: { 'pt-BR': { title: pt }, en: { title: en } },
  lessonIds,
});

export const catalog: Catalog = catalogSchema.parse({
  course: {
    id: 'basic-cycle',
    translations: {
      'pt-BR': {
        title: 'Ciclo básico — 1º e 2º ano de medicina',
        description: 'Fundamentos e sistemas do ciclo básico, um conceito de cada vez.',
      },
      en: {
        title: 'Basic cycle — 1st and 2nd year of medical school',
        description: 'Foundations and systems of the basic cycle, one concept at a time.',
      },
    },
    sections: [
      section('cardio-physiology', '01 · Fisiologia cardiovascular', '01 · Cardiovascular physiology', ['cardiac-output', 'cardiac-output-formula', 'cardiac-cycle', 'cardiovascular-ecg', 'cardiovascular-blood-pressure']),
      section('histology', '02 · Histologia', '02 · Histology', ['histology-epithelium']),
      section('biochemistry', '03 · Bioquímica', '03 · Biochemistry', ['biochemistry-glycolysis']),
      section('cell-biology', '04 · Biologia celular', '04 · Cell biology', ['cell-membrane']),
      section('anatomy', '05 · Anatomia', '05 · Anatomy', ['anatomy-bone', 'anatomy-thorax']),
      section('respiratory-physiology', '06 · Fisiologia respiratória', '06 · Respiratory physiology', ['respiratory-gas-exchange']),
      section('renal-physiology', '07 · Fisiologia renal', '07 · Renal physiology', ['renal-filtration', 'renal-acid-base']),
      section('neurophysiology', '08 · Neurofisiologia', '08 · Neurophysiology', ['neuro-action-potential']),
      section('general-pathology', '09 · Patologia geral', '09 · General pathology', ['pathology-inflammation', 'pathology-neoplasia']),
      section('endocrine-physiology', '10 · Fisiologia endócrina', '10 · Endocrine physiology', ['endocrine-axis', 'endocrine-pancreas']),
      section('embryology', '11 · Embriologia', '11 · Embryology', ['embryology-germ-layers']),
      section('genetics', '12 · Genética', '12 · Genetics', ['genetics-inheritance']),
      section('immunology', '13 · Imunologia', '13 · Immunology', ['immunology-innate-adaptive']),
      section('microbiology', '14 · Microbiologia', '14 · Microbiology', ['microbiology-virus-bacteria']),
      section('digestive-physiology', '15 · Fisiologia digestiva', '15 · Digestive physiology', ['digestive-absorption']),
      section('muscle-physiology', '16 · Fisiologia muscular', '16 · Muscle physiology', ['muscle-contraction']),
      section('pharmacology', '17 · Farmacologia geral', '17 · General pharmacology', ['pharmacology-adme']),
      section('epidemiology', '18 · Epidemiologia e bioestatística', '18 · Epidemiology and biostatistics', ['epidemiology-incidence', 'biostatistics-hypothesis']),
      section('parasitology', '19 · Parasitologia', '19 · Parasitology', ['parasitology-protozoa']),
      section('biophysics', '20 · Biofísica', '20 · Biophysics', ['biophysics-transport']),
      section('neuroanatomy', '21 · Neuroanatomia', '21 · Neuroanatomy', ['neuroanatomy-cns']),
    ],
  },
  lessons: [
    cardiacOutputLesson,
    cardiacOutputFormulaLesson,
    cardiacCycleLesson,
    histologyEpitheliumLesson,
    biochemistryGlycolysisLesson,
    cellMembraneLesson,
    anatomyBoneLesson,
    respiratoryGasExchangeLesson,
    renalFiltrationLesson,
    neuroActionPotentialLesson,
    pathologyInflammationLesson,
    endocrineAxisLesson,
    embryologyGermLayersLesson,
    geneticsInheritanceLesson,
    immunologyInnateAdaptiveLesson,
    microbiologyVirusBacteriaLesson,
    digestiveAbsorptionLesson,
    muscleContractionLesson,
    cardiovascularEcgLesson,
    cardiovascularBloodPressureLesson,
    pharmacologyAdmeLesson,
    epidemiologyIncidenceLesson,
    parasitologyProtozoaLesson,
    biophysicsTransportLesson,
    neuroanatomyCnsLesson,
    anatomyThoraxLesson,
    renalAcidBaseLesson,
    pathologyNeoplasiaLesson,
    biostatisticsHypothesisLesson,
    endocrinePancreasLesson,
  ],
});

export const lessons: LessonCatalog = catalog.lessons;
export const course = catalog.course;

export {
  cardiacOutputLesson,
  cardiacCycleLesson,
  cardiacOutputFormulaLesson,
  histologyEpitheliumLesson,
  biochemistryGlycolysisLesson,
  cellMembraneLesson,
  anatomyBoneLesson,
  respiratoryGasExchangeLesson,
  renalFiltrationLesson,
  neuroActionPotentialLesson,
  pathologyInflammationLesson,
  endocrineAxisLesson,
  embryologyGermLayersLesson,
  geneticsInheritanceLesson,
  immunologyInnateAdaptiveLesson,
  microbiologyVirusBacteriaLesson,
  digestiveAbsorptionLesson,
  muscleContractionLesson,
  cardiovascularEcgLesson,
  cardiovascularBloodPressureLesson,
  pharmacologyAdmeLesson,
  epidemiologyIncidenceLesson,
  parasitologyProtozoaLesson,
  biophysicsTransportLesson,
  neuroanatomyCnsLesson,
  anatomyThoraxLesson,
  renalAcidBaseLesson,
  pathologyNeoplasiaLesson,
  biostatisticsHypothesisLesson,
  endocrinePancreasLesson,
};
export type { LessonCatalog };
