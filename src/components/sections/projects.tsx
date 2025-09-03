import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a modern design, product filtering, and a secure checkout process powered by Stripe.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
    image: 'https://picsum.photos/1280/720?random=1',
    imageHint: 'e-commerce website',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with drag-and-drop functionality and real-time updates using Firebase.',
    technologies: ['React', 'Firebase', 'Vite', 'React-dnd', 'Zustand'],
    image: 'https://picsum.photos/1280/720?random=2',
    imageHint: 'task management',
    link: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, featuring various chart types and data filtering options.',
    technologies: ['React', 'D3.js', 'ShadCN/UI', 'Node.js', 'Express'],
    image: 'https://picsum.photos/1280/720?random=3',
    imageHint: 'data dashboard',
    link: '#',
  },
];

export function Projects() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-center mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="group overflow-hidden relative shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={1280}
              height={720}
              data-ai-hint={project.imageHint}
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="absolute top-0 left-0 right-0 bottom-0 p-6 bg-black/80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-background mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Button asChild variant="outline">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
