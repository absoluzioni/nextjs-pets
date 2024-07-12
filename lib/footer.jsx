"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Footer(props) {
  function AdminFooterOrNot() {
    if (props.isAdmin) {
      return (
        <>
          <div className="open-chat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-chat-text-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
            </svg>
          </div>
          <div className="chat-box">
            <div className="chat-box__header">
              <h4 className="chat-box__title">Staff Team Chat</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
            <div className="chat-box__messages">
              <div className="chat-box__single">
                <p>We need to reach out to the latest contact for Sky.</p>
              </div>
              <div className="chat-box__single">
                <p>Bob, can you do that?</p>
              </div>
              <div className="chat-box__single chat-box__single--self">
                <p>Sure, no problem.</p>
              </div>
            </div>
            <form className="chat-box__form">
              <input
                type="message"
                name="message"
                id="message"
                autoComplete="off"
                placeholder="Your message here"
              />
            </form>
          </div>
          <p className="logout-text">
            <a href="" onClick={handleClick}>
              Logout
            </a>
          </p>
        </>
      );
    } else {
      return <></>;
    }
  }

  const router = useRouter();

  async function handleClick(e) {
    e.preventDefault();
    await axios.get("/logout-action");
    router.replace("/login");
    router.refresh();
  }

  return (
    <>
      <footer className="site-footer">
        {AdminFooterOrNot()}
        <p className="footer-nav">
          <Link href="/">Home</Link>
          <Link href="/our-history">Our History</Link>
          <Link href="/our-vision">Our Vision</Link>
        </p>
        <p>&copy; 2023 Fake Adoption Center. All rights reserved.</p>
      </footer>
    </>
  );
}
