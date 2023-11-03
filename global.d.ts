// Use type safe message keys with `next-intl`
type Messages = typeof import('./src/locales/pl.json');
declare interface IntlMessages extends Messages {}
