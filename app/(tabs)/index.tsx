import { useEffect, useState } from "react";
import { useRouter, usePathname } from "expo-router";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname(); // Check current path
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Mark as mounted
  }, []);

  useEffect(() => {
    if (isMounted && pathname === "/") {
      router.replace("/homepage"); // Redirect after mount
    }
  }, [isMounted, pathname]);

  return null; // No UI needed, just redirect
}
