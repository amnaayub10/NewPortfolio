import React from "react";
import "./style.css";
import {
  FaGithub,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaCircle
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  facebook: FaFacebookF,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  email:FaEnvelope,
  twitch: FaTwitch,
  youtube: FaYoutube
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <li key={platform}>
              <a href={url} target="_blank">
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
