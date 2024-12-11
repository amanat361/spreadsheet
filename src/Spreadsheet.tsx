import { useState, useRef, useEffect } from "react";
import type { SpreadsheetProps, Position } from "./types";
import { Header } from "./components/Header";
import { Row } from "./components/Row";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";

export default function Spreadsheet({ rows, cols }: SpreadsheetProps) {
  const [selectedPosition, setSelectedPosition] = useState<Position>({
    row: 0,
    col: 0,
  });
  const currentInputRef = useRef<HTMLInputElement>(null);

  useKeyboardNavigation(currentInputRef, setSelectedPosition, rows, cols);

  useEffect(() => {
    currentInputRef.current?.focus();
  }, [selectedPosition]);

  return (
    <div>
      <Header cols={cols} />
      {Array(rows)
        .fill(0)
        .map((_, i) => (
          <Row
            key={i}
            row={i}
            cols={cols}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
            currentInputRef={currentInputRef}
          />
        ))}
    </div>
  );
}
