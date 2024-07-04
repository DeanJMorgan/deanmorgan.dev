import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dean Morgan - Web Developer and e-Commerce Specialist",
  description: "Hi there, welcome to my site. I'm a web developer and e-commerce specialist based in the UK.",
};

export default function Contact() {
  return (
    <div className="max-w-prose">
      <h1>Contact</h1>
      <p>
        If you want to hire me for a project, please send an email to{" "}
        <a
          href="mailto:hello@deanmorgan.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <code>hello@deanmorgan.dev</code>
        </a>
        , or if you just want to say hi, you can find me on{" "}
        <a
          href="https://twitter.com/deanjmorgan"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        ,{" "}
        <a
          href="https://linkedin.com/deanmorgan"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        , or Discord under the username {" "}
        <code>deanm56</code>
      </p>
    </div>
  );
}
