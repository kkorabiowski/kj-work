/* eslint-disable @typescript-eslint/no-var-requires */
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const offers = require('../src/data/offers.json');

async function clearDB() {
  try {
    await db.offer.deleteMany({});
  } catch (error) {
    console.log(error);
  }
}

async function seed() {
  await db.offer.createMany({ data: offers });
}

async function execute() {
  try {
    await clearDB();
    await seed();
    console.log('Seed successful');
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
}

execute();
