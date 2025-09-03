export type NavLink = {
    name:string;
    href:string;
}
export type LinkItem = {
  name: string;
  href: string;
};

export type FooterLinks = {
  product: LinkItem[];
  community: LinkItem[];
  support: LinkItem[];
  company: LinkItem[];
};

// 2. Languages
export type Language = {
  flag: string;
  name: string;
};

// 3. Learn Languages
export type LearnLanguage = {
  code: string;
  name: string;
  flag: string;
};

// 4. Learn Interests
export type LearnInterest = string; 