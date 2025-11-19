import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

interface OrgCardProps {
  image: string;
  title: string;
  subTitle: string;
  date: string;
  description: string;
}

export default function OrgCard({
  image,
  title,
  subTitle,
  date,
  description,
}: OrgCardProps) {
  return (
    <Card className="m-4 hover:shadow-md transition-shadow">
      <CardContent className="flex space-x-6 p-6">
        <div className="flex-shrink-0">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={image}
              alt={`${title} logo`}
              className="object-cover"
            />
            <AvatarFallback>
              {title.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm font-medium text-gray-700">{subTitle}</p>
          <p className="text-sm text-gray-600">{date}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
