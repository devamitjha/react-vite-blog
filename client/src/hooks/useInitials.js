import { useMemo } from "react";

export function useInitials(name = "") {
  const initials = useMemo(() => {
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2) // Take first & last name
      .map(word => word[0]?.toUpperCase())
      .join("");
  }, [name]);

  return initials;
}
