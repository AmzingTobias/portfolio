import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineHourglass } from "react-icons/ai";

const CONTACT_EMAIL = "contact@tdmd.co.uk";

const FOOTER_LINK_CLASS =
  "flex items-center align-middle gap-0.5 hover:font-semibold hover:underline-offset-4";

export default async function Footer() {
  "use server";
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
    <footer className="flex flex-col gap-1 justify-center text-secondary items-center  py-2 ">
      <div className="row-start-3 flex gap-8 flex-wrap ">
        <a className={FOOTER_LINK_CLASS} href={`mailto:${CONTACT_EMAIL}`}>
          <AiFillMail />
          &nbsp;{CONTACT_EMAIL}
        </a>
        <a
          target="_blank"
          className={FOOTER_LINK_CLASS}
          href={`https://github.com/AmzingTobias`}
        >
          <AiFillGithub />
          &nbsp;GitHub
        </a>
        <a
          target="_blank"
          className={FOOTER_LINK_CLASS}
          href={`https://www.linkedin.com/in/tobiasdunn`}
        >
          <AiFillLinkedin />
          &nbsp;LinkedIn
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
