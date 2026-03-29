import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineHourglass } from "react-icons/ai";

const CONTACT_EMAIL = "contact@tdmd.co.uk";

const FOOTER_LINK_CLASS =
  "group flex items-center align-middle gap-0.5 hover:opacity-80 transition-opacity";

const FOOTER_LINK_TEXT_CLASS = "group-hover:underline underline-offset-4";

export default async function Footer() {
  const branch_request = await fetch(
    "https://api.github.com/repos/AmzingTobias/Portfolio/branches/main"
  );

  let site_update: Date | undefined;

  if (branch_request.ok) {
    const json_response = await branch_request.json();
    const commit_date_string =
      json_response["commit"]["commit"]["author"]["date"];
    if (commit_date_string !== undefined) {
      site_update = new Date(commit_date_string);
    }
  }

  return (
    <footer className="flex flex-col gap-2 justify-center text-secondary items-center py-6">
      <div className="row-start-3 flex md:gap-8 gap-4 flex-wrap flex-col items-center md:flex-row">
        <a className={FOOTER_LINK_CLASS} href={`mailto:${CONTACT_EMAIL}`}>
          <AiFillMail />
          <span className={FOOTER_LINK_TEXT_CLASS}>{CONTACT_EMAIL}</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={FOOTER_LINK_CLASS}
          href={`https://github.com/AmzingTobias`}
        >
          <AiFillGithub />
          <span className={FOOTER_LINK_TEXT_CLASS}>GitHub</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={FOOTER_LINK_CLASS}
          href={`https://www.linkedin.com/in/tobiasdunn`}
        >
          <AiFillLinkedin />
          <span className={FOOTER_LINK_TEXT_CLASS}>LinkedIn</span>
        </a>
      </div>
      {site_update !== undefined && (
        <small className="flex flex-row items-center">
          <AiOutlineHourglass />
          &nbsp;Last Site Update: {site_update.toLocaleDateString("en-GB")}
        </small>
      )}
    </footer>
  );
}
