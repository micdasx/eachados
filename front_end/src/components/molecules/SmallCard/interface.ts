import React from "react";

export interface ISmallCardProps {
  id: number;
  title: string;
  subtitle?: string;
  image: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  found?: boolean;
}
