---
path: '/blog/keyboard-nav'
date: '2019-05-15'
title: 'Keyboard Navigation - We can do better'
excerpt: 'Thoughts and tips on keyboard accessibility'
tags: ['accessibility']
---

### Global Accessibility Awareness Day

May 16th is Global Accessibility Awareness Day, or GAAD, inspiring people all over the world to plan events about access, inclusion, and accessibility. You can [read more on the GAAD website](https://globalaccessibilityawarenessday.org/). I gave this talk at work for GAAD, so here is the blog post version.

### Who uses the keyboard to navigate web pages?

Individuals with physical disabilities
* Some people can’t use a mouse
* The mouse requires a certain amount of dexterity
* Might use keyboard or other alternative input devices

Screen Reader Users
* **Screen readers:** software that reads content from the screen and allows a user to interact with the web page using the keyboard or other input methods
* Users typically include people who are visually impaired or blind
* Rely on semantic structure to navigate content

Power Users
* Users who might be able to use a mouse, but prefer to use the keyboard to enhance their workflow
* Often are developers!

---

### WCAG: Web Content Accessibility Guidelines
* **Perceivable:** Users can perceive the content and the information is available in multiple formats
* **Operable:** Users can operate and navigate the application
* **Understandable:** Users should be able to understand the interface and its information
* **Robust:** The interface can be interpreted by user agents - browsers and assistive technologies

Operable - Keyboard Access
<blockquote>
<b>All functionality of the content is operable through a keyboard interface</b> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. (Level A)
</blockquote>
<cite><a href="https://www.w3.org/TR/WCAG21/#keyboard" target="_blank">WCAG 2.1 Success Criterion 2.1.1 Keyboard</a></cite>


This is the official definition, but basically this says that all content needs to be operable through a keyboard interface.

#### WCAG Levels of Compliance
* A is must support, AA is should support, and AAA is may support
* Level A prevent showstoppers where user would not be able to use an application at all
* AA are the ones that would cause a user to find it difficult to use an application, but not impossible
* AAA is highest standard - probably want to meet this if you are a federal agency, higher education

All functionality of the content is operable through a keyboard interface
* The main keys are `tab` to move forward, and `shift+tab` to move backwards
    - When an item has focus, it can be activated using the keyboard
    - We don’t need to implement tab directly - make the elements focusable to support tabbing
* Other keys we need to implement are `space` , `enter`, `esc`, and the arrow keys

---

### How can we ensure keyboard usability?

1. **Semantics!** Use native HTML elements whenever possible. They will be accessible by default and allow the correct keyboard navigation
2. Use `tabIndex=0` to make the element focusable and implement the correct behavior yourself with `onKeyPress`/`onKeyDown` AND handling the correct key events. The key events you need to handle depend on the feature you are implementing.


Here is a code example of a fake button. Or... you could just use a button.

```jsx
const clickMe = () => console.log('clicked!');

const handleClick = e => {
    if (e.keyCode === 32){
        clickMe();
    }
}
const fakeButton => 
    <div role="button" tabIndex="0"
        onClick={clickMe} onKeyDown={handleClick}>
        ClICK ME
    </div>
```

#### Menu example
* use arrow keys to move up and down the menu items
* items should not control their own focus (be tab-able)

### Focus on the user

Focus Indicators - Can you see where you are on the page?

* If an element is interactive, it must have a visible focus state
* Browsers provide native focus states for native browser elements.
    - Can remove them using `outline:0` or `outline:none`.
    - Native focus states are not consistent across browsers, which is a reason to replace them
    - **TLDR; you can remove native focus states IF you replace them**
* The Chrome Extension [Focus Indicator](https://chrome.google.com/webstore/detail/focus-indicator/heeoeadndnhebmfebjccbhmccmaoedlf) displays a focus indicator on all active elements, even if it is suppressed

**Focus Order** is the idea that the order in which items on the page receive focus should be logical. The focus order is based on the order of elements in the DOM.

#### TabIndex specifics

* `tabIndex=0` adds element to focus order
* Using tabindex values greater than 0 will break the default focus order
    - There are some cases where using `tabindex=1+`, but when used improperly, this could require managing focus for the whole page
    - Tabindex 1+: will be processed in order 1, 2, 3...
* `tabIndex=-1` removes an item from the focus order intentionally
    - You can programmatically focus the element yourself using `elementRef.focus()`

[TabIndex Codepen Demo](https://codepen.io/margiechubin/pen/YJGpra)

#### Focus Traps

* There are times when you should or should not trap the focus in an element.
* For a new layer, the focus should be trapped in the layer until it is closed.
    - This applies to modals, drawers, and groups of elements such as tabs or radio elements

#### Menus - to trap or not to trap?

* For menus, it can be a nice experience to trap the focus in the group
* When you reach the end of the menu items, hitting the down arrow again will return you to the top of the list or hitting the up arrow when you’re at the top will take you to the bottom of the list.
* This is optional for accessibility.

Make sure you provide an `esc` hatch

If the focus is trapped, you should provide an `esc` hatch. Some groups can use `tab` to leave the group of elements the focus was trapped in. Otherwise, `esc` should close out of the group. Don't trap your users!


### How to implement correct keyboard navigation

Expected keyboard navigation is well defined for different widgets.

1. Semantic HTML
2. Use existing, tested components
3. Build a new component using documented guidelines such as the [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/), which provide guidance on how custom widgets (menus, tabs, dialogs, ect) should function

### Try to use a website without your mouse

* Can you access your most common features?
* Are any features that are completely inaccessible?
* Can you see where your focus is at all times?
* Do you ever get trapped?

### Summary

* Use Semantic HTML wherever possible
* Check expected keyboard navigation when you aren't sure
* Focus indicators need to be visible on interactive elements
* Test your features using the keyboard


### External Resources

* [WebAim Keyboard Techniques](https://webaim.org/techniques/keyboard/)
* [Mozilla Keyboard Documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
* [18F Keyboard Documentation](https://accessibility.18f.gov/keyboard/)
* [Writing Javascript with Accessibility in Mind](https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9)
* [Keyboard Accessibility Tips](https://webdesign.tutsplus.com/articles/keyboard-accessibility-tips-using-html-and-css--cms-31966)
* [I Used The Web For A Day With Just A Keyboard](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/)
* [The Paciello Group Notes on TabIndex](https://developer.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/)
