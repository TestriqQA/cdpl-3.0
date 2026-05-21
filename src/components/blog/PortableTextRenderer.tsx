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

// Helper to generate IDs from text
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

// Extract text content from children (which might be arrays of spans)
const getTextContent = (children: any): string => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
        return children.map(child => {
            if (typeof child === 'string') return child;
            if (child.props && child.props.text) return child.props.text; // Direct props access if available
            if (child.typeof === 'span') return child.props.children; // React element
            return '';
        }).join('');
    }
    return '';
};

const components: PortableTextComponents = {
    // ... (keep usage of image type above)
    types: {
        image: SanityImage,
        table: ({ value }: { value: any }) => {
            const { rows } = value;
            if (!rows || !rows.length) return null;

            return (
                <div className="my-8 overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-400">
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
            <div className="my-8 bg-gray-900 rounded-lg p-4 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-500 [scrollbar-width:thin] [scrollbar-color:rgb(75,85,99)_rgb(31,41,55)]">
                <pre className="text-gray-100 font-mono text-sm">
                    <code>{value.code}</code>
                </pre>
                {value.filename && (
                    <div className="mt-2 text-xs text-gray-400 border-t border-gray-700 pt-2">
                        {value.filename}
                    </div>
                )}
            </div>
        ),
    },
    block: {
        h2: ({ children, value }) => {
            // Try to use the key as a stable ID or fallback to slugifying content
            const id = value._key || slugify(getTextContent(children));
            return <h2 id={id} className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">{children}</h2>;
        },
        h3: ({ children, value }) => {
            const id = value._key || slugify(getTextContent(children));
            return <h3 id={id} className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">{children}</h3>;
        },
        h4: ({ children, value }) => {
            const id = value._key || slugify(getTextContent(children));
            return <h4 id={id} className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-3 scroll-mt-24">{children}</h4>;
        },
        normal: ({ children }) => <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 my-8 bg-indigo-50 rounded-r-lg italic text-gray-700 text-lg">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }) => {
            const href = value?.href || '#'
            // BLG-150: external = an absolute http(s) URL on a different host.
            // The old `!href.startsWith('/')` test wrongly flagged absolute
            // links to cinutedigital.com (and mailto:/tel:/#anchor) as external.
            let isExternal = false
            if (/^https?:\/\//i.test(href)) {
                try {
                    const host = new URL(href).hostname.replace(/^www\./, '')
                    isExternal = host !== 'cinutedigital.com'
                } catch {
                    isExternal = false
                }
            }
            return (
                <Link
                    href={href}
                    {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="text-indigo-600 hover:text-indigo-800 underline transition-colors"
                >
                    {children}
                </Link>
            )
        },
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc ml-6 my-6 space-y-2 text-gray-700">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal ml-6 my-6 space-y-2 text-gray-700">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="pl-1">{children}</li>,
        number: ({ children }) => <li className="pl-1">{children}</li>,
    },
}

export default function PortableTextRenderer({ value }: { value: any }) {
    return <PortableText value={value} components={components} />
}
