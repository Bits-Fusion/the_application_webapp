import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  function hanldeToggle() {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="text-black dark:text-white">
      <Button variant="outline" size="icon" onClick={() => hanldeToggle()}>
        {theme === "light" ? (
          <Moon className="absolute h-[1.2rem] w-[1.2rem] " />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </div>
  );
}
