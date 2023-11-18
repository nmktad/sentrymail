import { Icons } from '@/components/icons';
import Link from 'next/link';

export async function FolderColumn() {
  const { specialFolders, otherFolders } = await getFoldersWithEmailCount();

  return (
    <div className="border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-2 space-y-2">
      <ul>
        {specialFolders.map((folder, index) => (
          <Link
            key={index}
            href={`/f/${encodeURIComponent(folder.name.toLowerCase())}`}
          >
            <li className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-between rounded-lg">
              <div className="flex items-center space-x-3">
                {folder.name === 'Inbox' ? (
                    <Icons.Inbox />
                ) : folder.name === 'Flagged' ? (
                    <Icons.Flag />
                ) : (
                    <Icons.Sent />
                )}
                <span className="text-sm">{folder.name}</span>
              </div>
              <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1 text-xs w-6 flex justify-center">
                {folder.email_count}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <hr className="my-4 border-gray-200 dark:border-gray-800" />
      <ul className="divide-y divide-gray-200 dark:divide-gray-800">
        {otherFolders.map((folder, index) => (
          <Link
            key={index}
            href={`/f/${encodeURIComponent(folder.name.toLowerCase())}`}
          >
            <li className="px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center space-x-3 rounded-lg">
                <Icons.Folder />
              <span className="text-sm">{folder.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
