import { lessonSchema } from '../src/contracts/learning';

export const parasitologyProtozoaLesson = lessonSchema.parse({
  id: 'parasitology-protozoa',
  revision: 1,
  questionId: 'parasitology-protozoa-classification',
  correctOptionId: 'unicellular',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'cdc-dpdx',
      title: 'CDC · DPDx — Laboratory Identification of Parasites',
      url: 'https://www.cdc.gov/dpdx/',
      section: 'Parasites of medical importance: protozoa and helminths',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Parasitologia',
      hook: 'Um parasita pode ser uma única célula ou um verme — como isso muda a doença?',
      title: 'Parasitos médicos: protozoários e helmintos',
      description: 'Classifique os parasitas em protozoários (unicelulares) e helmintos (vermes) e dê exemplos.',
      objective: 'Classificar parasitos médicos em protozoários unicelulares e helmintos multicelulares, citando Plasmodium e Ascaris como exemplos.',
      stages: [
        {
          id: 'protozoa',
          title: 'Protozoários: parasitas unicelulares',
          paragraphs: [
            'Protozoários são organismos de uma única célula que se multiplicam no hospedeiro. Exemplos: Plasmodium (malária), Giardia (diarreia) e Entamoeba.',
          ],
          takeaway: 'Protozoários = parasitas de uma célula só.',
          diagram: 'parasite',
        },
        {
          id: 'helminths',
          title: 'Helmintos: vermes multicelulares',
          paragraphs: [
            'Helmintos são vermes com corpo organizado em sistemas. Exemplos: Ascaris (lombriga), Taenia (solitária) e Schistosoma.',
            'Eles geralmente não se multiplicam dentro do hospedeiro; a carga parasitária vem da exposição repetida.',
          ],
          takeaway: 'Helmintos = vermes multicelulares, com ciclo de vida complexo.',
          diagram: 'parasite',
        },
        {
          id: 'transmission',
          title: 'Transmissão e diagnóstico',
          paragraphs: [
            'A transmissão pode ser por água/alimentos contaminados, picada de vetor (mosquito) ou contato com solo. O diagnóstico laboratorial busca o parasita ou seus ovos nas fezes, sangue ou urina.',
          ],
          takeaway: 'Diagnóstico parasitológico = procurar o parasita ou ovos em amostras clínicas.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'O que caracteriza os protozoários entre os parasitos médicos?',
        options: [
          {
            id: 'unicellular',
            label: 'São organismos de uma única célula que se multiplicam no hospedeiro',
            explanation: 'Correto: protozoários como o Plasmodium são unicelulares e se reproduzem dentro do hospedeiro, ao contrário dos helmintos.',
          },
          {
            id: 'worms',
            label: 'São vermes multicelulares',
            explanation: 'Não: vermes multicelulares são os helmintos, não os protozoários.',
          },
          {
            id: 'no-nucleus',
            label: 'Não têm núcleo',
            explanation: 'Não: protozoários são eucariotos — têm núcleo definido, ao contrário das bactéries.',
          },
          {
            id: 'photosynthesis',
            label: 'Fazem fotossíntese',
            explanation: 'Não: parasitos não fazem fotossíntese; eles obtêm nutrientes do hospedeiro.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'A parasite can be a single cell or a worm — how does that change the disease?',
      title: 'Medical parasites: protozoa and helminths',
      description: 'Classify parasites into protozoa (unicellular) and helminths (worms) and give examples.',
      objective: 'Classify medical parasites into unicellular protozoa and multicellular helminths, citing Plasmodium and Ascaris as examples.',
      stages: [
        {
          id: 'protozoa',
          title: 'Protozoa: unicellular parasites',
          paragraphs: [
            'Protozoa are single-celled organisms that multiply inside the host. Examples: Plasmodium (malaria), Giardia (diarrhea) and Entamoeba.',
          ],
          takeaway: 'Protozoa = parasites made of a single cell.',
          diagram: 'parasite',
        },
        {
          id: 'helminths',
          title: 'Helminths: multicellular worms',
          paragraphs: [
            'Helminths are worms with organized body systems. Examples: Ascaris (roundworm), Taenia (tapeworm) and Schistosoma.',
            'They usually do not multiply inside the host; the parasite load comes from repeated exposure.',
          ],
          takeaway: 'Helminths = multicellular worms with complex life cycles.',
          diagram: 'parasite',
        },
        {
          id: 'transmission',
          title: 'Transmission and diagnosis',
          paragraphs: [
            'Transmission can occur through contaminated water/food, vector bites (mosquitoes) or contact with soil. Laboratory diagnosis looks for the parasite or its eggs in stool, blood or urine.',
          ],
          takeaway: 'Parasitological diagnosis = finding the parasite or eggs in clinical samples.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What characterizes protozoa among medical parasites?',
        options: [
          {
            id: 'unicellular',
            label: 'They are single-celled organisms that multiply inside the host',
            explanation: 'Correct: protozoa such as Plasmodium are unicellular and reproduce inside the host, unlike helminths.',
          },
          {
            id: 'worms',
            label: 'They are multicellular worms',
            explanation: 'No: multicellular worms are helminths, not protozoa.',
          },
          {
            id: 'no-nucleus',
            label: 'They have no nucleus',
            explanation: 'No: protozoa are eukaryotes — they have a defined nucleus, unlike bacteria.',
          },
          {
            id: 'photosynthesis',
            label: 'They perform photosynthesis',
            explanation: 'No: parasites do not photosynthesize; they take nutrients from the host.',
          },
        ],
      },
    },
  },
});
