import { Cast } from './Cast';

export interface CreditsResponse {
  id: number;
  cast: Cast[];
  crew: Cast[];
}
