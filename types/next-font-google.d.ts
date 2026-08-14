declare module "next/font/google" {
  type FontOptions = { subsets?: string[]; variable?: string; display?: string; weight?: string | string[]; style?: string | string[] };
  type FontResult = { className: string; variable: string; style: { fontFamily: string } };
  export function Manrope(options?: FontOptions): FontResult;
  export function Newsreader(options?: FontOptions): FontResult;
}
