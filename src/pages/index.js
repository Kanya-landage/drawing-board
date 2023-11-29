import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Menu />
      <Toolbox />
    </Provider>
  );
}
