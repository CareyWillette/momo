export interface MenuSection {
  title?: string;
  items?: Item[];
}

export interface Item {
  name?: string;
  price?: number;
  description?: string;
  allergyIcons?: AllergyIcon[];
}

export interface AllergyIcon {
  name?: string;
  abbr?: string;
  className?: string;
}
