import { TicTacToe } from "./interface";

const initalBoxState: TicTacToe[] = [
  {
    id: 1,
    right: true,
    bottom: true,
    value: "",
    isTouched: false,
  },
  {
    id: 2,
    right: true,
    bottom: true,
    value: "",
    isTouched: false,
  },
  {
    id: 3,
    right: false,
    bottom: true,
    value: "",
    isTouched: false,
  },
  {
    id: 4,
    right: true,
    bottom: true,
    value: "O",
    isTouched: true,
  },
  {
    id: 5,
    right: true,
    bottom: true,
    value: "X",
    isTouched: true,
  },
  {
    id: 6,
    right: false,
    bottom: true,
    value: "",
    isTouched: false,
  },
  {
    id: 7,
    right: true,
    bottom: false,
    value: "",
    isTouched: false,
  },
  {
    id: 8,
    right: true,
    bottom: false,
    value: "",
    isTouched: false,
  },
  {
    id: 9,
    right: false,
    bottom: false,
    value: "",
    isTouched: false,
  },
];

export default initalBoxState;
