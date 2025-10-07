import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: StaticImageData | string
    tech: string[]
    github: string
    demo: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className='h-full'>
      <Card
        key={index}
        className='overflow-hidden py-0 gap-0 group hover:shadow-lg transition-shadow h-full flex flex-col'
      >
        <div className='relative h-40 sm:h-48 flex-shrink-0'>
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-300'
          />
        </div>
        <CardHeader className='pb-3 flex-shrink-0 mt-4'>
          <CardTitle className='text-lg sm:text-xl'>{project.title}</CardTitle>
          <CardDescription className='text-sm line-clamp-3 mt-2'>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className='flex-1 flex flex-col '>
          <div className='flex flex-wrap gap-2 mb-4 min-h-[50px]'>
            {project.tech.map((tech) => (
              <Badge key={tech} variant='outline' className='text-xs self-end h-fit'>
                {tech}
              </Badge>
            ))}
          </div>
          <div className='flex gap-2 pb-6 mt-auto'>
            <Button variant='outline' size='sm' className='gap-2 flex-1 bg-transparent'>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 w-full'
              >
                <FaGithub className='w-4 h-4' />
                <span className='hidden xs:inline'>Code</span>
              </a>
            </Button>
            <Button size='sm' className='gap-2 flex-1'>
              <a
                href={project.demo}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 w-full'
              >
                <ExternalLink className='w-4 h-4' />
                <span className='hidden xs:inline'>Demo</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
