export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Book Now', href: '/book' },
];

export const PACKAGES = [
  {
    name: 'Essential',
    price: 25,
    description: 'Perfect for intimate gatherings',
    features: [
      'Up to 50 guests',
      'Basic menu selection',
      'Standard setup',
      '4-hour service',
      'Basic decoration',
    ],
  },
  {
    name: 'Premium',
    price: 45,
    description: 'Ideal for medium-sized events',
    features: [
      'Up to 100 guests',
      'Extended menu selection',
      'Premium setup',
      '6-hour service',
      'Enhanced decoration',
      'Dedicated event coordinator',
    ],
    featured: true,
  },
  {
    name: 'Luxury',
    price: 75,
    description: 'For grand celebrations',
    features: [
      'Up to 200 guests',
      'Full menu customization',
      'Luxury setup',
      '8-hour service',
      'Premium decoration',
      'Dedicated team',
      'Bar service',
    ],
  },
];

export const EVENT_TYPES = [
  {
    title: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3',
    description: 'Make your special day unforgettable with our elegant wedding catering services.',
  },
  {
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3',
    description: 'Impress your clients and colleagues with professional corporate catering solutions.',
  },
  {
    title: 'Private Parties',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3',
    description: 'Celebrate life\'s moments with customized private party catering services.',
  },
  {
    title: 'Social Gatherings',
    image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?ixlib=rb-4.0.3',
    description: 'Create lasting memories with friends and family through our social event catering.',
  },
];

export const PREVIOUS_EVENTS = [
  {
    title: 'Annual Tech Conference',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3',
    description: 'Catered for 500+ tech professionals with a modern fusion menu.',
    testimonial: 'The food was exceptional and the service impeccable. Highly recommended!',
    client: 'TechCorp Inc.',
  },
  {
    title: 'Garden Wedding',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3',
    description: 'An intimate garden wedding with custom farm-to-table menu.',
    testimonial: 'Liyu Catering made our special day even more magical.',
    client: 'Sarah & James',
  },
  {
    title: 'Charity Gala',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1515169273894-7e876dcf13da?ixlib=rb-4.0.3',
    description: 'Elegant five-course dinner service for 300 guests.',
    testimonial: 'Professional service that exceeded our expectations.',
    client: 'Hope Foundation',
  },
];