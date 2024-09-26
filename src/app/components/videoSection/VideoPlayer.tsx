"use client";
import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
  initialVideoLink: string;
};

export const VideoPlayer: FC<VideoPlayerProps> = ({ initialVideoLink }) => {
  const [videoLink, setVideoLink] = useState<string | null>(null);

  useEffect(() => {
    setVideoLink(initialVideoLink);
  }, [initialVideoLink]);

  return (
    <div className="h-[250px] max-h-[720px] w-full overflow-hidden shadow-bottom sm:h-[350px] md:h-[500px] lg:h-[90vh]">
      {videoLink && (
        <ReactPlayer
          url={videoLink}
          light="/Thumbnail.png"
          style={{ margin: "0 auto", borderRadius: "20px" }}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};
