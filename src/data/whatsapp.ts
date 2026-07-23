// src/data/whatsapp.ts
const WHATSAPP_NUMBER = '5547999091282';
const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da OPEX Contabilidade e gostaria de falar com um especialista.';

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;