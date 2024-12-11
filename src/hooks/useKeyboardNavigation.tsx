import { useEffect } from "react";
import type { Position } from "../types";

export function useKeyboardNavigation(
  currentInputRef: React.RefObject<HTMLInputElement>,
  setSelectedPosition: React.Dispatch<React.SetStateAction<Position>>, // Update this line
  rows: number,
  cols: number
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
      ) {
        return;
      }

      const input = currentInputRef.current;
      if (!input) return;

      const cursorAtStart = input.selectionStart === 0;
      const cursorAtEnd = input.selectionStart === input.value.length;

      if (e.key === "ArrowLeft" && !cursorAtStart) return;
      if (e.key === "ArrowRight" && !cursorAtEnd) return;

      e.preventDefault();

      setSelectedPosition((current: Position) => {
        // Add type here
        const newPosition = { ...current };

        switch (e.key) {
          case "ArrowUp":
            if (current.row > 0) newPosition.row = current.row - 1;
            break;
          case "ArrowDown":
            if (current.row < rows - 1) newPosition.row = current.row + 1;
            break;
          case "ArrowLeft":
            if (current.col > 0) newPosition.col = current.col - 1;
            break;
          case "ArrowRight":
            if (current.col < cols - 1) newPosition.col = current.col + 1;
            break;
        }

        return newPosition;
      });
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [rows, cols, currentInputRef, setSelectedPosition]);
}
