export interface ServicePlan {
  title: string;
  price: string;
  features: string[];
  period?: string;
  deliveryTime?: string;
  supportTime?: string;
  revisions?: string;
  ctaText?: string;
  note?: string;
}

export interface ServiceCategory {
  title: string;
  description?: string;
  note?: string;
  plans: ServicePlan[];
}