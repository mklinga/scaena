'use client';

import { ReactNode, useState } from 'react';
import { NeutralButton, PrimaryButton } from './Button';

interface Props {
  tabs: {
    id: string;
    title: string;
    content: ReactNode;
  }[];
  defaultValue?: string;
}

export default function TabView({ defaultValue, tabs }: Props) {
  const [selectedTab, setSelectedTab] = useState<string>(defaultValue ?? tabs[0]?.id);

  const getButtonElement = (selected: boolean) => (selected ? PrimaryButton : NeutralButton);

  return (
    <div>
      <nav className="mb-6">
        {tabs.map((tab) => {
          const ButtonElement = getButtonElement(tab.id === selectedTab);
          return (
            <ButtonElement key={tab.id} onClick={() => setSelectedTab(tab.id)} className="mr-3">
              {tab.title}
            </ButtonElement>
          );
        })}
      </nav>
      <div>{tabs.find(({ id }) => id === selectedTab)?.content}</div>
    </div>
  );
}
