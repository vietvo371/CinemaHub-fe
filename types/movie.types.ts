export interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  releaseDate: Date;
  posterUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateMovieDto {
  title: string;
  director: string;
  duration: number;
  releaseDate: Date;
  posterUrl: string;
}

export interface UpdateMovieDto extends Partial<CreateMovieDto> {} 