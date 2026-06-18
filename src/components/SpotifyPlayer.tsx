import React from "react";

interface SpotifyPlayerProps {
  url: string;
  type?: "album" | "track" | "playlist" | "episode" | "show";
  width?: string | number;
  height?: string | number;
  theme?: "dark" | "light";
}

function getEmbedSrc(url: string, type: string, theme: string): string {
  const match = url.match(
    /(?:spotify\.com\/(\w+)\/|spotify:(\w+):)([a-zA-Z0-9]+)/,
  );
  const id = match ? match[3] : url;
  const resolvedType = match?.[1] || match?.[2] || type;

  const params = theme === "light" ? "?theme=0" : "";
  return `https://open.spotify.com/embed/${resolvedType}/${id}${params}`;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({
  url,
  type = "album",
  width = "100%",
  height = 352,
  theme = "dark",
}) => {
  const src = getEmbedSrc(url, type, theme);

  return (
    <iframe
      title="Spotify Player"
      src={src}
      width={width}
      height={height}
      style={{ borderRadius: 12, border: "none" }}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

export default SpotifyPlayer;
