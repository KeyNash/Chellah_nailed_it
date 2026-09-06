export type GalleryCategory = 'nails' | 'braids' | 'locs'

export const services = [
  { name: 'Nail artistry', detail: 'Gel, tips, builder gel, gum gel and acrylic finishes.' },
  { name: 'Braids', detail: 'Braids and knotless styles finished to suit your look.' },
  { name: 'Loc styling', detail: 'Dreadlock styling and care with a clean, considered finish.' },
]

export const prices = [
  { name: 'Gel', price: 'KSh 400', group: 'Nails' },
  { name: 'Tips and gel', price: 'KSh 700', group: 'Nails' },
  { name: 'Builder gel', price: 'KSh 700', group: 'Nails' },
  { name: 'Gum gel nails', price: 'KSh 700', group: 'Nails' },
  { name: 'Acrylics', price: 'KSh 1,000', group: 'Nails' },
  { name: 'Dreadlocks', price: 'KSh 500', group: 'Hair' },
  { name: 'Knotless braids', price: 'KSh 800', group: 'Hair' },
  { name: 'Braids', price: 'KSh 800', group: 'Hair' },
]

export const gallery = [
  { src: '/assets/04c195fd851adfe31024d2994aca18cb.png', category: 'nails' as const, alt: 'Colourful sculpted nail design by Chellah Nailed It' },
  { src: '/assets/140b78f7464381b3e67a2681e9c10a72.png', category: 'nails' as const, alt: 'Detailed nail set by Chellah Nailed It' },
  { src: '/assets/7af55bb1cb579e07a83ddff0b459c724.png', category: 'nails' as const, alt: 'Statement nail art by Chellah Nailed It' },
  { src: '/assets/85b6046eeae638dfc69ea7f1a8878114.png', category: 'nails' as const, alt: 'Glossy nail finish by Chellah Nailed It' },
  { src: '/assets/9a0bf1c3fa46ad42e0e72c7f206c7945.png', category: 'nails' as const, alt: 'Creative manicure by Chellah Nailed It' },
  { src: '/assets/a7ee7037f3bac0a4a6aea5f0de141f91.png', category: 'nails' as const, alt: 'Custom nail design by Chellah Nailed It' },
  { src: '/assets/ac970c39766ec37fe83c93c7d0a7c6aa.png', category: 'nails' as const, alt: 'Polished nail set by Chellah Nailed It' },
  { src: '/assets/c782fbde607f3521fe3fd8aa93330c21.png', category: 'nails' as const, alt: 'French-tip inspired nails by Chellah Nailed It' },
  { src: '/assets/cdf7a4ded29dae771f9c7199c4d0976c.png', category: 'nails' as const, alt: 'Pink manicure by Chellah Nailed It' },
  { src: '/assets/braids (1).jpeg', category: 'braids' as const, alt: 'Knotless braid styling' },
  { src: '/assets/braids (3).jpeg', category: 'braids' as const, alt: 'Braided hairstyle' },
  { src: '/assets/locs (1).jpeg', category: 'locs' as const, alt: 'Styled locs' },
  { src: '/assets/locs (2).jpeg', category: 'locs' as const, alt: 'Natural loc finish' },
]
