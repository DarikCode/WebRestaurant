import { Translations, MenuItem, Review } from './types';

export const TRANSLATIONS: Record<'en' | 'fi', Translations> = {
  en: {
    nav: { home: "Home", history: "Story", menu: "Menu", chef: "Chef", book: "Reserve", mains: "Mains", dumplings: "Dumplings", soups: "Soups", drinks: "Drinks" },
    hero: {
      subtitle: "Est. Helsinki",
      title_main: "Taste of",
      title_sub: "Heritage",
      desc: "A modern take on Tatar traditions in the heart of Scandinavia."
    },
    about: {
      tag: "The Concept",
      title_main: "Where East",
      title_sub: "Meets",
      title_end: "North",
      p1: "QAZAN is not just a restaurant, it's a journey through time. Inspired by the azure domes of Samarkand and the warmth of Kazan.",
      p2: "We cherish ancestral recipes while adding the refinement of European presentation.",
      read_more: "Read Our Full Story"
    },
    menu: {
      tag: "Gastronomy",
      title: "Favorites",
      full_menu: "View Full Menu"
    },
    chef: {
      tag: "Chef's Philosophy",
      quote: "\"We preserve authenticity in a modern world.\"",
      desc: "Combining ancient techniques from the Silk Road with the purity of Finnish ingredients."
    },
    reviews: {
      subtitle: "What our guests say",
      title: "Guest Experiences"
    },
    reservation: {
      title: "Book a Table",
      subtitle: "Join us for dinner",
      label_name: "Name",
      label_phone: "Phone",
      label_date: "Date",
      label_guests: "Guests",
      btn_submit: "Confirm Request",
      success_title: "Thank you! Request received."
    },
    footer: {
      desc: "Exquisite Tatar cuisine in Helsinki.",
      contact: "Contact",
      hours_title: "Opening Hours",
      social: "Follow & Order",
      days_week: "Mon-Thu",
      days_fri: "Fri-Sat",
      days_sun: "Sun"
    },
    menu_page: {
      title: "Our Menu",
      subtitle: "Authentic Central Asian Cuisine"
    },
    story_page: {
      hero_title: "The Silk Road",
      hero_subtitle: "Leads to the North",
      section1_title: "Ancestral Roots",
      section1_text: "The story of Qazan begins centuries ago, along the winding paths of the Silk Road. Our cuisine is rooted in the rich tapestry of Tatar culture—a nomadic heritage that values hospitality above all else. From the savory aromas of Kazan to the spice markets of Central Asia, every dish carries the memory of generations who gathered around the fire to share stories and sustenance.",
      section2_title: "Nordic Fusion",
      section2_text: "When our family settled in Helsinki, we found a landscape that mirrored the resilience of our ancestors. We decided to honor our past by embracing our present. Qazan represents this dialogue: the bold, warming spices of the East meeting the pristine, seasonal ingredients of the North. It is traditional comfort food, elevated by Scandinavian minimalism.",
      values_title: "Our Core Values",
      value1_title: "Heritage",
      value1_desc: "We honor the recipes passed down through generations, refusing to compromise on the authentic flavors of our childhood.",
      value2_title: "Hospitality",
      value2_desc: "In our culture, a guest is a gift from God. We strive to make every visitor feel like part of our extended family.",
      value3_title: "Quality",
      value3_desc: "We source local Finnish meat and vegetables, believing that the best way to respect tradition is to use the freshest ingredients."
    },
    chatbot: {
      greeting: "Hello! Welcome to Qazan. How can I assist you today?",
      btn_book: "Book a Table",
      btn_order: "Order Delivery",
      btn_faq: "Common Questions",
      btn_contact: "Contact Info",
      back: "Back to Menu",
      order_title: "Choose your preferred delivery partner:",
      faq_title: "Frequently Asked Questions",
      q1: "Do you have vegan options?",
      a1: "Yes! We have a dedicated selection of vegan dishes, including our Veg Lagman and various appetizers.",
      q2: "Is the meat Halal?",
      a2: "Yes, all our meat is 100% Halal certified.",
      q3: "Do I need a reservation?",
      a3: "Walk-ins are welcome, but we highly recommend booking in advance for Friday and Saturday evenings."
    }
  },
  fi: {
    nav: { home: "Etusivu", history: "Tarina", menu: "Menu", chef: "Kokki", book: "Varaa", mains: "Pääruoat", dumplings: "Nyytit", soups: "Keitot", drinks: "Juomat" },
    hero: {
      subtitle: "Est. Helsinki",
      title_main: "Taste of",
      title_sub: "Heritage",
      desc: "Moderni näkemys tataariperinteistä Skandinavian sydämessä."
    },
    about: {
      tag: "Konsepti",
      title_main: "Missä Itä",
      title_sub: "Kohtaa",
      title_end: "Pohjoisen",
      p1: "QAZAN ei ole vain ravintola, se on aikamatka. Inspiraationa Samarkandin azuurit kupolit ja Kazanin lämpö.",
      p2: "Vaalimme esi-isiemme reseptejä lisäämällä niihin eurooppalaista hienostuneisuutta.",
      read_more: "Lue Koko Tarina"
    },
    menu: {
      tag: "Gastronomia",
      title: "Suosikit",
      full_menu: "Koko Menu"
    },
    chef: {
      tag: "Kokin Filosofia",
      quote: "\"Säilytämme aitouden modernissa maailmassa.\"",
      desc: "Yhdistämme Silkkitien tekniikat puhtaisiin suomalaisiin raaka-aineisiin."
    },
    reviews: {
      subtitle: "Asiakkaidemme kokemuksia",
      title: "Vieraiden Kokemuksia"
    },
    reservation: {
      title: "Varaa Pöytä",
      subtitle: "Tule illalliselle",
      label_name: "Nimi",
      label_phone: "Puhelin",
      label_date: "Päivämäärä",
      label_guests: "Henkilöt",
      btn_submit: "Vahvista",
      success_title: "Kiitos! Pyyntö vastaanotettu."
    },
    footer: {
      desc: "Hienostunutta tataarikeittiötä Helsingissä.",
      contact: "Yhteystiedot",
      hours_title: "Aukioloajat",
      social: "Seuraa",
      days_week: "Ma-To",
      days_fri: "Pe-La",
      days_sun: "Su"
    },
    menu_page: {
      title: "Ruokalista",
      subtitle: "Aitoa Keski-Aasialaista Keittiötä"
    },
    story_page: {
      hero_title: "Silkkitie",
      hero_subtitle: "Johtaa Pohjoiseen",
      section1_title: "Juuret",
      section1_text: "Qazanin tarina alkaa vuosisatoja sitten Silkkitien mutkittelevilta poluilta. Keittiömme juuret ovat tataarikulttuurin rikkaassa kudoksessa – paimentolaisperinnössä, joka arvostaa vieraanvaraisuutta yli kaiken. Kazanin suolaisista aromeista Keski-Aasian maustemarkkinoihin jokainen ruokalaji kantaa muistoa sukupolvista, jotka kokoontuivat tulen ääreen jakamaan tarinoita.",
      section2_title: "Pohjoinen Fuusio",
      section2_text: "Kun perheemme asettui Helsinkiin, löysimme maiseman, joka heijasti esi-isiemme sitkeyttä. Päätimme kunnioittaa menneisyyttämme syleilemällä nykyhetkeä. Qazan edustaa tätä vuoropuhelua: idän rohkeat, lämmittävät mausteet kohtaavat pohjoisen puhtaat, sesongin mukaiset raaka-aineet. Se on perinteistä lohturuokaa, joka on nostettu uudelle tasolle skandinaavisella minimalismilla.",
      values_title: "Arvomme",
      value1_title: "Perintö",
      value1_desc: "Kunnioitamme sukupolvien ajan periytyneitä reseptejä emmekä tingi lapsuutemme aidoista mauista.",
      value2_title: "Vieraanvaraisuus",
      value2_desc: "Kulttuurissamme vieras on lahja jumalalta. Pyrimme saamaan jokaisen kävijän tuntemaan itsensä osaksi laajennettua perhettämme.",
      value3_title: "Laatu",
      value3_desc: "Käytämme paikallista suomalaista lihaa ja vihanneksia, uskoen, että paras tapa kunnioittaa perinnettä on käyttää tuoreimpia raaka-aineita."
    },
    chatbot: {
      greeting: "Hei! Tervetuloa Qazaniin. Kuinka voin auttaa sinua tänään?",
      btn_book: "Varaa Pöytä",
      btn_order: "Tilaa Kotiin",
      btn_faq: "Usein Kysyttyä",
      btn_contact: "Yhteystiedot",
      back: "Takaisin",
      order_title: "Valitse toimituskumppani:",
      faq_title: "Usein Kysytyt Kysymykset",
      q1: "Onko teillä vegaanisia vaihtoehtoja?",
      a1: "Kyllä! Meillä on oma valikoima vegaanisia ruokia, mukaan lukien Veg Lagman.",
      q2: "Onko liha Halal?",
      a2: "Kyllä, kaikki käyttämämme liha on 100% Halal-sertifioitua.",
      q3: "Tarvitsenko pöytävarauksen?",
      a3: "Olet aina tervetullut ilman varausta, mutta suosittelemme varaamista viikonloppuilloille."
    }
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    title: 'Guru Lagman',
    description: 'Noodles topped with beef and vegetables, served with a rich broth.',
    price: '16,90€',
    category: 'mains',
    image: 'https://picsum.photos/800/600?random=1',
    dietary: ['M']
  },
  {
    id: 'm2',
    title: 'Boso Lagman',
    description: 'Fried noodles with beef and vegetables. Available Spicy or Mild.',
    price: '16,90€',
    category: 'mains',
    image: 'https://picsum.photos/800/600?random=2',
    dietary: ['M']
  },
  {
    id: 'm3',
    title: 'Veg Lagman',
    description: 'Fried hand-pulled noodles with seasonal vegetables, zucchini, and peppers.',
    price: '15,50€',
    category: 'mains',
    image: 'https://picsum.photos/800/600?random=3',
    dietary: ['VEG', 'M']
  },
  {
    id: 'm4',
    title: 'Kazan Kebab',
    description: 'Tender meat fried in a cauldron with golden potatoes and aromatic spices.',
    price: '17,50€',
    category: 'mains',
    image: 'https://picsum.photos/800/600?random=4',
    dietary: ['G', 'M']
  },
  {
    id: 'd1',
    title: 'Manty',
    description: 'Steamed dumplings filled with juicy diced beef and onions.',
    price: '15,90€',
    category: 'dumplings',
    image: 'https://picsum.photos/800/600?random=5',
    dietary: ['M']
  },
  {
    id: 'd2',
    title: 'Samsa',
    description: 'Flaky layered pastry filled with beef or chicken and onions.',
    price: '4,00€',
    category: 'dumplings',
    image: 'https://picsum.photos/800/600?random=6',
    dietary: ['L']
  },
  {
    id: 's1',
    title: 'Shurpa',
    description: 'Rich broth with tender beef (or lamb) and chunks of vegetables.',
    price: '13,90€',
    category: 'soups',
    image: 'https://picsum.photos/800/600?random=7',
    dietary: ['G', 'M']
  },
  {
    id: 's2',
    title: 'Solyanka',
    description: 'Hearty soup with cured meats, pickles, olives, and lemon. Served with sour cream.',
    price: '16,50€',
    category: 'soups',
    image: 'https://picsum.photos/800/600?random=8',
    dietary: ['G', 'L']
  },
  {
    id: 'dr1',
    title: 'Moroccan Tea',
    description: 'Green tea with fresh mint leaves and sugar.',
    price: '5,50€',
    category: 'drinks',
    image: '',
    dietary: []
  },
  {
    id: 'dr2',
    title: 'Sea Buckthorn Tea',
    description: 'Warming tea made with fresh sea buckthorn berries, honey, and orange.',
    price: '5,90€',
    category: 'drinks',
    image: '',
    dietary: []
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    text: "It was a wonderful experience at Qazan. The spicy lamb with vegetables was full of flavor and had just the right amount of spice.",
    author: "Mika Hallonen",
    rating: 5
  },
  {
    id: 2,
    text: "Our first time here, and we are truly impressed. The atmosphere was warm and friendly, the food fresh and tasty. We will definitely come back again!",
    author: "Emmi Tuulas",
    rating: 5
  },
  {
    id: 3,
    text: "The service was great, the food was fantastic and served quickly. Absolutely the best! I would come and try next time for sure! Good Luck!",
    author: "Sezim Talantbekova",
    rating: 5
  }
];