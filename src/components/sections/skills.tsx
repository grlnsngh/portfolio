"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Rocket, Wind, Zap, Bot, Component, GitBranch, Settings, Smartphone, Languages } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

const skills = [
  { name: 'React & Next.js', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'React Native', icon: Smartphone },
  { name: 'Performance Optimization', icon: Rocket },
  { name: 'i18n Localization', icon: Languages },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Webpack / Vite', icon: Zap },
  { name: 'Git & Github', icon: GitBranch },
  { name: 'RESTful APIs', icon: Settings },
];

interface Skill {
  name: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export function Skills() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-center mb-12">
        Technologies & Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill: Skill, index: number) => (
          <Card
            key={skill.name}
            className="group text-center transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:-translate-y-2"
          >
            <CardHeader className="items-center">
              <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary transition-colors duration-300">
                <skill.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
