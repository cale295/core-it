import React from "react";
import { cn } from "../../lib/utils";
import Marquee from "../magicui/marquee";

const reviews = [
  {
    name: "Ibra",
    username: "Muhammad Ibra Aidil Akbar",
    body: "Ketua Core IT.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Safa",
    username: "Regina Safarina",
    body: "Wakil Ketua Core IT.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Vibra",
    username: "Vibra Ayu Karisma",
    body: "Sekretaris 1 Core IT.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Zahra",
    username: "Az-zahra Nurfadila Puspita Ayu",
    body: "Sekretaris 2 Core IT.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Yasmin",
    username: "Aulia Yasmin Maharani",
    body: "Bendahara Core IT.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Vargas",
    username: "Muhammad Vargas Cahyadhi",
    body: "Ketua Divisi SE.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Fauzil",
    username: "Fauzil Muttaqin",
    body: "Ketua Divisi Sosmed.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-40 md:w-72 h-auto md:h-44 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/50 bg-white/[.01] hover:bg-white/[.05]",
        "md:border-white/50 md:bg-gray-950/[.01] md:hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-2xl font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xl font-medium text-white/70">{username}</p>
        </div>
      </div>
      <blockquote className="text-xl text-white">{body}</blockquote>
    </figure>
  );
};

export function Structure() {
  return (
    <div id="structure" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950 md:shadow-xl">
      <h1 className="text-white z-10 font-bold text-4xl lg:text-8xl py-4">Struktur Organisasi</h1>
      {/* Horizontal Marquee on large screens, vertical on mobile */}
      <div className="hidden md:flex md:flex-col">
        <Marquee pauseOnHover className="[--duration:15s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:15s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="md:hidden flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:15s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:15s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-950"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-950 "></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-slate-950 md:hidden"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950 md:hidden"></div>
    </div>
  );
}

