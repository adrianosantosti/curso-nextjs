"use client"

import Link from "next/link"
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, generatePages } from "./generatePages"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/helpers/cn"

export const Pagination = ({ currentPage, totalPages }: { currentPage: number, totalPages: number }) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const pages = generatePages(currentPage, totalPages);
    //console.log(pages);

    return (
        <ul className="inline-flex h-10 overflow-hidden rounded-md text-base border border-indigo-400/40">

            {pages.map((page) => {
                const isEllipses = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGHT;

                const params = new URLSearchParams(searchParams);
                params.set('page', page.toString());
                const url = `${pathname}?${params.toString()}`;
                const isCurrentPage = page === currentPage;

                if (isEllipses){
                    return (
                        <li key={page} className="border-x border-indigo-400/40 first:rounded-1 last:rouned-r first:border-0 last:border-0">
                            <span className="flex h-10 items-center justify-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300">
                                ...
                            </span>
                        </li>
                    )
                }

                return(
                    <li key={page} className={cn("border-x border-indigo-400/40 first:rounded-1 last:rouned-r first:border-0 last:border-0")}>
                        <Link href={url} className={cn("flex h-10 items-center justify-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300", 
                            {
                                "bg-indigo-400/50 text-slate-300" : isCurrentPage
                            }
                        )}>
                            {page}
                        </Link>
                    </li>
                )
            })}

        </ul>
    )
}