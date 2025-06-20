import { DashedLine, DottedLine, SolidLine, RoundedEdges, SharpEdges, HachureFill, CrossHatchFill, SolidFill } from "../assets/icons";

export const BACKGROUND_COLORS = [
  "transparent",
  "rgb(255, 201, 201)",
  "rgb(178, 242, 187)",
  "rgb(165, 216, 255)",
  "rgb(255, 236, 153)",
];

export const STROKE_COLORS = [
  "rgb(30, 30, 30)",
  "rgb(224, 49, 49)",
  "rgb(47, 158, 68)",
  "rgb(25, 113, 194)",
  "rgb(240, 140, 0)",
];

export const STROKE_STYLES = [
  {
    slug: "solid",
    icon: SolidLine,
  },
  {
    slug: "dashed",
    icon: DashedLine,
  },
  {
    slug: "dotted",
    icon: DottedLine,
  },
];

export const EDGE_STYLES = [
  {
    slug: "rounded",
    icon: RoundedEdges,
    title: "Rounded Edges",
  },
  {
    slug: "sharp",
    icon: SharpEdges,
    title: "Sharp Edges",
  },
];

export const CANVAS_BACKGROUND = [
  "rgb(255, 201, 201)",
  "rgb(178, 242, 187)",
  "rgb(165, 216, 255)",
  "rgb(255, 236, 153)",
];

export const SHORT_CUTS = [
  // Add keyboard shortcuts here if needed for the shortKey function
];

export * from './penStyles';

export const FILL_PATTERNS = [
  {
    slug: "solid",
    icon: SolidFill,
    title: "Solid Fill",
  },
  {
    slug: "hachure",
    icon: HachureFill, 
    title: "Hachure Fill",
  },
  {
    slug: "cross-hatch",
    icon: CrossHatchFill,
    title: "Cross Hatch Fill",
  },
];