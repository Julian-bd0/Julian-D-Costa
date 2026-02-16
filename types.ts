
// Import React to resolve React.ReactNode type references
import React from 'react';

export type ProjectCategory = 'All' | 'Logo' | 'Branding' | 'Print' | 'Social Media';

export interface PortfolioItem {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}