import type {Metadata} from "next";
import {Geist, Geist_Mono, IBM_Plex_Serif, Mona_Sans} from "next/font/google";
import {ClerkProvider, Show, SignInButton, SignUpButton, UserButton} from '@clerk/nextjs'

import "./globals.css";
import Navbar from "@/components/Navbar"
import {Toaster} from "@/components/ui/sonner";

const ibmPlexSerif = IBM_Plex_Serif({
    variable: "--font-ibm-plex-serif",
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    display: 'swap'

});

const MonaSans = Mona_Sans({
    variable: "--font-mono-sans",
    subsets: ["latin"],
    display: 'swap'
});

export const metadata: Metadata = {
    title: "PromptLibrary",
    description: "Transform your books into interactive AI components. Upload PDFs and chat with your books using voice.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html
                lang="en"
                className={`${ibmPlexSerif.variable} ${MonaSans.variable} relative font-sans h-full antialiased`}
            >
            <body className="min-h-full flex flex-col">

            <Navbar/>
            {children}
            <Toaster/>
            </body>
            </html>
        </ClerkProvider>
    );
}
