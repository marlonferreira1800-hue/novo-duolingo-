import { createServerSupabaseClient } from '@/auth/server';
import { isSupabaseConfigured } from '@/auth/config';
import { reviewDecisionSchema } from '@/contracts/data';
import { lessons } from '../../../../content';

export const dynamic = 'force-dynamic';

// D8: human medical review interface. Only a qualified human reviewer should access this.
// Agents never approve clinical content. This page just records the human decision.
export default async function ReviewPage() {
  if (!isSupabaseConfigured()) {
    return <main style={{ maxWidth: 600, margin: '4rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Revisão médica (D8)</h1>
      <p role="status">Supabase não está configurado neste ambiente. Configure <code>SUPABASE_URL</code> e <code>SUPABASE_ANON_KEY</code> no <code>.env</code> para habilitar login e registro de revisão.</p>
      <p><a href="/">← Voltar</a></p>
    </main>;
  }
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return <main style={{ maxWidth: 600, margin: '4rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Revisão médica</h1>
      <p>Faça <a href="/login">login</a> para acessar a área de revisão.</p>
    </main>;
  }

  return <main style={{ maxWidth: 720, margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
    <h1>Revisão médica/editorial (D8)</h1>
    <p role="note">Somente revisor humano qualificado pode aprovar conteúdo clínico. Agentes não aprovam.</p>
    <section>
      <h2>Lições no catálogo (todas <code>demo-unreviewed</code>)</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <strong>{lesson.id}</strong> (rev {lesson.revision}) — status: <code>{lesson.status}</code>
            {' '}— fonte: {lesson.sources[0]?.title}
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Registrar decisão de revisão</h2>
      <p>Preencha o formulário abaixo após revisar o conteúdo. A decisão fica registrada em <code>review_decisions</code>.</p>
      <form action={async (formData: FormData) => {
        'use server';
        const supabase = await createServerSupabaseClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const decision = reviewDecisionSchema.parse({
          id: crypto.randomUUID(),
          contentRevisionId: String(formData.get('contentRevisionId') ?? ''),
          locale: String(formData.get('locale') ?? 'pt-BR'),
          reviewerId: user.id,
          decision: String(formData.get('decision') ?? 'changes_requested'),
          notes: String(formData.get('notes') ?? '') || undefined,
          decidedAt: new Date().toISOString(),
        });
        await supabase.from('review_decisions').insert({
          id: decision.id,
          content_revision_id: decision.contentRevisionId,
          locale: decision.locale,
          reviewer_id: decision.reviewerId,
          decision: decision.decision,
          notes: decision.notes,
          decided_at: decision.decidedAt,
        });
      }} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>ID da revisão de conteúdo<input name="contentRevisionId" required /></label>
        <label>Idioma
          <select name="locale"><option value="pt-BR">pt-BR</option><option value="en">en</option></select>
        </label>
        <label>Decisão
          <select name="decision">
            <option value="approved">approved</option>
            <option value="rejected">rejected</option>
            <option value="changes_requested">changes_requested</option>
          </select>
        </label>
        <label>Notas (opcional)<textarea name="notes" rows={3} /></label>
        <button type="submit" style={{ padding: '0.6rem', borderRadius: 6, border: 'none', background: '#111', color: '#fff' }}>
          Registrar decisão
        </button>
      </form>
    </section>
  </main>;
}
