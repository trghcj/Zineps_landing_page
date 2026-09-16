import React from 'react';
import FloatingPhysicsNetwork, { PhysicsItemData } from '@/components/ui/FloatingPhysicsNetwork';

const realCarrierLogos: PhysicsItemData[] = [
  { id: 'bpost', name: 'Bpost', src: '/hero-bpost.svg', initialYOffset: -18 },
  { id: 'bol', name: 'Bol', src: '/hero-bol.svg', initialYOffset: 20 },
  { id: 'postnl', name: 'PostNL', src: '/hero-postnl.svg', initialYOffset: -24 },
  { id: 'temu', name: 'Temu', src: '/hero-temu.svg', initialYOffset: 15 },
  { id: 'dhl', name: 'DHL', src: '/hero-dhl.svg', initialYOffset: -19 },
  { id: 'amazon', name: 'Amazon', src: '/hero-amazon.svg', initialYOffset: 10 },
  { id: 'dpd', name: 'DPD', src: '/hero-dpd.svg', initialYOffset: -26 },
  { id: 'shopify', name: 'Shopify', src: '/hero-shopify.svg', initialYOffset: 14 },
  { id: 'correos', name: 'Correos', src: '/hero-correos.svg', initialYOffset: -25 },
  { id: 'ups', name: 'UPS', src: '/hero-ups.svg', initialYOffset: 24 },
  { id: 'magento', name: 'Magento', src: '/hero-magento.svg', initialYOffset: -20 },
  { id: 'gls', name: 'GLS', src: '/hero-gls.svg', initialYOffset: 14 },
  { id: 'woo', name: 'WooCommerce', src: '/hero-woo.svg', initialYOffset: -26 },
  { id: 'fedex', name: 'FedEx', src: '/hero-fedex.svg', initialYOffset: 17 },
];

const FloatingIcons: React.FC = () => {
  return <FloatingPhysicsNetwork items={realCarrierLogos} />;
};

export default FloatingIcons;
