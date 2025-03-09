import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import FacebookResultRenderer from "./renderers/facebook-result-renderer";
import LinkedInResultRenderer from "./renderers/linkedin-result-renderer";

interface SocialTipButtonProps {
  socialNetwork: string;
  result: FacebookResult | LinkedInResult;
}

export default function SocialTipButton({
  socialNetwork,
  result,
}: SocialTipButtonProps) {
  const lowerCasedSocialNetwork: string = socialNetwork.toLowerCase();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Lightbulb color="var(--primary)" size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle asChild>
        <div className="flex gap-4 items-center">
          <Image
            src={`/${lowerCasedSocialNetwork}.png`}
            alt={socialNetwork}
            height={24}
            width={24}
          />
          <p>Resultados</p>
        </div>
          </DialogTitle>
        </DialogHeader>
        {lowerCasedSocialNetwork === "facebook" && (
          <FacebookResultRenderer result={result as FacebookResult} />
        )}
        {lowerCasedSocialNetwork === "linkedin" && (
          <LinkedInResultRenderer result={result as LinkedInResult} />
        )}
      </DialogContent>
    </Dialog>
  );
}
