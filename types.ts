import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}