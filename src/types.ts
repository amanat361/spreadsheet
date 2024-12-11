export type Position = {
  row: number;
  col: number;
};

export type SpreadsheetProps = {
  rows: number;
  cols: number;
};

export type CellProps = {
  isSelected: boolean;
  onSelect: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
};

export type RowProps = {
  row: number;
  cols: number;
  selectedPosition: Position;
  setSelectedPosition: (pos: Position) => void;
  currentInputRef: React.RefObject<HTMLInputElement>;
};

export type HeaderProps = {
  cols: number;
};
