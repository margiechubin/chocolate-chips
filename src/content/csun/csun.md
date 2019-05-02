---
path: '/blog/csun'
date: '2019-04-02'
title: 'CSUN Assistive Technology Conference 2019'
excerpt: 'My thoughts on CSUN 2019'
tags: ['accessibility']
---

CSUN ATC is THE accessibility conference with tracks including development, law, education, and independent living over 3 days in sunny Anaheim, California.

### Margie at CSUN

-   16 talks
-   3 company sponsored parties 🎉
-   Many new friends

### Day 0 - the day before the conference

Johanna Lucht, the first deaf engineer at NASA to take an active role in control room during crewed flight test, gave the keynote in ASL, with someone interpreting by speaking for her AND live captions were available as well.

-   I met several cool people at dinner
-   We attended (most of us crashed) a party sponsored by Tenon

### Day 1 started well..

-   Kicked out of Scott O'Hara's talk, what to do when expectations don't match up with reality
    -   [CSUN Talk Slides](https://scottaohara.github.io/talks_and_such/CSUN_2019/)
-   Learned about JAWS Inspect, an automated way to check accessibility of JAWS output

### Learned about what's new in Axe

-   Many a11y checker apps are built on [Axe from Deque](https://www.deque.com/axe/)
-   Accessibility Insights - Axe for windows apps
-   Axe for Android - app that displays over other apps
-   Axe for iOS - coming later this year
-   Download the Axe Chrome Extension (or Firefox) to find accessibility issues in your web pages

### Fun with ARIA

-   Aria-label, aria-labelledby, aria-describedby
-   Support for ARIA on non-interactive elements varies
-   Think like a french chef
    -   Let the natural flavors do their thing
    -   Natural flavors === Semantic HTML
-   [David MacDonald's blog post](http://davidmacd.com/blog/does-aria-label-override-static-text.html)

### CSS Should Not Be Used for Content

-   Sometimes, CSS can create a disconnect between the reading order and the visual order.
-   For example, `display: none` hides content from everyone
-   `::before`, `::after` pseudo classes can used to add content, but shouldn't
-   `position: absolute` - this creates a DOM disconnect
-   The [research presented at CSUN](https://dive4cb.github.io/index.html) was really interesting because they investigated several CSS properties and how they affect the DOM. The result was that sometimes different browser + AT combos handle one CSS technique differently

### Emerging CSS Technologies

-   Flexbox and CSS Grid have similar effects on accessibility - as long as you don't create a disconnect between the DOM order and the visual/focus order, these can be good tools to use when developing interfaces
-   `focus-within` - select parent when descendant is focused.
-   `focus-visible` - keyboard only focus state. Maybe people will stop removing the focus outlines because they are "ugly" and acknowledge that they are useful
-   `prefers-reduced motion` - detect if user requested minimized motion. This can help with users who are neurodiverse and would be distracted, but also reduce CPU usage on devices that cannot handle so much animation
-   [Marcy Sutton's slides](https://marcysutton.github.io/emerging-css-a11y)

### Slack and LinkedIn

How are these companies scaling their a11y efforts? Training involves onboarding, resources, and tooling. I found these talks interesting as I am currently working to scale efforts at work as well. We won't get anywhere if there are just a few individuals working on accessibility. There are ways to make it easier to do the right thing for other engineers and designers.
-   Slack mentioned they picked some features to begin with based on user input
-   LinkedIn has an Engineering A11y Champions Program where they spend 25% of time on a11y during one quarter. They discussed how they would like to move from accessibility remediation to innovation.

### Fun at the Exhibit Hall

There was an exhibit hall (2 rooms!) filled with companies working on accessibility, developing assistive technologies, or offering their services as consultants. I walked around for a little and got to play with Microsoft's Adaptive Controller for Xbox and learn what was going on in the field.

### Conference Summary

-   I had am amazing time
-   I met cool people
-   I would go again
