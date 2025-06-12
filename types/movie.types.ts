export interface Movie {
  id: string;
  title: string;
  description: string;
  duration: number;
  releaseDate: Date;
  genre: string[];
  director: string;
  cast: string[];
  posterUrl: string;
  trailerUrl?: string;
  rating: number;
  status: MovieStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum MovieStatus {
  COMING_SOON = 'COMING_SOON',
  NOW_SHOWING = 'NOW_SHOWING',
  ENDED = 'ENDED'
}

export interface CreateMovieDto {
  title: string;
  description: string;
  duration: number;
  releaseDate: Date;
  genre: string[];
  director: string;
  cast: string[];
  posterUrl: string;
  trailerUrl?: string;
  rating: number;
  status: MovieStatus;
}

export interface UpdateMovieDto extends Partial<CreateMovieDto> {} 