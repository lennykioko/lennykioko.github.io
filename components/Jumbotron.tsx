import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Jumbotron() {
  return (
    <section className="border-b-2 border-amber-400 p-4">
      <div className="flex w-full items-center justify-center">
        <div className="mt-16 rounded-full border-4 border-amber-400 p-2">
          <Avatar className="w-48 h-48">
            <AvatarImage
              src="/cityzen.jpg"
              alt="Profile Photo"
              className="object-cover"
            />
            <AvatarFallback className="text-4xl">LK</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center p-4 text-xl">
        <ImQuotesLeft className="mr-3 mb-3 h-6 w-6 self-start text-amber-400" />
        <div className="text-center space-y-2">
          <p>Hi 👋, I am Lenny.</p>
          <p className="font-semibold">Algorithmic Trader | Techie</p>
          <p className="text-gray-600">Ex-Microsoft | Ex-Andela</p>
        </div>
        <ImQuotesRight className="ml-3 mt-3 h-6 w-6 self-end text-amber-400" />
      </div>
    </section>
  );
}
