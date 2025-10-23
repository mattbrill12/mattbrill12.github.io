export interface ServicePackage {
    title: string;
    subtitle: string;
    features: string[];
    isComingSoon?: boolean;
    note?: string;
}

export interface ServiceCategory {
    id: string;
    name: string;
    packages: ServicePackage[];
    image: string;
    description: string;
}

export const services: ServiceCategory[] = [
    {
        id: 'mobile-cart',
        name: 'Mobile Cart',
        description: 'Experience our signature charcuterie cart service, perfect for any event.',
        image: '/mobile-charcuterie-cart-1.png',
        packages: [
            {
                title: 'Mini Graze',
                subtitle: 'Perfect for intimate celebrations, small parties, or showers',
                features: [
                    'Classic charcuterie cart setup',
                    '2 cheese varieties',
                    '2 cured meats',
                    'Gourmet crackers',
                    'Fresh & dried fruits',
                    'Assorted olives and nuts',
                    'Honey & Jam',
                    'Up to 2 hours of service'
                ]
            },
            {
                title: 'Graze and Gather',
                subtitle: 'Ideal for birthdays, engagements, or medium-sized gatherings',
                features: [
                    '4 cheese varieties',
                    '3 meat selections',
                    'Fresh and dried fruits',
                    'Gourmet bread & crackers selections',
                    'Assorted Olives and nuts',
                    'Chocolate',
                    'Honey & Jams',
                    'Decorative greenery & custom signage',
                    'Up to 2 hours of service'
                ]
            },
            {
                title: 'Luxe Graze',
                subtitle: 'Perfect for weddings, corporate events, and upscale parties',
                features: [
                    '5 premium cheeses',
                    '4 meat selections',
                    'Gourmet crackers and breads',
                    'Fresh and dried fruit',
                    'Assorted olives and nuts',
                    'Specialty accompaniments: honeycomb, fig jam, tapenade, spreads',
                    'Personalized signage (event name or logo)',
                    'Upgrade decor (base on event theme/color)',
                    'Up to 4 hours of service'
                ]
            }
        ]
    },
    {
        id: 'mobile-bar',
        name: 'Mobile Bar',
        description: 'Elevate your event with our mobile bar service.',
        image: '/beverage-bar-1.png',
        packages: [
            {
                title: 'Graze-tini',
                subtitle: 'Perfect for intimate gatherings or budget-friendly events',
                features: [
                    '1 Signature Custom Cocktail or Mocktail',
                    'Simple cart setup',
                    'Up to 2 hours of service'
                ],
                note: '*alcohol must be provided by the client'
            },
            {
                title: 'Perfect Pairing',
                subtitle: 'Great for birthdays, baby showers, and holiday parties',
                features: [
                    '2 Signature Custom Cocktail or Mocktail',
                    'Simple cart setup',
                    'Up to 2 hours of service'
                ],
                note: '*alcohol must be provided by the client'
            },
            {
                title: 'Boba Bliss',
                subtitle: 'Perfect for any event!',
                features: [
                    'Choice of 2 Boba flavor drinks',
                    'Personalized signage (logo or event name)',
                    'Simple cart setup',
                    'Up to 2 hours of service'
                ],
                isComingSoon: true
            }
        ]
    },
    {
        id: 'curated-bites',
        name: 'Curated Bites',
        description: 'Discover our selection of carefully curated bites.',
        image: '/hot-chocolate-bar-1.png',
        packages: [
            {
                title: 'Cup-cuterie',
                subtitle: 'Individual portions perfect for any event',
                features: [
                    'Individually portioned charcuterie cups',
                    '2 cheese varieties',
                    '2 cured meats',
                    'Fresh and dried fruits',
                    'Nuts and olives',
                    'Gourmet crackers',
                    'Honey drizzle',
                    'Eco-friendly packaging'
                ]
            },
            {
                title: 'Grazette',
                subtitle: 'Small bites with big impact',
                features: [
                    'Mini charcuterie boards',
                    '3 cheese varieties',
                    '3 cured meats',
                    'Fresh and dried fruits',
                    'Premium nuts and olives',
                    'Artisanal crackers',
                    'Honey and jam',
                    'Decorative garnish'
                ]
            },
            {
                title: 'Petite Feast',
                subtitle: 'A curated selection of premium bites',
                features: [
                    'Luxury individual portions',
                    '4 premium cheeses',
                    '4 specialty meats',
                    'Seasonal fresh fruits',
                    'Gourmet dried fruits',
                    'Premium nuts and olives',
                    'Artisanal crackers and bread',
                    'Specialty honey and preserves',
                    'Custom garnish and presentation'
                ]
            }
        ]
    },
    {
        id: 'seasonal',
        name: 'Seasonal Features',
        description: 'Special seasonal offerings for your events.',
        image: '/hot-chocolate-bar-2.png',
        packages: [
            {
                title: 'Cozy Cart',
                subtitle: 'Perfect for intimate gatherings or budget-friendly events',
                features: [
                    'Classic hot chocolate (1 flavor)',
                    'Basic topping (mini marshmallows, whipped cream)',
                    'Simple cart setup',
                    'Up to 2 hours of service'
                ]
            },
            {
                title: 'Sweet Sips',
                subtitle: 'Great for birthdays, baby showers, and holiday parties',
                features: [
                    'Everything in "Cozy Cart," plus:',
                    '2 flavor options (Classic + Peppermint or Salted Caramel)',
                    'Additional toppings (candy canes, chocolate chips, caramel drizzle)',
                    'Themed decor (seasonal or event-inspired)',
                    'Customized menu board'
                ]
            },
            {
                title: 'ChocoLuxe',
                subtitle: 'Perfect for weddings, large parties, or corporate events',
                features: [
                    'Everything in "Sweet Sips," plus:',
                    'Up to 3 hot chocolate flavors (Classic, White Chocolate, Peppermint, Salted Caramel)',
                    'Gourmet toppings bar: crushed cookies, sprinkles, chocolate shavings',
                    'Upgraded decor',
                    'Personalized signage (logo or event name)',
                    'Event time up to 4 hours',
                    '2 attendants'
                ]
            }
        ]
    }
];
