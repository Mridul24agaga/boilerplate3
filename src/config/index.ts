import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for NextBoilerplate a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Nextboilerplate - AI Powered Website Builder",
        template: `%s | NextBoilerplate`
    },
    description: "NextBoilerplate is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "NextBoilerplate - AI Powered Website Builder",
        description: "NextBoilerplate is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "NextBoilerplate - AI Powered Website Builder",
        description: "NextBoilerplate is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://NextBoilerplate.com"),
};
