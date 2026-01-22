import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  title: string;
  url: string;
  idx: number;
}

export default function ProjectCard({
  image,
  title,
  url,
  idx,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto border-amber-400 hover:shadow-lg transition-shadow py-0">
      <div className="relative">
        <Link href={url} aria-label={`Visit ${title} page`}>
          <Image
            src={image}
            alt={title}
            width={600}
            height={450}
            className="w-full h-64 object-contain rounded-t-lg"
            priority={idx < 3}
          />
        </Link>
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>

        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href={url} className="flex items-center space-x-2 h-4 w-4">
              <span>Learn More</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
