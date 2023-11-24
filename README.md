# KJWorkGroup - job agency

## Live Demo

- [KJWorkGroup](https://kj-work.vercel.app/)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Naming Convention](#naming-convention)
- [Directory Structure](#directory-structure)
- [Install project](#install-project)
- [How to use plop to generate components](#how-to-use-plop-to-generate-components)

## Technologies Used

- Next.js
- React Query
- Prisma
- NextAuth
- Zustand
- TailwindCSS
- ShadcnUI

## Components Naming Convention

We will use a **PascalCase**. Names in pascal case start with a capital letter. In case of the names with multiple words, all words will start with capital letters.

Here are some examples of pascal case: `FirstName` and `LastName`.

## Folders Naming Convention

**kebab-case** is a naming convention for identifiers (such as variable names) in which multiple words are separated by hyphens ("-"). It is also known as hyphen case or spinal case. In kebab case, each word is typically lowercase, and the hyphen serves as the separator between words.

Here are some examples of kebab case: `first-name` and `last-name`.

## Directory Structure

- `src/app/components` - folder with the all components
- `src/lib` - folder with additional settings
- `src/app/[locale]` - folder with the all pages
- `src/app/globals.css` - file with the global styles
- `src/locales` - folder with the namespaces files
- `.env.example` - configuration file
- `.env.example` - configuration file

## Prerequisites

- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Install pnpm](https://pnpm.io/installation)

## Install project

1. Clone repository
2. Run `pnpm` to install project dependencies.
3. Make copy of `.env.example` file with name `.env.local` (e.g. by executing command `cp .env.example .env.local`)
4. Open .env file and edit api url (prefix `API_BASE_URL`)
5. Run `pnpm dev` to run dev server or `pnpm build` for production purposes.
