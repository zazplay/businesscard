import { CreditCard, KeyRound, Package, Utensils } from 'lucide-react';
import { LockerProject } from './locker/LockerProject';
import { MarketplaceProject } from './marketplace/MarketplaceProject';
import { MealsProject } from './meals/MealsProject';
import { PaymentProject } from './payment/PaymentProject';
import { LockerPreview, MarketplacePreview, MealsPreview, PaymentPreview } from './previews';

export const projects = [
  {
    id: 'pay',
    label: 'Self-service payment platform',
    caption: 'kiosk · cash · cards · QR',
    icon: CreditCard,
    Preview: PaymentPreview,
    Content: PaymentProject,
  },
  {
    id: 'lock',
    label: 'Smart equipment locker',
    caption: 'cabinet · SMS · dispatcher',
    icon: Package,
    Preview: LockerPreview,
    Content: LockerProject,
  },
  {
    id: 'market',
    label: 'Game-asset marketplace',
    caption: 'escrow · wallet · disputes',
    icon: KeyRound,
    Preview: MarketplacePreview,
    Content: MarketplaceProject,
  },
  {
    id: 'meals',
    label: 'Meal subscription service',
    caption: 'plans · renewals · kitchen',
    icon: Utensils,
    Preview: MealsPreview,
    Content: MealsProject,
  },
] as const;

export type ProjectId = (typeof projects)[number]['id'];
