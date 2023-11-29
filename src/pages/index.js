import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";
import { Provider } from "react-redux";
import { store } from "@/store";
import Board from "@/components/Board";

export default function Home() {
  return (
    <Provider store={store}>
      <Board />
      <Menu />
      <Toolbox />
    </Provider>
  );
}
