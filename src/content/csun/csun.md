---
path: '/blog/csun'
date: '2019-04-02'
title: 'CSUN Assistive Technology Conference 2019'
excerpt: 'My recap of CSUN 2019'
tags: ['accessibility']
---

CSUN ATC is THE accessibility conference with tracks including development, law, education, and independent living over 3 days in sunny Anaheim, California.

### Margie at CSUN

-   16 talks
-   3 company sponsored parties 🎉
-   Many new friends

### Day 0 - the day before the conference

Johanna Lucht, the first deaf engineer at NASA to take an active role in control room during crewed flight test, gave the keynote in ASL, with someone interpreting by speaking for her AND live captions were available as well.

After the keynote, I went out for dinner with some people I met. After dinner, we attended (or crashed) a party sponsored by Tenon. I got to talk to really cool people I had heard of through blog posts. The accessibility community is so nice and welcoming, so the conference was off to an awesome start.

### Conference Sessions

I headed over to the first session I wanted to attend, by Scott O'Hara, and found that it was crowded. I was able to stand in back for a few minutes before being kicked out due to fire hazards. You can check out Scott O'Hara's slides, [What to Do When Expectations Don't Match Up With Reality](https://scottaohara.github.io/talks_and_such/CSUN_2019/)

The first session I was able to sit in was about JAWS Inspect, which is an automated way to run manual testing. It tests JAWS output without having to own or understand JAWS on your own.

I went to a session about what is new in Axe, from Deque. Many accessibility checker apps are built on [Axe](https://www.deque.com/axe/), including the browser extension and test plugins. One speaker talked about Accessibility Insights, Axe for windows apps and another discussed Axe for Android and iOS - coming later this year. I recommended downloading the Axe Chrome Extension (or Firefox) to find accessibility issues in your web pages.

### Fun with ARIA

I went to several talks about ARIA, Accessible Rich Internet Applications. The first talk was about Aria-label, aria-labelledby, and aria-describedby on non-interactive elements. It turns out that support for ARIA on non-interactive elements varies. David MacDonald said developers should "think like a french chef" and "let the natural flavors do their thing", where the natural flavors mean semantic HTML. You can read more in [David MacDonald's blog post](http://davidmacd.com/blog/does-aria-label-override-static-text.html).

### CSS is important

Many front end developers don't consider CSS very important, but not understanding CSS can be dangerous to accessibility.

One talk was about how CSS can create a disconnect between the reading order and the visual order. For example, `display: none` hides content from everyone, including screen reader users. The [research presented at CSUN](https://dive4cb.github.io/index.html) was really interesting because they investigated several CSS properties and how they affect the DOM. The result was that sometimes different browser + AT combos handle one CSS technique differently.
Some other points were:
-   `::before`, `::after` pseudo classes can used to add content, but shouldn't
-   `position: absolute` - this creates a DOM disconnect

Marcy Sutton spoke about Emerging CSS Technologies and how they affect Accessibility. Here are some of the points she made:
-   Flexbox and CSS Grid have similar effects on accessibility - as long as you don't create a disconnect between the DOM order and the visual/focus order, these can be good tools to use when developing interfaces.
-   `focus-within` - a CSS selector to select the parent when descendant is focused.
-   `focus-visible` - a CSS selector for a keyboard only focus state. Maybe people will stop removing the focus outlines because they are "ugly" and acknowledge that they are useful.
-   `prefers-reduced motion` - A CSS media query to detect if user has requested minimized motion on their computer. This can help with users who are neurodiverse and would be distracted, but also reduce CPU usage on devices that cannot handle so much animation
-   You can take a look at [Marcy Sutton's slides](https://marcysutton.github.io/emerging-css-a11y)

### What are other companies doing? 

I went to talks given by employees from Slack and LinkedIn where they talked about how they are scaling their accessibility efforts. Training involves onboarding, resources, and tooling. I found these talks interesting as I am currently working to scale efforts at work as well. We won't get anywhere if there are just a few individuals working on accessibility. There are ways to make it easier to do the right thing for other engineers and designers.

-   Slack mentioned they picked some features to begin with based on user input
-   LinkedIn has an Engineering A11y Champions Program where they spend 25% of time on a11y during one quarter. They discussed how they would like to move from accessibility remediation to innovation.

### Fun at the Exhibit Hall

There was an exhibit hall (2 rooms!) filled with companies working on accessibility, developing assistive technologies, or offering their services as consultants. I walked around for a little and got to play with Microsoft's Adaptive Controller for Xbox and learn what was going on in the field.

### Conference Summary

I had an amazing time at CSUN 2019. I loved the community and meeting other folks who are even more passionate about accessibility than I am. It was so cool to meet my heros in the industry who are making the web a more inclusive place for everyone. The sessions were really informative, but the people were what made the conference amazing. I really hope I can go again.
