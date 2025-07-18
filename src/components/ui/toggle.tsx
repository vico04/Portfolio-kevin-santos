import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { toggleVariants, type ToggleVariantProps } from './toogle-variants';

import { cn } from '@/lib/utils';

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & ToggleVariantProps) {
  return (
    <TogglePrimitive.Root data-slot="toggle" className={cn(toggleVariants({ variant, size, className }))} {...props} />
  );
}

export { Toggle };
