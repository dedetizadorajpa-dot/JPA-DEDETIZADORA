import { Bug, Rat, ShieldCheck, Droplets, Home, Users, SprayCan, HardHat } from "lucide-react";
import { ServiceItem, FaqItem, TestimonialItem } from "./types";

export const WHATSAPP_NUMBER = "5521966855159";
export const WHATSAPP_DISPLAY = "(21) 96685-5159";
export const WHATSAPP_SECONDARY = "5521974112888";
export const INSTAGRAM_URL = "https://www.instagram.com/jpadedetizadora/";
export const GOOGLE_REVIEWS_URL = "https://bit.ly/GoogleJPA-Reviews"; 
export const WHATSAPP_MESSAGE = "Olá! Vi o site da JPA e gostaria de um orçamento para controle de pragas.";

export const SERVICES: ServiceItem[] = [
  {
    id: "controle-pragas",
    title: "Dedetização Geral",
    description: "Controle eficaz de Cupins, Ratos, Baratas, Percevejos e Formigas. Método seguro para sua família.",
    icon: Bug,
  },
  {
    id: "sanitizacao",
    title: "Sanitização & COVID",
    description: "Nebulização de ambientes para eliminação de vírus e bactérias. Segurança sanitária comprovada.",
    icon: SprayCan,
  },
  {
    id: "limpeza-reservatorios",
    title: "Limpeza de Caixas d'Água",
    description: "Higienização completa de reservatórios e cisternas com laudo de análise bacteriológica incluso.",
    icon: Droplets,
  },
  {
    id: "terceirizacao",
    title: "Terceirização de Serviços",
    description: "Mão de obra qualificada: Portaria, Recepcionistas e Auxiliar de Serviços Gerais (ASG).",
    icon: Users,
  },
  {
    id: "descupinizacao",
    title: "Descupinização Avançada",
    description: "Barreira química para proteção de móveis e estruturas. Tratamento curativo e preventivo.",
    icon: Home,
  },
  {
    id: "servicos-gerais",
    title: "Conservação Predial",
    description: "Equipes treinadas para manutenção e conservação de condomínios e empresas.",
    icon: HardHat,
  },
];

export const CLIENTS_LIST = [
  "Corpo de Bombeiros (24º GBM)",
  "Rede Economia (21 Lojas)",
  "Tamoio Mineradora",
  "Rede de Clínicas Despertare",
  "Curso Zion",
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Comandante do 24º GBM",
    role: "Corpo de Bombeiros RJ",
    text: "A JPA realiza a manutenção do nosso quartel com excelência. Se confiamos a segurança sanitária da nossa tropa a eles, você também pode confiar.",
    rating: 5,
  },
  {
    id: 2,
    name: "Gerência Operacional",
    role: "Rede Economia",
    text: "Atendem nossas 21 lojas com rapidez. No setor alimentício não podemos ter falhas, e a JPA garante nossa tranquilidade com a vigilância.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dra. Cláudia",
    role: "Clínica Despertare",
    text: "O método sem cheiro é fundamental para nossa clínica. Eles fazem o serviço e logo depois já podemos atender os pacientes com segurança.",
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "O método Tripla Ação é perigoso para animais?",
    answer: "Não. Nossos produtos são domissanitários e aplicados de forma estratégica. Após a secagem (que é rápida), o ambiente é seguro para pets e crianças.",
  },
  {
    question: "Vocês atendem em quais bairros?",
    answer: "Atendemos todo o Rio de Janeiro, com foco na Zona Oeste (JPA, Barra, Recreio), Zona Sul e Tijuca. Chegamos rápido em casos de urgência.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia estendida com certificado. Caso o problema persista dentro do prazo (o que é raro devido à Tripla Ação), retornamos sem custo.",
  },
  {
    question: "A empresa possui licença?",
    answer: "Sim! Somos licenciados pelo INEA, Vigilância Sanitária e possuímos Responsável Técnico (Biólogo) registrado no CRBio.",
  },
];