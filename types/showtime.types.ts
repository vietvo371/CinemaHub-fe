import { Movie } from './movie.types';

export interface Showtime {
  id: string;
  movieId: string;
  movie?: Movie;
  startTime: Date;
  endTime: Date;
  roomId: string;
  price: number;
  availableSeats: string[];
  status: ShowtimeStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum ShowtimeStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED'
}

export interface CreateShowtimeDto {
  movieId: string;
  startTime: Date;
  endTime: Date;
  roomId: string;
  price: number;
}

export interface UpdateShowtimeDto extends Partial<CreateShowtimeDto> {
  status?: ShowtimeStatus;
} 