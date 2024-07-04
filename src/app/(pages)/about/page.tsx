import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dean Morgan - Web Developer and e-Commerce Specialist",
  description: "Hi there, welcome to my site. I'm a web developer and e-commerce specialist based in the UK.",
};

export default function About() {
  return (
    <div className="max-w-prose">
      <h1>About Me</h1>
      <p>
        Hey! I&apos;m Dean Morgan, a web developer and consultant based in the
        UK. I began working in the web industry over 20 years ago, spending the
        last 10 years primarily in the e-commerce sector. I&apos;ve had the
        chance to work with all sorts of companies, from small start-ups to huge
        global brands.
      </p>
      <p>
        Right now, I&apos;m a Senior Developer at Big Eye Deers, a web
        development agency in Wales. My main gig is developing Magento 2
        websites, but I also dive into projects involving WordPress, Shopify,
        and custom web applications.
      </p>
      <p>
        I mostly do front-end development, with a passion for web performance
        and CSS architecture. I&apos;m all about making the web accessible to
        everyone, no matter their abilities.
      </p>
      <h1>About This Site</h1>
      <p>
        This site is still in it&apos;s early stages &#40;it&apos;s very much an
        alpha version at the time of writing&#41;, but I&apos;m planning to use
        it as a place to share my thoughts on web development, accessibility,
        and performance. I&apos;ll also be sharing some of my projects and
        experiments.
      </p>
      <p>
        At the time of writing, this site is built using Next.js, React,
        TypeScript and a heavily modified tailwind setup. It is using mdx for
        the content, and is deployed on Vercel. I&apos;m planning to write a
        series of posts on how I built this site, so stay tuned for that.
      </p>
    </div>
  );
}
