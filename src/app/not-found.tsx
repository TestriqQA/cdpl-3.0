import { Link } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#333' }}>404 - Page Not Found</h1>
        <p style={{ color: '#666' }}>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Go Home</Link>
      </div>
    </div>
  );
}
