import { ReactNode } from 'react';

export default function FooterIcon({
  type,
  children,
  text,
}: {
  type: string;
  children: ReactNode;
  text: string;
}) {
  return (
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="transition flex items-center gap-2"
    >
      <span className="sr-only">{type}</span>
      <div className="w-9 h-9 bg-primary-97 border-2 border-dark-15 rounded-lg p-1.5 flex items-center justify-center">
        {children}
      </div>

      <p className="text-dark-15 font-medium text-base">{text}</p>
    </a>
  );
}
