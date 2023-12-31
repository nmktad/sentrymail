import Link from 'next/link';
import { formatEmailString } from '@/lib/utils';

export async function EmailListColumn({ folderName }: { folderName: string }) {
    const emails = [] as any;

    return (
        <div className="border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-2 col-span-2">
            <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                {emails.map((email:any) => (
                    <Link
                        key={email.id}
                        href={`/f/${folderName.toLowerCase()}/${email.id.toString()}`}
                    >
                        <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex justify-between items-start rounded-lg">
                            <div className="w-full truncate">
                                <h2 className="text-base font-bold">
                                    {formatEmailString(email)}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {email.subject}
                                </p>
                                <p className="text-sm truncate o verflow-ellipsis">
                                    {email.body}
                                </p>
                            </div>
                            <time className="text-xs text-gray-500 dark:text-gray-400 self-center flex justify-end">
                                {new Date(email.sent_date).toLocaleDateString()}
                            </time>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
