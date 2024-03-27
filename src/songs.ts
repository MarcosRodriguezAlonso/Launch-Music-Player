import { errorMonitor } from "events";
import { Song } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {

  return song.title === songTitle;
};

export const addSong = (song: Song, songs: Song[]): void => {

  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {

  return songs.length >= 4;
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "Error, algo no ha ido bien";
  }

  return errorMessage;
};

export const getSongsCount = (songs: Song[]): number => {

  return songs.length;
};

export const removeSongByPosition = (songs: Song[], position: number): void => {

  songs.splice(position, 1);
};

export const setCurrentSong = (song: Song): void => {
  song.isCurrent = true;
};

export const getNextSongPosition = (
  songs: Song[],
  currentSongPosition: number
) => {
  let nextSongPosition: number;

  nextSongPosition = currentSongPosition + 1;

  if (nextSongPosition >= songs.length) {
    nextSongPosition = 0;
  }

  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  let isCurrent: boolean;


  return song.isCurrent === true;
};
