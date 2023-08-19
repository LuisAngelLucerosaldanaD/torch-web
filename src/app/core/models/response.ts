export interface Response<T = any> {
  error: boolean;
  data: T;
  code: number;
  type: string;
  msg: string;
}

export interface BoxResult {
  file: string;
  predictions: Prediction[];
}

export interface Prediction {
  class: number;
  confidence: number;
  name: string;
  xmax: number;
  xmin: number;
  ymax: number;
  ymin: number;
}
