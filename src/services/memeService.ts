import * as memeRepository from '../repositories/memeRepository';
import { TypeMemeData } from '../types/MemeTypes';

export async function findAll() {
  const memes = await memeRepository.findAll();
  return memes;
}

export async function insert(meme: TypeMemeData) {
  const existingMeme = await memeRepository.findByTitle(meme.title);
  if (existingMeme)
    throw { type: 'conflict', message: 'Memes must have unique titles' };

  await memeRepository.insert(meme);
}
