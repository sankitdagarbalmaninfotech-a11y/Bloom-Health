import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center group">
      <Image
        src="/Logo.svg"
        alt="Bloom Health Logo"
        width={120}
        height={50}
        className="h-auto w-auto object-contain group-hover:opacity-90 transition-opacity"
        priority
      />
    </Link>
  );
}
