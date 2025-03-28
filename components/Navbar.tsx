import Link from 'next/link';

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjAgMTBjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTBoLTVsNSA1di01YzUuNSAwIDEwLTQuNSAxMC0xMFMyNS41IDEwIDIwIDEweiIvPjx0ZXh0IHg9IjM1IiB5PSIyNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPlNLWTwvdGV4dD48L3N2Zz4=" alt="WandSky Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/destinations">Destinations</Link></li>
        <li><Link href="/tours">Tours</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      
      {/* 将按钮改为链接 */}
      <Link href="/auth" className="sign-in-btn">
        Sign in
      </Link>
    </nav>
  );
}