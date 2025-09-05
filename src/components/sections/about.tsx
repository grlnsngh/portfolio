import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function About() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
        <div className="md:col-span-2">
          <Card className="overflow-hidden shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
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
        <div className="md:col-span-3 space-y-6">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              Hello! I&apos;m a dedicated Front-End Developer with a love for building dynamic and user-friendly web interfaces. My journey into web development started with a curiosity for how things work on the internet, and it has since blossomed into a full-fledged passion for creating seamless digital experiences.
            </p>
            <p>
              With a strong foundation in React and the modern JavaScript ecosystem, I specialize in turning complex problems into elegant, interactive solutions. I thrive in collaborative environments and am always eager to learn new technologies to push the boundaries of what&apos;s possible on the web.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new hiking trails, experimenting with new recipes, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
