declare module 'cobe' {
    export type COBEOptions = any;
    interface Globe {
      destroy: () => void;
    }
    const createGlobe: (canvas: HTMLCanvasElement, options: COBEOptions) => Globe;
    export default createGlobe;
  }
  