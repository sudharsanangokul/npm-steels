import { products, services } from './data';
import type { NavItem } from './types';

const productSublinks = products.map(p => ({
  label: p.title,
  href: `/products#${p.slug}`,
  description: p.description,
  image: p.image,
}));

const serviceSublinks = services.map(s => ({
  label: s.title,
  href: `/services#${s.id}`,
  description: s.description,
  image: s.image,
}));

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Products', 
    href: '/products', 
    sublinks: productSublinks
  },
  { 
    label: 'Services', 
    href: '/services',
    sublinks: serviceSublinks
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'AI Assistant', href: '/ai-quote-assistant' },
  { label: 'Contact', href: '/contact' },
];

export const COMPANY_INFO = {
  name: 'NTM Metals',
  address: '123 Steel Road, Industrial Area, Metalburg, 45678',
  phone: '+1 (234) 567-8900',
  whatsapp: '+12345678900',
  email: 'sales@ntmmetals.com',
  supportHours: 'Mon-Sat: 9:00 AM - 7:00 PM',
};
