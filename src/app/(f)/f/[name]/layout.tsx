import { UserButton } from "@clerk/nextjs";
import { FolderColumn } from "./components/FolderColumn";
import { EmailListColumn } from "./components/EmailListColumn";

export default function EmailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { name: string; id: string };
}) {
  return (
    <div className="grid grid-cols-6 gap-2 h-screen p-2">
      <UserButton afterSignOutUrl="/" />
      <FolderColumn />
      <EmailListColumn folderName={params.name} />
      {children}
    </div>
  );
}
