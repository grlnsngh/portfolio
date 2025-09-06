import { Card } from "@/components/ui/card";
import Image from "next/image";

export function About() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-12 h-full flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8 items-center w-full">
        <div className="md:col-span-2">
          <Card className="overflow-hidden shadow-2xl rotate-[-2deg] md:rotate-[-3deg] hover:rotate-0 transition-transform duration-300 max-w-xs mx-auto md:mx-0">
            <Image
              src="https://picsum.photos/600/800"
              alt="Portrait of the developer"
              width={600}
              height={800}
              className="aspect-[3/4] object-cover"
              data-ai-hint="professional portrait"
            />
          </Card>
        </div>
        <div className="md:col-span-3 space-y-3 md:space-y-4">
          <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-center md:text-left">
            About Me
          </h2>
          <div className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base lg:text-lg">
            <p>
              I&apos;m a developer who enjoys solving problems through code and
              design. Over the years, I&apos;ve worked with technologies like
              Redux, Tailwind CSS, Chakra UI, and Radix UI, and I&apos;m
              comfortable building with tools such as Webpack, Vite, Jest, and
              Storybook.
            </p>
            <p>
              Beyond front-end, I&apos;ve also explored full-stack
              workflows—integrating RESTful APIs, optimizing for international
              audiences with i18n, and deploying applications on platforms like
              Vercel. I&apos;ve even built cross-platform mobile apps with React
              Native and Expo.
            </p>
            <p>
              When I&apos;m not coding, I enjoy exploring new technologies,
              brainstorming project ideas, and keeping up with the latest trends
              in web and mobile development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
