import { Toolbar } from "./ToolBar";

export function EmailEmptyView() {
  return (
    <div className="col-span-3 flex flex-col">
      <Toolbar />
      <div className="flex justify-center items-center h-full text-gray-500">
        No Email Selected
      </div>
    </div>
  );
}
