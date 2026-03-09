export function FilmIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="36" height="32" rx="2" />
      <line x1="6" y1="16" x2="42" y2="16" />
      <line x1="6" y1="32" x2="42" y2="32" />
      <line x1="14" y1="8" x2="14" y2="16" />
      <line x1="22" y1="8" x2="22" y2="16" />
      <line x1="30" y1="8" x2="30" y2="16" />
      <line x1="14" y1="32" x2="14" y2="40" />
      <line x1="22" y1="32" x2="22" y2="40" />
      <line x1="30" y1="32" x2="30" y2="40" />
    </svg>
  );
}

export function TvIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="40" height="28" rx="2" />
      <polyline points="18,6 24,10 30,6" />
      <line x1="4" y1="32" x2="44" y2="32" />
    </svg>
  );
}

export function ClapperboardIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h36v22a2 2 0 01-2 2H8a2 2 0 01-2-2V18z" />
      <path d="M6 18l4-12h28l4 12" />
      <line x1="16" y1="6" x2="12" y2="18" />
      <line x1="26" y1="6" x2="22" y2="18" />
      <line x1="36" y1="6" x2="32" y2="18" />
    </svg>
  );
}

export function PlusIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="10" y1="4" x2="10" y2="16" />
      <line x1="4" y1="10" x2="16" y2="10" />
    </svg>
  );
}

export function TrashIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h12" />
      <path d="M5 4V2.5A.5.5 0 015.5 2h5a.5.5 0 01.5.5V4" />
      <path d="M3 4l1 10a1 1 0 001 1h6a1 1 0 001-1l1-10" />
    </svg>
  );
}

export function EditIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.5 1.5l3 3L5 14H2v-3L11.5 1.5z" />
    </svg>
  );
}

const iconMap = { film: FilmIcon, tv: TvIcon, clapperboard: ClapperboardIcon };

export function WorkIcon({ name = 'film', size = 48 }) {
  const Icon = iconMap[name] || FilmIcon;
  return <Icon size={size} />;
}
