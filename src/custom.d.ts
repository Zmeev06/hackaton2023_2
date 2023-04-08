declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.mp4' {
  const src: string;
  export default src;
}
