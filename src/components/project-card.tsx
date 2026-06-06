/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function getProjectFallback(title: string, tags: readonly string[]) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("compiler")) {
    return {
      label: "Compiler",
      mark: "α",
      detail: "lexer -> parser -> vm",
      accent: "#3B82F6",
      background:
        "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.24), transparent 34%), linear-gradient(135deg, #111827 0%, #020617 100%)",
      chips: tags.slice(0, 3),
    };
  }

  if (normalizedTitle.includes("movie")) {
    return {
      label: "Coursework",
      mark: "HY240",
      detail: "lists / trees / commands",
      accent: "#F59E0B",
      background:
        "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.24), transparent 32%), linear-gradient(135deg, #18181B 0%, #09090B 100%)",
      chips: tags.slice(0, 3),
    };
  }

  if (normalizedTitle.includes("studypilot")) {
    return {
      label: "AI study tool",
      mark: "SP",
      detail: "summaries / flashcards / quizzes",
      accent: "#E84DB5",
      background:
        "radial-gradient(circle at 30% 20%, rgba(232,77,181,0.3), transparent 34%), linear-gradient(135deg, #111827 0%, #27051C 100%)",
      chips: tags.slice(0, 3),
    };
  }

  return {
    label: "Project",
    mark: title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase(),
    detail: tags.slice(0, 3).join(" / "),
    accent: "#737373",
    background:
      "radial-gradient(circle at 25% 20%, rgba(115,115,115,0.24), transparent 34%), linear-gradient(135deg, #171717 0%, #0A0A0A 100%)",
    chips: tags.slice(0, 3),
  };
}

function ProjectFallbackImage({
  title,
  tags,
}: {
  title: string;
  tags: readonly string[];
}) {
  const fallback = getProjectFallback(title, tags);

  return (
    <div
      className="relative flex h-48 w-full overflow-hidden text-white"
      style={{ background: fallback.background }}
      aria-label={`${title} preview`}
    >
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{ backgroundColor: fallback.accent }}
      />
      <div className="absolute -right-12 -top-16 size-44 rounded-full border border-white/10 bg-white/5" />
      <div className="absolute -bottom-20 left-8 size-52 rounded-full border border-white/10 bg-white/[0.03]" />
      <div className="relative flex h-full w-full flex-col justify-between p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
            {fallback.label}
          </span>
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: fallback.accent }}
          />
        </div>
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="font-mono text-5xl font-semibold leading-none tracking-normal">
              {fallback.mark}
            </div>
            <div className="mt-3 font-mono text-xs text-white/60">
              {fallback.detail}
            </div>
          </div>
          <div className="hidden max-w-32 flex-col gap-1.5 sm:flex">
            {fallback.chips.map((chip) => (
              <div
                key={chip}
                className="truncate rounded-md border border-white/10 bg-black/20 px-2 py-1 text-right text-[10px] font-medium text-white/70"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  tags,
}: {
  src: string;
  alt: string;
  tags: readonly string[];
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <ProjectFallbackImage title={alt} tags={tags} />;
  }

  return (
    <div
      className={cn(
        "w-full h-48 flex items-center justify-center overflow-hidden",
        src === "/naedo_white_logo.png" ? "bg-[#0B2E9E] p-10" : "bg-muted"
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "max-h-full max-w-full",
          src === "/naedo_white_logo.png" ? "object-contain" : "h-full w-full object-cover"
        )}
        onError={() => setImageError(true)}
      />
    </div>
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} tags={tags} />
          ) : (
            <ProjectFallbackImage title={title} tags={tags} />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
