import {NavLink, FooterLinks,Language, LearnLanguage, LearnInterest}  from "../types/types";
export const navLinks: NavLink[] = [
    { name: 'Home', href:'/' },
    { name: 'Learn', href:'/learn' },
    { name: 'Chat', href:'/chat' },
    { name: 'Culture', href:'/culture' },
    { name: 'Login', href:'/login' },
] 
export const footerLinks:FooterLinks =  {
    product: [
      { name: 'How it Works', href: '#' },
      { name: 'Languages', href: '#' },
      { name: 'Find Buddies', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Mobile App', href: '#' }
    ],
    community: [
      { name: 'Success Stories', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Discord', href: '#' },
      { name: 'Newsletter', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Safety Guidelines', href: '#' },
      { name: 'Report Issue', href: '#' },
      { name: 'Status', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

export const languages:Language[] = [
    { flag: '🇺🇸', name: 'English' },
    { flag: '🇪🇸', name: 'Español' },
    { flag: '🇫🇷', name: 'Français' },
    { flag: '🇩🇪', name: 'Deutsch' },
    { flag: '🇨🇳', name: '中文' },
    { flag: '🇯🇵', name: '日本語' },
    { flag: '🇰🇷', name: '한국어' },
    { flag: '🇮🇹', name: 'Italiano' }
  ];

export const learnLanguages:LearnLanguage[] = [
    { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
      { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
      { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
      { code: 'ff', name: 'Fulfulde (Fulani)', flag: '🇳🇬' },
      { code: 'ka', name: 'Kanuri', flag: '🇳🇬' },
      { code: 'ti', name: 'Tiv', flag: '🇳🇬' },
      { code: 'ib', name: 'Ibibio', flag: '🇳🇬' },
      { code: 'ej', name: 'Ejagham', flag: '🇳🇬' },
      { code: 'nu', name: 'Nupe', flag: '🇳🇬' },
      { code: 'ij', name: 'Ijaw', flag: '🇳🇬' },

      // West Africa
      { code: 'tw', name: 'Twi (Akan)', flag: '🇬🇭' },
      { code: 'ee', name: 'Ewe', flag: '🇹🇬' },
      { code: 'bm', name: 'Bambara', flag: '🇲🇱' },
      { code: 'wo', name: 'Wolof', flag: '🇸🇳' },

      // East Africa
      { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
      { code: 'om', name: 'Oromo', flag: '🇪🇹' },
      { code: 'am', name: 'Amharic', flag: '🇪🇹' },

      // Southern Africa
      { code: 'zu', name: 'Zulu', flag: '🇿🇦' },
      { code: 'xh', name: 'Xhosa', flag: '🇿🇦' },
      { code: 'st', name: 'Sesotho', flag: '🇱🇸' },
      { code: 'tn', name: 'Tswana', flag: '🇧🇼' },
      { code: 'af', name: 'Afrikaans', flag: '🇿🇦' }
  ];

export const learnInterests:LearnInterest[] = [
    'Music', 'Technology', 'Sports', 'Movies', 'Food', 'Travel',
    'Art', 'Books', 'Gaming', 'Fashion', 'Business', 'Science',
    'Photography', 'Cooking', 'Fitness', 'Nature'
  ];