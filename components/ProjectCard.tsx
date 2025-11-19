import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GrGithub } from "react-icons/gr";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  website: string;
  code: string;
  idx: number;
  showCode: boolean;
}

export default function ProjectCard({
  image,
  title,
  website,
  code,
  idx,
  showCode,
}: ProjectCardProps) {
  return (
    <Card
      className={`w-96 border-amber-400 hover:shadow-lg transition-shadow ${
        idx === 0 ? "mt-8" : ""
      }`}
    >
      <div className="relative">
        <a
          target="_blank"
          href={website}
          rel="noreferrer"
          aria-label={`Visit ${title} website`}
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={450}
            className="w-full h-64 object-cover rounded-t-lg"
            priority={idx < 3}
          />
        </a>
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-4">{title}</h3>

        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start" asChild>
            <a
              target="_blank"
              href={website}
              rel="noreferrer"
              className="flex items-center space-x-2"
            >
              <HiOutlineExternalLink className="h-4 w-4" />
              <span>View Website</span>
            </a>
          </Button>

          {showCode && (
            <Button variant="outline" className="w-full justify-start" asChild>
              <a
                target="_blank"
                href={code}
                rel="noreferrer"
                className="flex items-center space-x-2"
              >
                <GrGithub className="h-4 w-4" />
                <span>View Code</span>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
