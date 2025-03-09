"use client";

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
import { API_ENDPOINTS } from "@/lib/consts/endpoints/api";
import { useEffect, useState } from "react";
import getEvaluation from "@/actions/scoring/get-evaluation";

interface SocialTipButtonProps {
  socialNetwork: string;
  result: FacebookResult | LinkedInResult;
}

export default function SocialTipButton({
  socialNetwork,
  result,
}: SocialTipButtonProps) {
  const lowerCasedSocialNetwork: string = socialNetwork.toLowerCase();

 /*  const [responseBody, setResponseBody] = useState<any>(null);
  const [proceed, setProceed] = useState<boolean>(false);

  let endpoint: string;
  let id: number = 0;

  if (lowerCasedSocialNetwork === "facebook") {
    endpoint = API_ENDPOINTS.GET_FACEBOOK_EVALUATION;
    id = 1020;
  } else {
    endpoint = API_ENDPOINTS.GET_LINKEDIN_EVALUATION;
    id = 640;
  }

  useEffect(() => {
    if (!proceed) return;
    getEvaluation(endpoint, id).then((response) => {
      setResponseBody(response);
      setProceed(false);
    });
  }, [proceed]); */

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={(() => {}/* setProceed(true) */)} variant="outline" size="icon">
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
