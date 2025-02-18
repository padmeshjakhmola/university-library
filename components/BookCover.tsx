"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "./BookCoverSvg";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";

type BookCoverVarient = "extraSmall" | "small" | "medium" | "regular" | "wide";

const varientStyles: Record<BookCoverVarient, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  varient?: BookCoverVarient;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  className,
  varient = "regular",
  coverColor = "#012B48",
  //   ! make sure to import it after the finilization of the image
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        varientStyles[varient],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <IKImage
          // src="https://placehold.co/400x600.png"
          path={coverImage}
          urlEndpoint={config.env.imagekit.urlEndpoint}
          alt="book-cover"
          fill
          className="rounded-sm object-fill"
          loading="lazy"
          lqip={{ active: true }}
        />
      </div>
    </div>
  );
};

export default BookCover;
