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
      detail: "lexer / parser / vm",
      accent: "#3B82F6",
    };
  }

  if (normalizedTitle.includes("movie")) {
    return {
      label: "Coursework",
      mark: "HY240",
      detail: "data structures / commands",
      accent: "#F59E0B",
    };
  }

  if (normalizedTitle.includes("studypilot")) {
    return {
      label: "AI study tool",
      mark: "SP",
      detail: "summaries / quizzes",
      accent: "#E84DB5",
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
      className="relative flex h-48 w-full overflow-hidden bg-[#101010] text-white"
      aria-label={`${title} preview`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),transparent_38%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <div className="relative flex h-full w-full flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
            {fallback.label}
          </span>
          <span
            className="mt-1 h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: fallback.accent }}
          />
        </div>
        <div className="flex items-end justify-between gap-5">
          <div
            className="text-6xl font-semibold leading-none tracking-normal text-white"
            style={{ color: fallback.accent }}
          >
            {fallback.mark}
          </div>
          <div className="max-w-36 text-right font-mono text-[11px] leading-relaxed text-white/45">
            {fallback.detail}
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
