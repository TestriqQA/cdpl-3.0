import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";

export const metadata: Metadata = generateStaticPageMetadata({
  title: "Cookies Policy",
  description: "Read the Cookies Policy of Cinute Digital (CDPL). Understand how we use cookies to improve your browsing experience.",
  url: "/cookies-policy",
});

export default function CookiesPolicyPage() {
  const H1 = "text-3xl font-bold tracking-tight text-slate-900";
  const H2 = "text-2xl font-semibold tracking-tight text-slate-900";
  const H3 = "text-xl font-semibold tracking-tight text-slate-900";
  const P = "text-base leading-7 text-slate-700";
  const UL = "list-disc pl-6 space-y-2 text-base leading-7 text-slate-700";

  return (
    <div className="[color-scheme:light] bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
        <h1 className={H1}>Cookies Policy</h1>

        <div className="mt-6 space-y-8">
          {/* Cookies Policy */}
          <section className="space-y-4">
            <p className={P}><strong>Last updated: March 14, 2022</strong></p>
            <p className={P}>
              This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
            </p>
            <p className={P}>
              Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
            </p>
            <p className={P}>
              We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
            </p>
          </section>

          {/* Interpretation */}
          <section className="space-y-4">
            <h2 className={H2}>Interpretation</h2>
            <p className={P}>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </section>

          {/* Definitions */}
          <section className="space-y-4">
            <h2 className={H2}>Definitions</h2>
            <p className={P}>For the purposes of this Cookies Policy:</p>
            <ul className={UL}>
              <li>
                Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Cookies Policy) refers to TESTRIQ QA Lab, LLP, 215, A Wing, Main Frame Premises, Goregaon East, Mumbai 400065.
              </li>
              <li>
                Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
              </li>
              <li>
                Website refers to Cinute Digital Private Limited, accessible from <a className="underline text-blue-600 hover:text-blue-800" href="https://cinutedigital.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Cinute Digital Website" title="Visit Cinute Digital Website">Cinute Digital Private Limited (CDPL)</a>
              </li>
              <li>
                You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
              </li>
            </ul>
          </section>

          {/* The use of the Cookies */}
          <section className="space-y-4">
            <h2 className={H2}>The use of the Cookies</h2>
            <div className="space-y-4">
              <p className={P}>
                Type of Cookies We Use Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser. We use both session and persistent Cookies for the purposes set out below:
              </p>
              <div className="space-y-2">
                <h3 className={H3}>Necessary / Essential Cookies</h3>
                <p className={P}>Type: Session Cookies</p>
                <p className={P}>Administered by: Us</p>
                <p className={P}>
                  Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={H3}>Functionality Cookies</h3>
                <p className={P}>Type: Persistent Cookies</p>
                <p className={P}>Administered by: Us</p>
                <p className={P}>
                  Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className={H3}>Tracking and Performance Cookies</h3>
                <p className={P}>Type: Persistent Cookies</p>
                <p className={P}>Administered by: Third-Parties</p>
                <p className={P}>
                  Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them.
                </p>
              </div>
            </div>
          </section>

          {/* Your Choices Regarding Cookies */}
          <section className="space-y-4">
            <h2 className={H2}>Your Choices Regarding Cookies</h2>
            <p className={P}>
              If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
            </p>
            <p className={P}>
              If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
            </p>
            <p className={P}>
              If You’d like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.
            </p>
            <p className={P}>
              For the Chrome web browser, please visit this page from Google: <a className="underline text-blue-600 hover:text-blue-800" href="https://support.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Chrome Browser Settings" title="Chrome Browser Settings">Chrome Browser Settings</a>
            </p>
            <p className={P}>
              For the Internet Explorer web browser, please visit this page from Microsoft: <a className="underline text-blue-600 hover:text-blue-800" href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" aria-label="Disable Cookies in Internet Explorer" title="Disable Cookies in Internet Explorer">Disable Cookies in Internet Explorer</a>
            </p>
            <p className={P}>
              For the Firefox web browser, please visit this page from Mozilla: <a className="underline text-blue-600 hover:text-blue-800" href="https://support.mozilla.org/" target="_blank" rel="noopener noreferrer" aria-label="Firefox Cookie Settings" title="Firefox Cookie Settings">Firefox Cookie Settings</a>
            </p>
            <p className={P}>
              For the Safari web browser, please visit this page from Apple: <a className="underline text-blue-600 hover:text-blue-800" href="https://support.apple.com/guide/safari/" target="_blank" rel="noopener noreferrer" aria-label="Safari Privacy Controls" title="Safari Privacy Controls">Safari Privacy Controls</a>
            </p>
            <p className={P}>
              For any other web browser, please visit your web browser’s official web pages.
            </p>
          </section>

          {/* More Information about Cookies */}
          <section className="space-y-4">
            <h2 className={H2}>More Information about Cookies</h2>
            <p className={P}>You can learn more about cookies: <a href="#" className="underline text-blue-600 hover:text-blue-800" aria-label="What Are Cookies?" title="What Are Cookies?">What Are Cookies?</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
