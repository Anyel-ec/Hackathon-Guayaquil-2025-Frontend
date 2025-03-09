"use client";

import Image from "next/image";
import EvaluatorSection from "../evaluator-section";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import SocialNetworkLinkDialog from "./social-network-link-dialog";

export default function SocialLinking() {
  const nets: string[] = ["Facebook", "Instagram", "TikTok"];
  const [selectedNet, setSelectedNet] = useState<string | null>(null);

  return (
    <EvaluatorSection title="Redes Sociales">
      <div className="flex flex-col items-center gap-4">
        {nets.map((net, index) => (
          <div
            key={index}
            className="flex gap-6 items-center py-2 px-4 bg-primary/5 hover:bg-primary/7.5 border-primary/15 border-1 rounded-md"
          >
            <Image
              src={`/${net.toLowerCase()}.png`}
              alt={net}
              height={32}
              width={32}
            />
            <Switch
              onCheckedChange={(checked: boolean) => {
                if (checked) setSelectedNet(net);
                else setSelectedNet(null);
              }}
            />
          </div>
        ))}
      </div>
      {selectedNet && (
        <SocialNetworkLinkDialog
          socialNetwork={selectedNet}
          close={() => setSelectedNet(null)}
        />
      )}
    </EvaluatorSection>
  );
}
