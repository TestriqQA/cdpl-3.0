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
