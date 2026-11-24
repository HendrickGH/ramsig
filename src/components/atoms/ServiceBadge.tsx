import {
  ServiceBadge as PrimitiveServiceBadge,
  type ServiceBadgeProps as PrimitiveServiceBadgeProps,
} from "@/design-system/Primitives";
import type { TacticalIconName } from "@/design-system/tokens";
import { TacticalIcon } from "./TacticalIcon";

export interface AtomicServiceBadgeProps extends PrimitiveServiceBadgeProps {
  iconName?: TacticalIconName;
}

export function ServiceBadge({
  iconName,
  className,
  ...props
}: AtomicServiceBadgeProps) {
  const wrapperClasses = ["service-badge-group", className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={wrapperClasses}>
      {iconName ? <TacticalIcon name={iconName} size={14} /> : null}
      <PrimitiveServiceBadge {...props} />
    </span>
  );
}
