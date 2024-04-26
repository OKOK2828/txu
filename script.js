const welcomeText = `
Welcome to $TUX

`;

const aboutText = `
About :

Tux is the official mascot of the Linux kernel and represents the free and open-source software movement that Linux is a part of.
`;

const projectsText = `
$TUX:

1. Fair launch on pump.fun

2. 0/0 Taxes

3. Liquidity burn
`;

const socialMediaText = `
Social Media Links:

- Twitter: https://twitter.com/TuxSol
- Telegram: https://t.me/tuxsol
- Contract:  
`;

const thankYouText = `
Join Us
`;

const output = document.getElementById("output");

const sections = [welcomeText, aboutText, projectsText, socialMediaText, thankYouText];
let sectionIndex = 0;
let index = 0;

function type() {
    if (sectionIndex < sections.length) {
        const section = sections[sectionIndex];
        if (index < section.length) {
            output.innerHTML += section.charAt(index);
            index++;
            setTimeout(type, 15);
            window.scrollTo(0,document.body.scrollHeight); // Scroll to the bottom of the page
        } else {
            output.innerHTML += '<br /><br />';
            sectionIndex++;
            index = 0;
            setTimeout(type, 1000); // Add a longer pause between sections
        }
    }
}

type();
