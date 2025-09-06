import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function About() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-12 h-full flex items-center">
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
              Hello! I&apos;m Gurleen, a passionate developer with expertise in React and Next.js. My tech journey encompasses a wide range of technologies including TypeScript, Redux, Node.js, and various UI libraries like Tailwind CSS, Chakra UI, and Radix UI.
            </p>
            <p>
              I specialize in building scalable web applications with a focus on performance optimization, internationalization, and testing. Using tools like Webpack, Vite, Jest, Storybook, and deployment platforms like Vercel, I create robust and maintainable solutions. I&apos;m also experienced in UI/UX design and working with RESTful APIs. Additionally, I have experience developing cross-platform mobile applications with React Native and Expo.
            </p>
            <p>
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
