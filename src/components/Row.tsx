import { RowProps } from "../types";
import { CellContainer } from "./CellContainer";
import { Cell } from "./Cell";

export function Row({
  row,
  cols,
  selectedPosition,
  setSelectedPosition,
  currentInputRef,
}: RowProps) {
  return (
    <div className="flex">
      <CellContainer>
        <div className="flex justify-center items-center w-full h-full bg-gray-50 text-gray-600">
          {String(row + 1).padStart(2, "0")}
        </div>
      </CellContainer>
      {Array(cols)
        .fill(0)
        .map((_, col) => (
          <CellContainer key={col}>
            <Cell
              isSelected={
                selectedPosition.row === row && selectedPosition.col === col
              }
              onSelect={() => setSelectedPosition({ row, col })}
              inputRef={
                selectedPosition.row === row && selectedPosition.col === col
                  ? currentInputRef
                  : undefined
              }
            />
          </CellContainer>
        ))}
    </div>
  );
}
