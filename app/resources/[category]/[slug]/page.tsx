import { resourcesData } from "@/lib/resourcesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceAction from "@/components/ResourceAction";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(resourcesData).map((slug) => ({
    slug,
    category: resourcesData[slug].category,
  }));
}

// Function to check if an item requires contact form (resources with Google Drive links)
const requiresContact = (link: string) => {
  const isGoogleDrive = link.includes("drive.google.com");
  return isGoogleDrive;
};

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const data = resourcesData[slug];

  if (!data) {
    return notFound();
  }

  const requiresContactForm = requiresContact(data.link);
  const isPaid = data?.isPaid ?? false;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-black">
      <Header />

      <main className="grow w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <Button
              variant="ghost"
              asChild
              className="pl-0 hover:bg-transparent text-slate-600"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
          </div>

          <div className="p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {data.title}
            </h1>

            {data.videoId && (
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-100 mb-8 border border-slate-200">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${data.videoId}`}
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}

            <h2 className="text-2xl font-semibold text-amber-500 mb-6">
              {data.subtitle}
            </h2>

            <div
              className="prose prose-slate max-w-none text-slate-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />

            <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
              <ResourceAction
                title={data.title}
                link={data.link}
                isPaid={isPaid}
                requiresContact={requiresContactForm}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
