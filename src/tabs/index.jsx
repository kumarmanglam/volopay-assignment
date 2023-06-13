import Tab from "./tab";
import { TAB_LIST } from "../common/constants";

function Tabs() {
  return (
    <div className="flex pi-10 bg-white tabs">
      {TAB_LIST.map((item) => (
        <Tab
          key={item.label}
          label={item.label}
          isactive={item.path === location}
          tabPath={item.path}
        ></Tab>
      ))}
    </div>
  );
}

export default Tabs;
