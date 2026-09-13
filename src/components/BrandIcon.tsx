import type { Brand } from '../types';

type Props = { brand: Brand; size: number; className?: string };

export function BrandIcon({ brand, size, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={brand.path} />
    </svg>
  );
}
