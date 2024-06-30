//! * Mejor usar interfaces que crear clases
//! * Modulamos la interfaz de la repuesta de fetchin de la api de movies.
//! * Creamos una interfaz movie mas independiente del fetch api del movies para modularlo y que manejemos 100% nosotros

export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}

export interface FullMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}

export interface Actor {
  id: number;
  name: string;
  profile_path: string;
  character?: string;
}
