type Variant =
  | 'name'
  | 'email'
  | 'phone'
  | 'subject'
  | 'message'
  | 'title'
  | 'company'
  | 'industry'
  | 'location'
  | 'agreement_type'
  | 'expiration_date'
  | 'duties'
  | 'requirements'
  | 'offer'
  | 'summary';

export const getPlaceholder = (variant: Variant) => {
  switch (variant) {
    case 'name':
      return 'Wpisz imię';
    case 'email':
      return 'Wpisz email';
    case 'phone':
      return 'Wpisz nr telefonu';
    case 'subject':
      return 'Wpisz temat wiadomości';
    case 'message':
      return 'Wpisz wiadomość';
    case 'title':
      return 'Wpisz tytuł';
    case 'company':
      return 'Wpisz nazwę firmy';
    case 'industry':
      return 'Wpisz branżę';
    case 'location':
      return 'Wpisz lokalizację';
    case 'agreement_type':
      return 'Wpisz rodzaj umowy';
    case 'expiration_date':
      return 'Wpisz datę wygaśnięcia';
    case 'duties':
      return 'Wpisz obowiązki';
    case 'requirements':
      return 'Wpisz wymagania';
    case 'offer':
      return 'Wpisz ofertę';
    case 'summary':
      return 'Wpisz podsumowanie';
    default:
      return '';
  }
};

export const getLabel = (variant: Variant) => {
  switch (variant) {
    case 'name':
      return 'Imię*';
    case 'email':
      return 'Email*';
    case 'phone':
      return 'Nr telefonu';
    case 'subject':
      return 'Temat*';
    case 'message':
      return 'Wiadomość*';
    case 'title':
      return 'Tytuł';
    case 'company':
      return 'Nazwa firmy';
    case 'industry':
      return 'Branża';
    case 'location':
      return 'Lokalizacja';
    case 'agreement_type':
      return 'Rodzaj umowy';
    case 'expiration_date':
      return 'Data wygaśnięcia';
    case 'duties':
      return 'Obowiązki';
    case 'requirements':
      return 'Wymagania';
    case 'offer':
      return 'Oferta';
    case 'summary':
      return 'Podsumowanie';
    default:
      return '';
  }
};
