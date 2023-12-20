const href_nav_anim_list = document.querySelectorAll('nav>ul>li');
const href_end_section = document.querySelectorAll('main>section');

const href_nav_article_form = document.querySelector(
    'header>ul>li:nth-child(2)'
);
const href_end_article_form = document.querySelector('main>article');

const href_nav_footer = document.querySelector('header>ul>li:nth-child(3)');
const href_end_footer = document.querySelector('footer');

href_nav_footer.addEventListener('click', () => {
    href_end_footer.scrollIntoView({
        block: 'end',
        inline: 'center',
        behavior: 'smooth',
    });
});

href_nav_article_form.addEventListener('click', () => {
    href_end_article_form.scrollIntoView({
        block: 'end',
        inline: 'center',
        behavior: 'smooth',
    });
});

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 1500) {
        let ch = 0;
        document
            .querySelector('header>ul>li:first-child')
            .addEventListener('click', () => {
                if (ch === href_end_section.length) {
                    ch = 0;
                }
                href_end_section[ch].scrollIntoView({
                    block: 'start',
                    inline: 'center',
                    behavior: 'smooth',
                });
                ch++;
            });
    } else {
        for (let i = 0; i < href_nav_anim_list.length; i++) {
            href_nav_anim_list[i].addEventListener('click', function () {
                href_end_section[i].scrollIntoView({
                    block: 'end',
                    inline: 'center',
                    behavior: 'smooth',
                });
            });
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.clientWidth < 1500) {
        let ch = 0;
        document
            .querySelector('header>ul>li:first-child')
            .addEventListener('click', () => {
                if (ch === href_end_section.length) {
                    ch = 0;
                }
                href_end_section[ch].scrollIntoView({
                    block: 'start',
                    inline: 'center',
                    behavior: 'smooth',
                });
                ch++;
            });
    } else {
        for (let i = 0; i < href_nav_anim_list.length; i++) {
            href_nav_anim_list[i].addEventListener('click', function () {
                href_end_section[i].scrollIntoView({
                    block: 'end',
                    inline: 'center',
                    behavior: 'smooth',
                });
            });
        }
    }
});
