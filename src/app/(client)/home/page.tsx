import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '../../../components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function page(props: any) {
  return (
    <div>
      <p>Home page</p>
      <div className="pl-4">
        <Button>Click me</Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
