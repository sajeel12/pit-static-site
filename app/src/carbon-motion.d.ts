declare module '@carbon/colors' {
  export const blue50: string;
  export const blue60: string;
  export const blue70: string;
  export const blue80: string;
  export const cyan50: string;
  export const teal50: string;
  export const teal60: string;
  export const gray100: string;
  export const purple60: string;
  export const purple70: string;
  export const magenta60: string;
  export const red60: string;
  export const orange40: string;
}

declare module '@carbon/motion' {
  export const durationFast01: number;
  export const durationFast02: number;
  export const durationModerate01: number;
  export const durationModerate02: number;
  export const durationSlow01: number;
  export const durationSlow02: number;
  export const easings: {
    standard: {
      productive: string;
      expressive: string;
    };
    entrance: {
      productive: string;
      expressive: string;
    };
    exit: {
      productive: string;
      expressive: string;
    };
  };
}
