type Variant = 'name' | 'email' | 'phone' | 'subject' | 'message';

export const getPlaceholder = (variant: Variant) => {
  if (variant === 'name') {
    return 'Wpisz imię';
  } else if (variant === 'email') {
    return 'Wpisz email';
  } else if (variant === 'message') {
    return 'Wpisz wiadomość';
  } else if (variant === 'phone') {
    return 'Wpisz nr telefonu';
  } else if (variant === 'subject') {
    return 'Wpisz temat wiadomości';
  }
};

export const getLabel = (variant: Variant) => {
  if (variant === 'name') {
    return 'Imię*';
  } else if (variant === 'email') {
    return 'Email*';
  } else if (variant === 'message') {
    return 'Wiadomość*';
  } else if (variant === 'phone') {
    return 'Nr telefonu';
  } else if (variant === 'subject') {
    return 'Temat*';
  }
};
