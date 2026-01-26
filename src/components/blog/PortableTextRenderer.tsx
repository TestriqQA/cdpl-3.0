import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '@/sanity/client'

// Custom Image Component using next-sanity-image for optimization
const SanityImage = ({ value }: { value: any }) => {
    const imageProps = useNextSanityImage(client, value)

    if (!imageProps) return null

    return (
        <div className="relative w-full my-8 rounded-xl overflow-hidden shadow-lg">
            <Image
                {...(imageProps as any)}
                alt={value.alt || 'Blog Image'}
                style={{ width: '100%', height: 'auto' }}
                sizes="(max-width: 800px) 100vw, 800px"
            />
        </div>
    )
}

const components: PortableTextComponents = {
    types: {
        image: SanityImage,
        table: ({ value }: { value: any }) => {
            const { rows } = value;
            if (!rows || !rows.length) return null;

            return (
                <div className="my-8 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        <tbody className="bg-white divide-y divide-gray-200">
                            {rows.map((row: any, rowIndex: number) => (
                                <tr key={row._key || rowIndex} className={rowIndex === 0 ? "bg-gray-50" : "hover:bg-gray-50 transition-colors"}>
                                    {row.cells.map((cell: string, cellIndex: number) => {
                                        const CellTag = rowIndex === 0 ? 'th' : 'td';
                                        return (
                                            <CellTag
                                                key={cellIndex}
                                                className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r last:border-r-0 border-gray-200 ${rowIndex === 0 ? 'font-bold text-gray-900' : ''}`}
                                            >
                                                {cell}
                                            </CellTag>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        },
        code: ({ value }: { value: any }) => (
            <div className="my-8 bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-100 font-mono text-sm">
                    <code>{value.code}</code>
                </pre>
                {value.filename && (
                    <div className="mt-2 text-xs text-gray-500 border-t border-gray-700 pt-2">
                        {value.filename}
                    </div>
                )}
            </div>
        ),
    },
    block: {
        h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-3">{children}</h4>,
        normal: ({ children }) => <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 my-8 bg-indigo-50 rounded-r-lg italic text-gray-700 text-lg">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <Link href={value.href} rel={rel} className="text-indigo-600 hover:text-indigo-800 underline transition-colors">
                    {children}
                </Link>
            )
        },
    },
}

export default function PortableTextRenderer({ value }: { value: any }) {
    return <PortableText value={value} components={components} />
}
