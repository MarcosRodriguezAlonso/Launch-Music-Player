// Crea un tipo para un objeto canción
// Servirá para tipar las canciones que tienes más abajo
export type Song = {
  title: string;
  durationInSeconds: number;
  credits: string;
  isCurrent: boolean;
};

export const existingSongs: Song[] = [
  {
    title: "guitar-electro-115571.mp3",
    durationInSeconds: 118,
    credits: "",
    isCurrent: false,
  },
  {
    title: "dark-and-light-171712.mp3",
    durationInSeconds: 104,
    credits: "",
    isCurrent: false,
  },
  {
    title: "hear-me-134134.mp3",
    durationInSeconds: 166,
    credits: "",
    isCurrent: false,
  },
  {
    title: "lofi-chill-159456.mp3",
    durationInSeconds: 67,
    credits: "",
    isCurrent: false,
  },
  {
    title: "risk-136788.mp3",
    durationInSeconds: 72,
    credits: "",
    isCurrent: false,
  },
  {
    title: "forest-lullaby-110624.mp3",
    durationInSeconds: 138,
    credits: "",
    isCurrent: false,
  },
];

export const songs: Song[] = [];
