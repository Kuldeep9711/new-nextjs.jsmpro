/* import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
    id: string;
    title: string;
    image: string;
    downloadNumber: number;
    downloadLink: string;
   
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }:Props) => {

  if (!downloadLink) return null;

  return (
   <Card className="w-full max-w-fit border-0 bg-transparent! sm:max-w-89">
     <Link href={downloadLink} > 
       <CardHeader className="flex-center flex-col gap-2.5 p-0!">
         <div className="h-fit w-full">
          <Image
            src={image}
            alt={title}
            className="h-full rounded-md object-cover"
            width={384}
            height={440}
            />
         </div>
           <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
      </CardHeader>
      
  </Link>
 <CardContent className="flex-between mt-4 p-0">
      <div className="flex-center body-medium gap-1.5 text-white">
        <Image
        src="/downloads.svg"
        width={20}
        height={20}
        alt="download"
        />
        {downloadNumber}
      </div>
      <Link href={downloadLink}  className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
         Download now 
         <Image src="/arrow-blue.svg" width={13} height={10}
         alt="arror" />
      </Link>
  </CardContent>
  </Card>
  )
}

export default ResourceCard */



import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink?: string;
}

const ResourceCard = ({ title, id, image, downloadNumber, downloadLink }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 bg-transparent sm:max-w-89 flex flex-col">
      {/* Wrapping the top half in a Link. 
         'group' class allows us to animate the image when the card is hovered 
      */}
      <Link 
        href={downloadLink || "#"} 
        target="_blank" 
        className="group flex flex-col w-full"
      >
        <CardHeader className="flex-center flex-col gap-2.5 p-0">
          <div className="h-fit w-full overflow-hidden rounded-md">
            <Image
              src={image}
              alt={title}
              className="h-full w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
              width={384}
              height={440}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left mt-2">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>

      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" width={20} height={20} alt="download" />
          <p>{downloadNumber}</p>
        </div>

        {downloadLink ? (
          <Link
            href={downloadLink}
            target="_blank"
            className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
          >
            Download now
            <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
          </Link>
        ) : (
          <span className="text-gray-400 body-semibold">
            Coming soon
          </span>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;