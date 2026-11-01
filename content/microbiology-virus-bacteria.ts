import { lessonSchema } from '../src/contracts/learning';

export const microbiologyVirusBacteriaLesson = lessonSchema.parse({
  id: 'microbiology-virus-bacteria',
  revision: 1,
  questionId: 'microbiology-virus-replication',
  correctOptionId: 'host-cell',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch6',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/6-1',
      section: 'Chapter 6 · Acellular Pathogens',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Microbiologia',
      hook: 'Por que antibióticos não funcionam contra gripe?',
      title: 'Bactéria vs vírus: célula viva ou partícula acelular',
      description: 'Compare a estrutura dos dois patógenos e entenda por que o vírus precisa de uma célula hospedeira.',
      objective: 'Diferenciar bactéria (célula viva) de vírus (partícula acelular) e explicar a replicação viral intracelular.',
      stages: [
        {
          id: 'bacteria',
          title: 'Bactéria é uma célula viva',
          paragraphs: [
            'A bactéria tem parede celular, membrana, ribossomos e metabolismo próprio: ela se alimenta, cresce e se divide sozinha. Por isso responde a antibióticos.',
          ],
          takeaway: 'Bactéria = célula completa, com metabolismo próprio.',
          diagram: 'microbe',
        },
        {
          id: 'virus',
          title: 'Vírus é uma partícula acelular',
          paragraphs: [
            'O vírus é só material genético (DNA ou RNA) dentro de uma cápsula proteica. Ele não tem ribossomos nem metabolismo e não se reproduz sozinho.',
          ],
          takeaway: 'Vírus = DNA/RNA + cápsula, sem metabolismo próprio.',
          diagram: 'microbe',
        },
        {
          id: 'replication',
          title: 'O vírus usa a máquina da célula',
          paragraphs: [
            'Para se multiplicar, o vírus invade uma célula hospedeira e usa os ribossomos dela para fabricar suas proteínas. A célula часто acaba rompida, liberando novos vírus.',
            'Antibióticos não funcionam contra vírus porque não há parede celular bacteriana para atacar.',
          ],
          takeaway: 'Vírus replica só dentro de célula viva — por isso antibiótico não adianta.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Por que os vírus precisam invadir uma célula hospedeira para se replicar?',
        options: [
          {
            id: 'host-cell',
            label: 'Porque não têm ribossomos nem metabolismo próprio',
            explanation: 'Correto: sem maquinaria própria, o vírus usa os ribossomos e a energia da célula hospedeira para montar novos vírions.',
          },
          {
            id: 'too-big',
            label: 'Porque são grandes demais para sair da célula',
            explanation: 'Não: o tamanho não é o motivo; o vírus é pequeno justamente porque carrega pouco material genético.',
          },
          {
            id: 'oxygen',
            label: 'Porque precisam de oxigênio apenas dentro da célula',
            explanation: 'Não: o vírus não respira; ele não usa oxigênio, pois não tem metabolismo.',
          },
          {
            id: 'hide',
            label: 'Apenas para se esconder do sistema imune',
            explanation: 'Não: embora possa escapar da resposta imune, a invasão celular existe porque o vírus precisa da maquinaria da célula para se copiar.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'Why don’t antibiotics work against the flu?',
      title: 'Bacteria vs virus: living cell or acellular particle',
      description: 'Compare the structure of both pathogens and see why viruses need a host cell.',
      objective: 'Tell bacteria (living cells) apart from viruses (acellular particles) and explain intracellular viral replication.',
      stages: [
        {
          id: 'bacteria',
          title: 'A bacterium is a living cell',
          paragraphs: [
            'A bacterium has a cell wall, membrane, ribosomes and its own metabolism: it feeds, grows and divides on its own. That is why it responds to antibiotics.',
          ],
          takeaway: 'Bacterium = a complete cell with its own metabolism.',
          diagram: 'microbe',
        },
        {
          id: 'virus',
          title: 'A virus is an acellular particle',
          paragraphs: [
            'A virus is only genetic material (DNA or RNA) inside a protein capsid. It has no ribosomes or metabolism and cannot reproduce on its own.',
          ],
          takeaway: 'Virus = DNA/RNA + capsid, with no metabolism of its own.',
          diagram: 'microbe',
        },
        {
          id: 'replication',
          title: 'The virus hijacks the cell’s machinery',
          paragraphs: [
            'To multiply, the virus invades a host cell and uses its ribosomes to build viral proteins. The cell often bursts, releasing new viruses.',
            'Antibiotics do not work on viruses because there is no bacterial cell wall to attack.',
          ],
          takeaway: 'Viruses replicate only inside a living cell — that is why antibiotics don’t help.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Why must viruses invade a host cell to replicate?',
        options: [
          {
            id: 'host-cell',
            label: 'Because they have no ribosomes or metabolism of their own',
            explanation: 'Correct: with no machinery of their own, viruses use the host cell’s ribosomes and energy to assemble new virions.',
          },
          {
            id: 'too-big',
            label: 'Because they are too big to leave the cell',
            explanation: 'No: size is not the reason; viruses are small precisely because they carry little genetic material.',
          },
          {
            id: 'oxygen',
            label: 'Because they need oxygen only inside the cell',
            explanation: 'No: viruses do not breathe; they do not use oxygen because they have no metabolism.',
          },
          {
            id: 'hide',
            label: 'Only to hide from the immune system',
            explanation: 'No: although they may evade the immune response, cell invasion happens because the virus needs the cell’s machinery to copy itself.',
          },
        ],
      },
    },
  },
});
