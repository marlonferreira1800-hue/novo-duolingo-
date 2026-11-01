'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Brain, Plus, RotateCcw, ShieldCheck, Sparkles, Undo2, ZoomIn, ZoomOut } from 'lucide-react';
import type { Locale } from '@/contracts/learning';

type NodeCategory = 'symptom' | 'mechanism' | 'hypothesis' | 'evidence';

interface CanvasNode {
  id: string;
  category: NodeCategory;
  title: string;
  detail: string;
}

const INITIAL_NODES: Record<Locale, CanvasNode[]> = {
  'pt-BR': [
    {
      id: 'node-1',
      category: 'symptom',
      title: 'Queda do Débito Cardíaco (DC)',
      detail: 'Redução do volume ejetado por minuto (DC = FC × VS), levando a hipoperfusão tecidual.',
    },
    {
      id: 'node-2',
      category: 'mechanism',
      title: 'Lei de Frank-Starling & Pré-carga',
      detail: 'O estiramento diastólico ventricular regula a força de contração sarcomérica (actina-miosina).',
    },
    {
      id: 'node-3',
      category: 'hypothesis',
      title: 'Compensação Simpática (Barorreflexo)',
      detail: 'Aumento reflexo da frequência cardíaca (FC) e da resistência vascular periférica.',
    },
    {
      id: 'node-4',
      category: 'evidence',
      title: 'OpenStax Anatomy & Physiology 2e · Ch. 19',
      detail: 'Em repouso: FC ≈ 75 bpm e VS ≈ 70 mL/batimento → DC ≈ 5,25 L/min.',
    },
  ],
  en: [
    {
      id: 'node-1',
      category: 'symptom',
      title: 'Decreased Cardiac Output (CO)',
      detail: 'Reduction in blood volume ejected per minute (CO = HR × SV), leading to tissue hypoperfusion.',
    },
    {
      id: 'node-2',
      category: 'mechanism',
      title: 'Frank-Starling Law & Preload',
      detail: 'Ventricular end-diastolic stretch regulates sarcomeric contraction force (actin-myosin overlap).',
    },
    {
      id: 'node-3',
      category: 'hypothesis',
      title: 'Sympathetic Compensation (Baroreflex)',
      detail: 'Reflex increase in heart rate (HR) and systemic vascular resistance.',
    },
    {
      id: 'node-4',
      category: 'evidence',
      title: 'OpenStax Anatomy & Physiology 2e · Ch. 19',
      detail: 'At rest: HR ≈ 75 bpm and SV ≈ 70 mL/beat → CO ≈ 5.25 L/min.',
    },
  ],
};

export function CanvasPage({ studyLocale }: { studyLocale: Locale }) {
  const t = useTranslations('app');
  const [customNodes, setCustomNodes] = useState<CanvasNode[]>([]);
  const [zoom, setZoom] = useState(100);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState<NodeCategory>('mechanism');

  const nodes = [...INITIAL_NODES[studyLocale], ...customNodes];

  function addNode() {
    const trimmed = input.trim();
    if (trimmed.length < 3) return;
    const newNode: CanvasNode = {
      id: `custom-${Date.now()}`,
      category,
      title: trimmed.slice(0, 70),
      detail:
        studyLocale === 'pt-BR'
          ? 'Nó de raciocínio em paralelo adicionado pelo estudante (rascunho não revisado).'
          : 'Parallel reasoning node added by student (unreviewed draft).',
    };
    setCustomNodes((prev) => [...prev, newNode]);
    setInput('');
  }

  function undoLast() {
    setCustomNodes((prev) => prev.slice(0, -1));
  }

  function categoryLabel(cat: NodeCategory): string {
    switch (cat) {
      case 'symptom':
        return t('canvasCategorySymptom');
      case 'mechanism':
        return t('canvasCategoryMechanism');
      case 'hypothesis':
        return t('canvasCategoryHypothesis');
      case 'evidence':
        return t('canvasCategoryEvidence');
    }
  }

  return (
    <section className="canvas-page" data-testid="canvas-page">
      <header className="canvas-header">
        <div>
          <span className="eyebrow">
            <Brain size={15} aria-hidden="true"/> {t('canvas')}
          </span>
          <h1>{t('canvasHeading')}</h1>
          <p className="page-description">{t('canvasDescription')}</p>
        </div>

        <div className="canvas-toolbar" role="toolbar" aria-label={t('canvasHeading')}>
          <button
            type="button"
            className="icon-button"
            data-testid="canvas-zoom-out"
            aria-label={t('canvasZoomOut')}
            onClick={() => setZoom((z) => Math.max(70, z - 10))}
          >
            <ZoomOut size={16} aria-hidden="true"/>
          </button>
          <span className="canvas-zoom-indicator" data-testid="canvas-zoom-value">
            {zoom}%
          </span>
          <button
            type="button"
            className="icon-button"
            data-testid="canvas-zoom-in"
            aria-label={t('canvasZoomIn')}
            onClick={() => setZoom((z) => Math.min(130, z + 10))}
          >
            <ZoomIn size={16} aria-hidden="true"/>
          </button>
          <button
            type="button"
            className="icon-button"
            data-testid="canvas-reset"
            aria-label={t('canvasReset')}
            onClick={() => setZoom(100)}
          >
            <RotateCcw size={16} aria-hidden="true"/>
          </button>
          <button
            type="button"
            className="icon-button"
            data-testid="canvas-undo"
            aria-label={t('canvasUndo')}
            disabled={customNodes.length === 0}
            onClick={undoLast}
          >
            <Undo2 size={16} aria-hidden="true"/>
          </button>
        </div>
      </header>

      <div className="canvas-banner">
        <Sparkles size={15} aria-hidden="true"/>
        <span>{t('canvasThinkParallel')}</span>
        <span className="canvas-badge">
          <ShieldCheck size={13} aria-hidden="true"/> {t('demo')}
        </span>
      </div>

      <div className="canvas-board" data-testid="canvas-board">
        <div
          className="canvas-grid"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
        >
          {nodes.map((node) => (
            <article
              key={node.id}
              className={`canvas-node canvas-node-${node.category}`}
              data-testid={`canvas-node-${node.id}`}
              lang={studyLocale}
            >
              <span className="canvas-node-tag">{categoryLabel(node.category)}</span>
              <h3>{node.title}</h3>
              <p>{node.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="canvas-composer">
        <select
          className="canvas-category-select"
          data-testid="canvas-category"
          aria-label={t('canvasAddNode')}
          value={category}
          onChange={(e) => setCategory(e.target.value as NodeCategory)}
        >
          <option value="symptom">{t('canvasCategorySymptom')}</option>
          <option value="mechanism">{t('canvasCategoryMechanism')}</option>
          <option value="hypothesis">{t('canvasCategoryHypothesis')}</option>
          <option value="evidence">{t('canvasCategoryEvidence')}</option>
        </select>
        <input
          type="text"
          className="canvas-input"
          data-testid="canvas-input"
          aria-label={t('canvasAddNodePlaceholder')}
          placeholder={t('canvasAddNodePlaceholder')}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={140}
        />
        <button
          type="button"
          className="button primary"
          data-testid="canvas-add"
          disabled={input.trim().length < 3}
          onClick={addNode}
        >
          <Plus size={16} aria-hidden="true"/>
          {t('canvasAddNode')}
        </button>
      </div>
    </section>
  );
}
