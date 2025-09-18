import Hero from "@/blocks/home/Hero.js";
import Quote from "@/blocks/home/Quote.js";
import GitHubStats from "@/components/GitHubStats.js";
import Contacts from "@/blocks/home/Contacts.js";

import "styles/pages/home.sass"


export default (t, locale) => {
    return /*html*/`
        ${Hero(t.hero)}
        ${Quote(t.quote)}
        ${GitHubStats()}
        ${Contacts(t.contacts)}
    `;
};
