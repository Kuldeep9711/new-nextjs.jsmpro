import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
    id: string;
    title: string;
    image: string;
    downloadNumber: number;
    downloadink: string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadlink }:Props) => {
  return (
   <Card className="w-full max-w-fit border-0 bg-transparent! sm:max-w-89">
  <Link href={`/resource/${id}`}> 
  <CardHeader>
    

    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
      <div>
        <Image
            src={image}
            className="h-full rounded-md object-cover"
            width={384}
            height={440}
            alt={title}
          />
      </div>

  </Link>
<CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
  </Card>
  )
}

export default ResourceCard 


 
