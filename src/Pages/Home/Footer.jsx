import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.png" alt="Logoipsum" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
            <a
                href="#upwork"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
              <path
                d="M21.075 12.974c-2.09 0-3.375 1.597-3.475 2.582v-2.378H14.8v7.217c0 1.974-.978 3.003-2.378 3.003-1.4 0-2.38-1.029-2.38-3.003v-7.217h2.8v-2.8h-2.8V7.942H8.946v2.42H5.6v2.8h2.942v7.217c0 3.576 2.414 5.828 5.178 5.828 2.764 0 4.6-1.899 5.072-3.504v3.11h2.922v-7.55c.1-.94.922-1.69 1.987-1.69 1.075 0 1.897.75 1.897 1.702 0 .95-.823 1.7-1.897 1.7-.55 0-1.045-.207-1.347-.522v3.16c.55.192 1.182.282 1.822.282 2.512 0 4.35-1.94 4.35-4.622 0-2.683-1.838-4.575-4.35-4.575zM27.747 7.924c-.94 0-1.7.768-1.7 1.708 0 .94.76 1.708 1.7 1.708.95 0 1.707-.77 1.707-1.708 0-.94-.756-1.708-1.707-1.708z"
                fill="black"
              />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M28.6304 9.61132C28.0112 10.4373 27.2627 11.1579 26.4137 11.7451C26.4137 11.9609 26.4137 12.1767 26.4137 12.4045C26.4205 16.3229 24.8553 20.0803 22.0691 22.8341C19.2827 25.588 15.5083 27.108 11.5921 27.0533C9.32799 27.0609 7.0929 26.544 5.0619 25.5429C4.95238 25.4951 4.88175 25.3868 4.88216 25.2672V25.1353C4.88216 24.9632 5.02164 24.8237 5.1937 24.8237C7.41923 24.7503 9.56536 23.9787 11.3285 22.618C9.31404 22.5773 7.50159 21.384 6.66747 19.5491C6.62535 19.4489 6.63846 19.3339 6.7021 19.2457C6.76572 19.1576 6.87067 19.1091 6.979 19.1176C7.59123 19.1791 8.20958 19.1221 8.80027 18.9497C6.57652 18.4881 4.90562 16.642 4.66648 14.3824C4.65799 14.274 4.70656 14.1691 4.79467 14.1053C4.88276 14.0417 4.99766 14.0285 5.09784 14.0708C5.69459 14.3341 6.33879 14.4728 6.99099 14.4783C5.04246 13.1994 4.20082 10.7669 4.94207 8.55641C5.01859 8.34163 5.20242 8.18295 5.426 8.13871C5.64958 8.09445 5.87995 8.17116 6.03243 8.34064C8.66186 11.1391 12.2747 12.8067 16.1092 12.9918C16.0111 12.5999 15.9628 12.1971 15.9655 11.7931C16.0013 9.67441 17.3123 7.78707 19.2845 7.01461C21.2567 6.24217 23.4999 6.73749 24.964 8.26871C25.9619 8.07859 26.9267 7.74339 27.8276 7.27373C27.8936 7.23253 27.9773 7.23253 28.0433 7.27373C28.0845 7.33976 28.0845 7.42348 28.0433 7.48951C27.6069 8.48881 26.8697 9.32695 25.9345 9.88704C26.7535 9.79207 27.558 9.59888 28.3309 9.31164C28.396 9.26735 28.4815 9.26735 28.5465 9.31164C28.6011 9.33657 28.6419 9.38427 28.658 9.44201C28.6741 9.49976 28.664 9.56169 28.6304 9.61132Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content"></p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;