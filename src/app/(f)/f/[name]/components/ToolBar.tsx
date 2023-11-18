'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Icons } from '@/components/icons';

type Params = {
  name: string;
  id: string;
};

export function Toolbar() {
  const params: Params = useParams();

  return (
    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 p-4 sticky top-0 h-[60px]">
      <div className="space-x-6">
        <Link href={`/f/${params.name}/new`} className="inline-flex">
            <Icons.Email />
        </Link>
        <form
          className="inline-flex"
          onSubmit={async (e) => {
            e.preventDefault();
            // await deleteEmail(params.name, params.id);
          }}
        >
          <button type="submit">
            <Icons.Trash />
          </button>
        </form>
        <button>
            <Icons.ArrowLeft />
        </button>
        <button>
            <Icons.ArrowRight />
        </button>
      </div>
      <button className="flex ml-auto">
        <Icons.Search />
      </button>
    </div>
  );
}
