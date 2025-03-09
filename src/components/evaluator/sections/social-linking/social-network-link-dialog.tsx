import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SocialNetworkLinkDialogProps {
  socialNetwork: string;
  close: () => void;
}

export default function SocialNetworkLinkDialog({
  socialNetwork,
  close,
}: SocialNetworkLinkDialogProps) {
  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center transition-all">
      <header className="w-full p-4 flex gap-4 bg-accent">
        <Image
          src={`/${socialNetwork.toLowerCase()}.png`}
          alt={socialNetwork}
          height={24}
          width={24}
        />
        <p className="font-bold">Conectar con {socialNetwork}</p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-4">
        <Image
          src={`/${socialNetwork.toLowerCase()}.png`}
          alt={socialNetwork}
          height={64}
          width={64}
        />
        <p>
          <strong>Evaluador Holístico</strong> recibirá tu información personal.
        </p>
        <Button onClick={close}>Continuar</Button>
      </main>
    </div>
  );
}
