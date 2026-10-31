import { useId } from 'react';

/** Original decorative heart-shaped illustration, not an anatomical diagram. */
export function HeartArt({ small = false }: { small?: boolean }) {
  const id = useId().replaceAll(':', '');
  return <svg className={small ? 'heart-art heart-small' : 'heart-art'} viewBox="0 0 220 220" fill="none" aria-hidden="true">
    <defs><linearGradient id={`${id}-heart`} x1="70" y1="70" x2="165" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#ed9b86"/><stop offset="1" stopColor="#ae554c"/></linearGradient><linearGradient id={`${id}-tube`} x1="96" y1="28" x2="145" y2="90"><stop stopColor="#8cb9b1"/><stop offset="1" stopColor="#4c827f"/></linearGradient></defs>
    <circle cx="110" cy="110" r="94" fill="#f0e5ce"/>
    <ellipse cx="115" cy="181" rx="50" ry="9" fill="#68554a" opacity=".1"/>
    <path d="M109 78V53c0-19 27-22 34-5l5 14" stroke={`url(#${id}-tube)`} strokeWidth="22" strokeLinecap="round"/>
    <path d="M100 76L86 44M91 55l-13-4M136 46l7-14" stroke="#779f98" strokeWidth="12" strokeLinecap="round"/>
    <path d="M72 85C57 103 66 139 89 161l27 24c25-18 49-41 50-68 1-21-11-39-29-39-13 0-20 6-26 16-9-16-27-22-39-9Z" fill={`url(#${id}-heart)`} stroke="#9b514c" strokeWidth="2"/>
    <path d="M109 96c13 23 14 53 7 87M111 113l-24 8M119 143l27-16" stroke="#f5b9a2" strokeWidth="4" strokeLinecap="round" opacity=".8"/>
    <path d="M70 94C50 88 48 73 62 68l26-1" stroke="#82aaa4" strokeWidth="13" strokeLinecap="round"/>
    <path d="M145 88l25-10M153 101l22-6" stroke="#d98a78" strokeWidth="11" strokeLinecap="round"/>
    <path d="M84 94c-10 10-8 25-2 34" stroke="#fff3d9" strokeOpacity=".4" strokeWidth="5" strokeLinecap="round"/>
    <circle cx="40" cy="113" r="4" fill="#8faba3"/><circle cx="175" cy="151" r="5" fill="#d5ad67"/><path d="M171 43v12m-6-6h12" stroke="#a8bbb0" strokeWidth="2" strokeLinecap="round"/>
  </svg>;
}
