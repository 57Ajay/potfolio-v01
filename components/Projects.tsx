import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { projectDetails } from "./projectsDetail";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                projectDetails.map((project) => (
                    <Card key={project.title} className="overflow-hidden">
                        <Image 
                            src={project.imgUrl}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                            width={500}
                            height={300}
                        />
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p><span className="font-bold">Technologies Used:</span>{project.techUsed}</p>
                            <div className="flex justify-between">
                                <Button className="mt-4" variant="outline" asChild>
                                    <a href={`${project.liveLink}`} target="_blank" rel="noopener noreferrer">Live Project</a>
                                </Button>
                                <Button className="mt-4" variant="outline" asChild>
                                    <a href={`${project.gitLink}`} target="_blank" rel="noopener noreferrer">GitHub link</a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    );
};

export default Projects;
