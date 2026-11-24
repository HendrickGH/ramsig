import {
  ServiceBadge as PrimitiveServiceBadge,
  type ServiceBadgeProps,
} from "@/design-system/Primitives";

export type AtomicServiceBadgeProps = ServiceBadgeProps;

export function ServiceBadge(props: AtomicServiceBadgeProps) {
  return <PrimitiveServiceBadge {...props} />;
}
