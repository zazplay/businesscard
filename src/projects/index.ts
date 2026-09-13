import { CreditCard, KeyRound, Package } from 'lucide-react';
import { LockerProject } from './locker/LockerProject';
import { MarketplaceProject } from './marketplace/MarketplaceProject';
import { PaymentProject } from './payment/PaymentProject';

export const projects = [
  { id: 'pay', label: 'Self-service payment platform', icon: CreditCard, Content: PaymentProject },
  { id: 'lock', label: 'Smart equipment locker', icon: Package, Content: LockerProject },
  { id: 'market', label: 'Game-asset marketplace', icon: KeyRound, Content: MarketplaceProject },
] as const;

export type ProjectId = (typeof projects)[number]['id'];
