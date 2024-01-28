import { z } from 'zod';

export const ApplySchema = z.object({
  offerId: z.string(),
  offerName: z.string().optional(),
  email: z.string().email(),
  name: z.string(),
  phone: z.string().optional(),
});

export const ApplyFormClientSchema = z.object({
  name: z.string().min(2, {
    message: 'Imię powinno zawierać przynajmniej 2 znaki',
  }),
  email: z.string().email({ message: 'Wpisz prawidłowy adres email' }),
  phone: z.string(),
});

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
});

export const ContactLayoutSchema = z.object({
  name: z.string().min(2, {
    message: 'minimum 2 znaki',
  }),
  email: z.string().email({ message: 'Niepoprawny email' }),
  phone: z.string(),
});

export const FiltersSchema = z.object({
  page: z.number().optional(),
  orderBy: z.string().optional(),
  query: z.string().optional(),
  filters: z.object({
    agreement_type: z.object({}),
    industry: z.object({}),
  }),
});

export const CreateOfferSchema = z.object({
  title: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  description: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  company: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  industry: z.enum([
    'construction',
    'transport',
    'gastronomy',
    'logistic',
    'production',
    'it',
  ]),
  location: z.string().min(1, {
    message: 'Pole wymagane',
  }),

  agreement_type: z.enum([
    'contract-of-employment',
    'mandate-contract',
    'temporary',
  ]),
  duties: z.string().array().optional(),
  requirements: z.string().array().optional(),
  offer: z.string().array().optional(),
  summary: z.string().optional(),
});

export const LoginSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Pole wymagane',
    })
    .max(40, 'Maksymalnie 40 znaków'),
  password: z.string().min(1, {
    message: 'Pole wymagane',
  }),
});
