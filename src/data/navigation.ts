export interface NavItem {
  label: string
  labelNL: string
  href?: string
  children?: NavChild[]
}

export interface NavChild {
  label: string
  labelNL: string
  description?: string
  descriptionNL?: string
  href: string
  badge?: string
  badgeColor?: 'blue' | 'yellow'
}

export const navItems: NavItem[] = [
  {
    label: 'Products',
    labelNL: 'Producten',
    children: [
      { label: 'Shipping', labelNL: 'Verzending', description: 'Multi-carrier label generation & rules', descriptionNL: 'Multi-carrier labelgeneratie & regels', href: '#products' },
      { label: 'Tracking', labelNL: 'Tracking', description: 'Branded tracking & status updates', descriptionNL: 'Branded tracking & status updates', href: '#products' },
      { label: 'Returns', labelNL: 'Retouren', description: 'Automated reverse logistics portal', descriptionNL: 'Geautomatiseerd retourportaal', href: '#products' },
      { label: 'Analytics', labelNL: 'Analytics', description: 'Real-time spend & SLA insights', descriptionNL: 'Realtime kosten- en SLA-inzichten', href: '#os' },
      { label: 'Shipping AI', labelNL: 'Shipping AI', description: 'Dynamic route & rate optimization', descriptionNL: 'Dynamische route- en tariefoptimalisatie', href: '#ai', badge: 'Intelligence', badgeColor: 'blue' },
      { label: 'Partner Platform', labelNL: 'Partnerplatform', description: 'Operating system for 3PLs & brokers', descriptionNL: 'Besturingssysteem voor 3PLs', href: '#partners' },
    ],
  },
  {
    label: 'Solutions',
    labelNL: 'Oplossingen',
    children: [
      { label: 'For Businesses That Ship', labelNL: 'Voor verzendende bedrijven', description: 'Fast-growing eCommerce & wholesale', descriptionNL: 'Snelgroeiende e-commerce & groothandel', href: '#two-sided-network' },
      { label: 'For Logistics Partners', labelNL: 'Voor logistieke partners', description: 'Freight forwarders, brokers & 3PLs', descriptionNL: 'Expediteurs, brokers & 3PLs', href: '#two-sided-network' },
      { label: 'For eCommerce Stores', labelNL: 'Voor webshops', description: 'Shopify, WooCommerce, Magento & marketplaces', descriptionNL: 'Naadloze koppeling met webshops', href: '#workflow' },
      { label: 'For Enterprise Logistics', labelNL: 'Voor enterprise logistiek', description: 'Custom ERP/WMS API & hybrid carrier deals', descriptionNL: 'Maatwerk ERP/WMS koppelingen', href: '#enterprise-sla' },
    ],
  },
  { label: 'Network', labelNL: 'Netwerk', href: '#network-flywheel' },
  { label: 'Integrations', labelNL: 'Integraties', href: '#integrations' },
  { label: 'Pricing', labelNL: 'Tarieven', href: '#rates' },
  { label: 'FAQ', labelNL: 'FAQ', href: '#faq' },
]

export interface Language {
  code: string
  flag: string
  label: string
}

export const languages: Language[] = [
  { code: 'en', flag: '🇬🇧', label: 'English (EN)' },
  { code: 'nl', flag: '🇳🇱', label: 'Nederlands (NL)' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch (DE)' },
  { code: 'es', flag: '🇪🇸', label: 'Español (ES)' },
]

export const footerLinks = {
  products: [
    { label: 'Shipping Engine', labelNL: 'Verzendengine', href: '#products' },
    { label: 'Rate Intelligence', labelNL: 'Tarieven Intelligentie', href: '#rates' },
    { label: 'Shipping AI Copilot', labelNL: 'Shipping AI Copilot', href: '#ai' },
    { label: 'Returns Portal', labelNL: 'Retourportaal', href: '#products' },
    { label: 'Partner Operating System', labelNL: 'Partner Besturingssysteem', href: '#partners' },
    { label: 'API & Developer Hub', labelNL: 'API & Documentatie', href: '#integrations' },
  ],
  solutions: [
    { label: 'E-commerce Retailers', labelNL: 'E-commerce retailers', href: '#two-sided-network' },
    { label: 'Logistics Service Providers', labelNL: 'Logistieke dienstverleners', href: '#partners' },
    { label: 'Freight Brokers', labelNL: 'Vrachtmakelaars', href: '#partners' },
    { label: 'B2B & Wholesale Transport', labelNL: 'B2B & groothandel', href: '#workflow' },
  ],
  company: [
    { label: 'About Zineps', labelNL: 'Over Zineps', href: '#' },
    { label: 'Network Flywheel', labelNL: 'Netwerk Flywheel', href: '#network-flywheel' },
    { label: 'Customer Stories', labelNL: 'Klantverhalen', href: '#testimonials' },
    { label: 'Careers', labelNL: 'Vacatures', href: '#' },
    { label: 'Privacy Policy', labelNL: 'Privacybeleid', href: '#' },
    { label: 'Terms & Conditions', labelNL: 'Algemene voorwaarden', href: '#' },
  ],
  contact: {
    email: 'info@zineps.com',
    phone: '+31 20 261 4474',
    address1: 'Herikerbergweg 288',
    address2: '1101CT, Amsterdam, The Netherlands',
  },
}
