import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  website: string;
  idx: number;
}

export default function ProjectCard({
  image,
  title,
  website,
  idx,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto border-amber-400 hover:shadow-lg transition-shadow py-0">
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
            className="w-full h-64 object-contain rounded-t-lg"
            priority={idx < 3}
          />
        </a>
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>

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
        </div>
      </CardContent>
    </Card>
  );
}
