"use client";

import { UserCircle2 } from "lucide-react";
import EvaluatorSection from "../evaluator-section";
import ReputationContact from "./reputation-contact";
import AddReputationContactButton from "./add-contact-button";
import { Contact } from "@/lib/models/contact";
import { useState } from "react";

export default function Reputation() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <EvaluatorSection title="Reputación">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="relative flex justify-center items-center w-36 h-36 rounded-full border-4 border-primary">
          <UserCircle2 size={60} />
          <AddReputationContactButton
            total={contacts.length + 1}
            addContact={(contact) => setContacts([...contacts, contact])}
          />
          {contacts.map((contact, index) => (
            <ReputationContact
              key={index}
              index={index + 1}
              total={contacts.length + 1}
              contact={contact}
            />
          ))}
        </div>
      </div>
    </EvaluatorSection>
  );
}
