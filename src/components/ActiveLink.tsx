import { useRouter } from "next/router";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import React, { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName?: string;
  target?: string;
  rel?: string;
};

const excluded = ["https://blog.theopoette.me"]

const ActiveLink = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const { asPath, isReady } = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    if (excluded.includes(props.href as string))
      return;

    const hrefPathname = typeof props.href === 'string'
      ? new URL(props.href, window.location.origin).pathname
      : new URL((props.href as any).pathname, window.location.origin).pathname;

    const currentPathname = new URL(asPath, window.location.origin).pathname;

    setIsActive(hrefPathname === currentPathname);
  }, [asPath, isReady, props.href]);

  const variant = isActive ? 'shine' : 'linkHover3';

  return (
    <Link {...props} href={props.href ?? ''} passHref className={className}>
      <Button variant={variant} className={className}>
        {children}
      </Button>
    </Link>
  );
};

export default ActiveLink;
