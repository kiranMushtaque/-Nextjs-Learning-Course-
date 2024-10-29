import Link from 'next/link';

export default function SideNav() {
  return (
    <nav>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/customers">Customers</Link></li>
        <li><Link href="/dashboard/invoices">Invoices</Link></li>
      </ul>
    </nav>
  );
}
