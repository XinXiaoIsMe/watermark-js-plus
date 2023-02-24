export type ContentTypeType = 'text' | 'image' | 'multi-line-text' | 'rich-text'

export type TextAlignType = 'center' | 'end' | 'left' | 'right' | 'start'

export type TextBaselineType = 'alphabetic' | 'hanging' | 'ideographic' | 'top' | 'bottom' | 'middle'

export type CreateWatermarkModeType = 'default' | 'blind'

export type DecodeBlindWatermarkModeType = 'canvas' | 'html' | 'svg'

export type TranslatePlacementType = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'right' | 'middle'

export type TextType = 'fill' | 'stroke'

export type ChangeOptionsMode = 'overwrite' | 'append'

export interface WatermarkDom extends HTMLDivElement {
  __WATERMARK__?: string;
  __WATERMARK__INSTANCE__?: any;
}

export interface WatermarkOptions {
  width: number;
  height: number;
  rotate: number;
  auxiliaryLine: boolean;
  globalAlpha: number;
  zIndex: number;
  mutationObserve: boolean;
  unique: boolean;
  mode: CreateWatermarkModeType;
  parent: Element | string;
  backgroundPosition: string;
  backgroundRepeat: string;
  translatePlacement: TranslatePlacementType;
  translateX?: number;
  translateY?: number;
  contentType: ContentTypeType;
  content: string;
  textType: TextType;
  lineHeight: number;
  fontSize: string;
  fontFamily: string;
  fontStyle: string;
  fontVariant: string;
  fontColor: string;
  fontWeight: string;
  textAlign?: TextAlignType;
  textBaseline?: TextBaselineType;
  filter: string;
  textRowMaxWidth?: number;
  richTextWidth?: number;
  richTextHeight?: number;
  image?: string;
  imageWidth: number;
  imageHeight: number;
  shadowStyle?: Partial<CanvasShadowStyles>;
  advancedStyle?: AdvancedStyleType;
  extraDrawFunc?: Function;
  onSuccess: Function;
  onBeforeDestroy: Function;
  onDestroyed: Function;
}

export interface DecodeBlindWatermarkOptions {
  url: string;
  fillColor: string;
  compositeOperation: string;
  mode: DecodeBlindWatermarkModeType;
  onSuccess: Function;
}

export interface CustomContentSVGType {
  element: Element,
  width: number,
  height: number
}

export interface AdvancedStyleType {
  type: 'linear' | 'radial' | 'conic' | 'pattern',
  params?: Partial<AdvancedStyleParamsType>,
  colorStops?: { offset: number, color: string }[]
}

export interface AdvancedStyleParamsType {
  linear: Partial<{
    x0: number,
    y0: number,
    x1: number,
    y1: number,
  }>,
  radial: Partial<{
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number,
  }>,
  conic: Partial<{
    startAngle: number,
    x: number,
    y: number,
  }>,
  pattern: Partial<{
    image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas,
    repetition: string,
  }>
}
